import z from 'zod';
import { Fee } from '../../dex/index.js';
export declare const tridentStablePoolSchema: z.ZodObject<{
    reserve0: z.ZodObject<{
        amount: z.ZodString;
        currency: z.ZodDiscriminatedUnion<"isNative", [z.ZodObject<{
            isNative: z.ZodLiteral<true>;
            name: z.ZodOptional<z.ZodString>;
            symbol: z.ZodOptional<z.ZodString>;
            decimals: z.ZodNumber;
            chainId: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            chainId: number;
            isNative: true;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        }, {
            chainId: number;
            isNative: true;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        }>, z.ZodObject<{
            isNative: z.ZodLiteral<false>;
            name: z.ZodOptional<z.ZodString>;
            symbol: z.ZodOptional<z.ZodString>;
            decimals: z.ZodNumber;
            chainId: z.ZodNumber;
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chainId: number;
            address: string;
            isNative: false;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        }, {
            chainId: number;
            address: string;
            isNative: false;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        amount: string;
        currency: {
            chainId: number;
            isNative: true;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        } | {
            chainId: number;
            address: string;
            isNative: false;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        };
    }, {
        amount: string;
        currency: {
            chainId: number;
            isNative: true;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        } | {
            chainId: number;
            address: string;
            isNative: false;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        };
    }>;
    reserve1: z.ZodObject<{
        amount: z.ZodString;
        currency: z.ZodDiscriminatedUnion<"isNative", [z.ZodObject<{
            isNative: z.ZodLiteral<true>;
            name: z.ZodOptional<z.ZodString>;
            symbol: z.ZodOptional<z.ZodString>;
            decimals: z.ZodNumber;
            chainId: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            chainId: number;
            isNative: true;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        }, {
            chainId: number;
            isNative: true;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        }>, z.ZodObject<{
            isNative: z.ZodLiteral<false>;
            name: z.ZodOptional<z.ZodString>;
            symbol: z.ZodOptional<z.ZodString>;
            decimals: z.ZodNumber;
            chainId: z.ZodNumber;
            address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            chainId: number;
            address: string;
            isNative: false;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        }, {
            chainId: number;
            address: string;
            isNative: false;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        amount: string;
        currency: {
            chainId: number;
            isNative: true;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        } | {
            chainId: number;
            address: string;
            isNative: false;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        };
    }, {
        amount: string;
        currency: {
            chainId: number;
            isNative: true;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        } | {
            chainId: number;
            address: string;
            isNative: false;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        };
    }>;
    fee: z.ZodNativeEnum<typeof Fee>;
    total0: z.ZodObject<{
        base: z.ZodString;
        elastic: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        base: string;
        elastic: string;
    }, {
        base: string;
        elastic: string;
    }>;
    total1: z.ZodObject<{
        base: z.ZodString;
        elastic: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        base: string;
        elastic: string;
    }, {
        base: string;
        elastic: string;
    }>;
}, "strip", z.ZodTypeAny, {
    reserve0: {
        amount: string;
        currency: {
            chainId: number;
            isNative: true;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        } | {
            chainId: number;
            address: string;
            isNative: false;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        };
    };
    reserve1: {
        amount: string;
        currency: {
            chainId: number;
            isNative: true;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        } | {
            chainId: number;
            address: string;
            isNative: false;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        };
    };
    fee: Fee;
    total0: {
        base: string;
        elastic: string;
    };
    total1: {
        base: string;
        elastic: string;
    };
}, {
    reserve0: {
        amount: string;
        currency: {
            chainId: number;
            isNative: true;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        } | {
            chainId: number;
            address: string;
            isNative: false;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        };
    };
    reserve1: {
        amount: string;
        currency: {
            chainId: number;
            isNative: true;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        } | {
            chainId: number;
            address: string;
            isNative: false;
            decimals: number;
            name?: string | undefined;
            symbol?: string | undefined;
        };
    };
    fee: Fee;
    total0: {
        base: string;
        elastic: string;
    };
    total1: {
        base: string;
        elastic: string;
    };
}>;
export type SerializedStablePool = z.infer<typeof tridentStablePoolSchema>;
//# sourceMappingURL=zod.d.ts.map