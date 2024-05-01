import z from 'zod';
export declare const sushiSwapV2PoolSchema: z.ZodObject<{
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
}>;
export type SerializedSushiSwapV2Pool = z.infer<typeof sushiSwapV2PoolSchema>;
//# sourceMappingURL=zod.d.ts.map