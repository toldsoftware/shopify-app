export interface HmacQuery {
    hmac: string;
    signature: string;
    state: string;
    code: string;
    shop: string;
    timestamp: string;
}
export interface ShopifyTokenInterface {
    generateNonce(): string;
    generateAuthUrl(shop: string, scopes?: string[] | string, nonce?: string): string;
    verifyHmac(query: HmacQuery): boolean;
    getAccessToken(hostname: string, code: string): string;
}
export declare const shopifyToken: ShopifyTokenInterface;
