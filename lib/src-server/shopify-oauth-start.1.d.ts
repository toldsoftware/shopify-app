import * as T from '@told/azure-functions-server/lib/src';
export declare function main(context: T.Context<any>, request: T.Request<{
    hmac: string;
    shop: string;
    timestamp: string;
}, any>): void;
