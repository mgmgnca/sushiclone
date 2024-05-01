import serializer from 'serialijse';
import { ChainId } from 'sushi/chain';
import { PoolCode } from '../router/index.js';
export { serializer };
export declare function makeSerializable(poolCodes: PoolCode[]): void;
export declare function restoreAfterSerialization(poolCodes: PoolCode[]): void;
export declare function serializePoolCodesJSON(pools: PoolCode[]): object;
export declare function deserializePoolCodesJSON(data: string): PoolCode[];
export declare function savePoolSnapshot(poolCodes: PoolCode[], chainId: ChainId, blockNumber: number | undefined, directory?: string): Promise<void>;
export declare function loadPoolSnapshot(chainId: ChainId, blockNumber: number | undefined, directory?: string): Promise<PoolCode[] | undefined>;
//# sourceMappingURL=index.d.ts.map