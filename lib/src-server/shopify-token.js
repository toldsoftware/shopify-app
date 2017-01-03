"use strict";
// https://github.com/lpinca/shopify-token
var ShopifyToken = require('shopify-token');
exports.shopifyToken = new ShopifyToken({
    apiKey: process.env.shopifyApiKey,
    sharedSecret: process.env.shopifySharedSecret,
    redirectUri: process.env.domain + '/api/shopify-oauth-redirect',
});
//# sourceMappingURL=shopify-token.js.map