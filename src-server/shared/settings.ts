declare var process: any;

export const shopifyApiKey = process.env.shopifyApiKey;
export const shopifySharedSecret = process.env.shopifySharedSecret;
export const domain = process.env.domain;
export const url_shopify_oauth_redirect = domain + '/api/shopify-oauth-redirect';
export const url_shopify_welcome = domain + '/api/shopify-welcome';
