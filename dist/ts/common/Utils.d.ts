/// <reference types="node" />
export declare class Utils {
    getOrderHash(order: any): Buffer;
    getTypedData({ token, spender, tokenIdOrAmount, data, expiration, chainId }: {
        token: any;
        spender: any;
        tokenIdOrAmount: any;
        data: any;
        expiration: any;
        chainId: any;
    }): {
        types: {
            EIP712Domain: {
                name: string;
                type: string;
            }[];
            TokenTransferOrder: {
                name: string;
                type: string;
            }[];
        };
        domain: {
            name: string;
            version: string;
            chainId: any;
            contract: any;
        };
        primaryType: string;
        message: {
            spender: any;
            tokenIdOrAmount: any;
            data: any;
            expiration: any;
        };
    };
    signEIP712TypedData(data: any, privateKey: any): string;
}
