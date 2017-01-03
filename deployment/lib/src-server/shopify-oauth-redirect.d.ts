import * as T from '@told/azure-functions-server/lib/src';
export declare function main(context: T.Context<any>, request: T.Request<{
    code: string;
    hmac: string;
    timestamp: string;
    state: string;
    shop: string;
}, any>): void;
