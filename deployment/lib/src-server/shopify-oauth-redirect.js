"use strict";
var shopify_token_1 = require("./shopify-token");
function main(context, request) {
    // TODO: verify nonce belongs to shop
    var isValid = shopify_token_1.shopifyToken.verifyHmac({
        code: request.query.code,
        hmac: request.query.hmac,
        timestamp: request.query.timestamp,
        state: request.query.state,
        shop: request.query.shop
    });
    // Exchange Token
    var accessToken = shopify_token_1.shopifyToken.getAccessToken(request.query.shop, request.query.code);
    accessToken.then(function (x) {
        // TODO: Store token
        console.log('shopify-oauth-redirect SUCCESS');
    }).catch(function (err) {
        console.log('shopify-oauth-redirect FAILED', err);
        throw err;
    });
    var redirectUrl = shopify_token_1.shopifyToken.generateAuthUrl(request.query.shop);
    context.done(null, {
        headers: {
            'Location': redirectUrl,
            'Content-Type': 'text/html',
        },
        body: "<html><head></head><body>Oauth Redirect</body></html>",
    });
}
exports.main = main;
//# sourceMappingURL=shopify-oauth-redirect.js.map