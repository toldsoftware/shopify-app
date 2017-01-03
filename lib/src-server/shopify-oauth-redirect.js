"use strict";
var S = require("./shared/settings");
var shopify_token_1 = require("./shared/shopify-token");
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
        var redirectUrl = S.url_shopify_welcome;
        context.done(null, {
            status: 303,
            headers: {
                'Location': redirectUrl,
                'Content-Type': 'text/html',
            },
            body: "<html><head></head><body>Oauth Redirect</body></html>",
        });
    }).catch(function (err) {
        console.log('shopify-oauth-redirect FAILED', err);
        context.done(err, null);
    });
}
exports.main = main;
//# sourceMappingURL=shopify-oauth-redirect.js.map