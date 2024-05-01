import z from 'zod';
export declare const nativeSchema: z.ZodObject<{
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
}>;
export declare const tokenSchema: z.ZodObject<{
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
}>;
export declare const amountSchema: z.ZodObject<{
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
export type SerializedNative = z.infer<typeof nativeSchema>;
export type SerializedToken = z.infer<typeof tokenSchema>;
export type SerializedAmount = z.infer<typeof amountSchema>;
//# sourceMappingURL=zod.d.ts.map