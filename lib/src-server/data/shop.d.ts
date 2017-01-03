export declare function storeShopNonce(shop: string, nonce: string): Promise<{}>;
export declare function verifyShopNonce(shop: string, nonce: string): Promise<{}>;
export declare function removeShopNonce(shop: string, nonce: string): Promise<{}>;
export declare function storeShopAccessToken(shop: string, accessToken: string): Promise<{}>;
export declare function getShopLoginToken(shop: string): Promise<string>;
