"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinReadStream = exports.BinWriteStream = void 0;
const MAX_BYTE2_VALUE = (1 << 16) - 1;
const MAX_BYTE3_VALUE = (1 << 24) - 1;
const MAX_BYTE4_VALUE = 2 ** 32 - 1;
const INT24_SHIFT = 1 << 23;
const TWO64 = 2n ** 64n;
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const floatArray = new Float64Array(1);
const floatArrayAsUint8 = new Uint8Array(floatArray.buffer);
const bigUint64Array = new BigUint64Array(255);
const bigUint64ArrayAsUint8 = new Uint8Array(bigUint64Array.buffer);
// TODO: try Uint16/32Array ot DataView instaed of manual work
class BinWriteStream {
    data;
    position = 0;
    constructor(primarySize = 2 ** 15) {
        this.data = new Uint8Array(primarySize);
    }
    getSerializedData() {
        return this.data.subarray(0, this.position);
    }
    ensurePlace(bytes) {
        if (this.position + bytes <= this.data.byteLength)
            return;
        const data = new Uint8Array(this.data.byteLength * 2);
        data.set(this.data);
        this.data = data;
        this.ensurePlace(bytes);
    }
    uint8(num) {
        if (num > 255 || !Number.isInteger(num))
            console.error(`uint8 serialization error ${num}`);
        this.ensurePlace(1);
        this.data[this.position++] = num;
    }
    uint16(num) {
        if (num > MAX_BYTE2_VALUE || !Number.isInteger(num))
            console.error(`uint16 serialization error ${num}`);
        this.ensurePlace(2);
        this.data[this.position++] = num % 256;
        this.data[this.position++] = num / 256;
    }
    uint24(num) {
        if (num > MAX_BYTE3_VALUE || !Number.isInteger(num))
            console.error(`uint24 serialization error ${num}`);
        this.ensurePlace(3);
        this.data[this.position++] = num % 256;
        num /= 256;
        this.data[this.position++] = num % 256;
        num /= 256;
        this.data[this.position++] = num % 256;
    }
    int24(num) {
        this.uint24(num + INT24_SHIFT);
    }
    uint32(num) {
        if (num > MAX_BYTE4_VALUE || !Number.isInteger(num))
            console.error(`uint32 serialization error ${num}`);
        this.ensurePlace(4);
        for (let i = 0; i < 4; ++i) {
            this.data[this.position++] = num % 256;
            num /= 256;
        }
    }
    float64(num) {
        this.ensurePlace(8);
        floatArray[0] = num;
        this.data.set(floatArrayAsUint8, this.position);
        this.position += 8;
    }
    bigUInt(num, debug0 = '', debug1 = '') {
        if (num < 0) {
            console.error(`Serialization error: Negative bigint value ${num} ${debug0} ${debug1}`);
            num = -num;
        }
        this.ensurePlace(2041);
        for (let i = 0; i < 255; ++i) {
            if (num === 0n) {
                this.data[this.position] = i;
                this.data.set(bigUint64ArrayAsUint8.subarray(0, 8 * i), this.position + 1);
                this.position += 8 * i + 1;
                return;
            }
            bigUint64Array[i] = num % TWO64;
            num /= TWO64;
        }
        console.error('Serialization error: too huge bigint');
        this.data[this.position] = 255;
        this.position += 2041;
    }
    bigInt(num) {
        if (num > 0)
            this.bigUInt(num);
        else {
            const pos = this.position;
            this.bigUInt(-num);
            if (this.data[pos] > 127)
                console.error('Serialization error: too huge negative bigint');
            this.data[pos] += 128;
        }
    }
    str16UTF8(s) {
        this.ensurePlace(s.length * 4 + 2);
        const { read, written } = textEncoder.encodeInto(s, this.data.subarray(this.position + 2, this.position + 2 + Math.min(s.length * 4, MAX_BYTE2_VALUE)));
        if (read !== s.length)
            console.error(`String serialization error: ${read} symbols were read instead of ${s.length}`);
        this.uint16(written);
        this.position += written;
    }
    // works slower
    // str16UTF8Buff(s: string) {
    //   const data = Buffer.from(s, 'utf8')
    //   this.ensurePlace(data.length + 2)
    //   this.uint16(data.length)
    //   this.data.set(data, this.position)
    //   this.position += data.length
    // }
    str16UTF16(s) {
        if (s.length >= MAX_BYTE2_VALUE) {
            console.error(`String serialization error: string length is ${s.length}, will be trimmed to ${MAX_BYTE2_VALUE}`);
            s = s.substring(0, MAX_BYTE2_VALUE);
        }
        const length = s.length;
        this.ensurePlace(length * 2 + 2);
        this.data[this.position++] = length % 256;
        this.data[this.position++] = length / 256;
        for (let i = 0; i < length; ++i) {
            const code = s.charCodeAt(i);
            this.data[this.position++] = code % 256;
            this.data[this.position++] = code / 256;
        }
    }
    str16(s) {
        return this.str16UTF8(s); // should be faster
    }
    // addressCompact(s: string) {
    //   if (s.length === 42) {
    //     this.uint32(parseInt(s.substring(2, 10)))
    //     this.uint32(parseInt(s.substring(10, 18)))
    //     this.uint32(parseInt(s.substring(18, 26)))
    //     this.uint32(parseInt(s.substring(26, 34)))
    //     this.uint32(parseInt(s.substring(34, 42)))
    //   }
    // }
    // not compact, but fast
    address(s) {
        this.ensurePlace(40);
        if (s.length !== 42)
            s = `0x${s.substring(2).padStart(40, '0')}`;
        const { read, written } = textEncoder.encodeInto(s.substring(2), this.data.subarray(this.position, this.position + 40));
        if (read !== 40 || written !== 40)
            console.error(`Address serialization error: ${read} symbols were read instead of 40`);
        this.position += written;
    }
    reserveUint16() {
        this.ensurePlace(2);
        const position = this.position;
        this.position += 2;
        return position;
    }
    setLengthUint16(position) {
        const value = this.position - position - 2;
        if (value > MAX_BYTE2_VALUE || !Number.isInteger(value))
            console.error(`uint16 serialization error ${value}`);
        this.data[position] = value % 256;
        this.data[position + 1] = value / 256;
    }
}
exports.BinWriteStream = BinWriteStream;
class BinReadStream {
    data;
    position = 0;
    constructor(data) {
        this.data = data;
    }
    restBytes() {
        return this.data.byteLength - this.position;
    }
    ensurePlace(bytes) {
        if (this.position + bytes <= this.data.byteLength)
            return;
        throw new Error('Out of stream');
    }
    skip(bytes) {
        this.ensurePlace(bytes);
        this.position += bytes;
    }
    uint8() {
        this.ensurePlace(1);
        return this.data[this.position++];
    }
    uint16() {
        this.ensurePlace(2);
        const low = this.data[this.position++];
        const high = this.data[this.position++];
        return low + 256 * high;
    }
    uint24() {
        this.ensurePlace(3);
        const byte0 = this.data[this.position++];
        const byte1 = this.data[this.position++];
        const byte2 = this.data[this.position++];
        return byte0 + 256 * (byte1 + 256 * byte2);
    }
    int24() {
        return this.uint24() - INT24_SHIFT;
    }
    uint32() {
        this.ensurePlace(4);
        const byte0 = this.data[this.position++];
        const byte1 = this.data[this.position++];
        const byte2 = this.data[this.position++];
        const byte3 = this.data[this.position++];
        return byte0 + 256 * (byte1 + 256 * (byte2 + 256 * byte3));
    }
    float64() {
        this.ensurePlace(8);
        floatArrayAsUint8.set(this.data.subarray(this.position, this.position + 8));
        this.position += 8;
        return floatArray[0];
    }
    bigUInt() {
        const len = this.uint8();
        this.ensurePlace(len * 8);
        bigUint64ArrayAsUint8.set(this.data.subarray(this.position, this.position + len * 8));
        let res = 0n;
        for (let i = len - 1; i >= 0; --i) {
            res *= TWO64;
            res += bigUint64Array[i];
        }
        this.position += len * 8;
        return res;
    }
    bigInt() {
        const lenOrig = this.uint8();
        const len = lenOrig & 127;
        this.ensurePlace(len * 8);
        bigUint64ArrayAsUint8.set(this.data.subarray(this.position, this.position + len * 8));
        let res = 0n;
        for (let i = len - 1; i >= 0; --i) {
            res *= TWO64;
            res += bigUint64Array[i];
        }
        this.position += len * 8;
        return len === lenOrig ? res : -res;
    }
    str16UTF8() {
        const len = this.uint16();
        this.ensurePlace(len);
        this.position += len;
        return textDecoder.decode(this.data.subarray(this.position - len, this.position));
    }
    str16UTF16() {
        const len = this.uint16();
        this.ensurePlace(len);
        const charCodes = new Array(len);
        for (let i = 0; i < len; ++i) {
            const low = this.data[this.position++];
            const high = this.data[this.position++];
            charCodes[i] = low + 256 * high;
        }
        return String.fromCharCode(...charCodes);
    }
    str16() {
        return this.str16UTF8();
    }
    address() {
        this.ensurePlace(40);
        this.position += 40;
        return `0x${textDecoder.decode(this.data.subarray(this.position - 40, this.position))}`;
    }
}
exports.BinReadStream = BinReadStream;
//# sourceMappingURL=BinarySerialization.js.map