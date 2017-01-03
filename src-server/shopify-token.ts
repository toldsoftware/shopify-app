declare var require: any;
declare var process: any;

// https://github.com/lpinca/shopify-token
const ShopifyToken = require('shopify-token');

export interface HmacQuery {
    hmac: string; // 'd1c59b480761bdabf7ee7eb2c09a3d84e71b1d37991bc2872bea8a4c43f8b2b3',
    signature: string; // '184559898f5bbd1301606e7919c6e67f',
    state: string; // 'b77827e928ee8eee614b5808d3276c8a',
    code: string; // '4d732838ad8c22cd1d2dd96f8a403fb7',
    shop: string; // 'dolciumi.myshopify.com',
    timestamp: string; // '1452342558'
}

export interface ShopifyTokenInterface {
    generateNonce(): string;
    generateAuthUrl(shop: string, scopes?: string[] | string, nonce?: string): string;
    verifyHmac(query: HmacQuery): boolean;
    getAccessToken(hostname: string, code: string): string;
}

export const shopifyToken = new ShopifyToken({
    apiKey: process.env.shopifyApiKey,
    sharedSecret: process.env.shopifySharedSecret,
    redirectUri: process.env.shopifyRedirectUri,
}) as ShopifyTokenInterface;