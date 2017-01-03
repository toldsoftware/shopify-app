"use strict";
var S = require("./settings");
// https://github.com/lpinca/shopify-token
var ShopifyToken = require('shopify-token');
exports.shopifyToken = new ShopifyToken({
    apiKey: S.shopifyApiKey,
    sharedSecret: S.shopifySharedSecret,
    redirectUri: S.url_shopify_oauth_redirect,
});
//# sourceMappingURL=shopify-token.js.map