"use strict";
var shopify_token_1 = require("./shopify-token");
function main(context, request) {
    // let redirectUrl = `https://{shop}.myshopify.com/admin/oauth/authorize?client_id={api_key}&scope={scopes}&redirect_uri={redirect_uri}&state={nonce}&grant_options[]={option}`;
    var nonce = shopify_token_1.shopifyToken.generateNonce();
    var redirectUrl = shopify_token_1.shopifyToken.generateAuthUrl(request.query.shop.replace('.myshopify.com', ''), null, nonce);
    // TODO: Store shop w/ nonce together
    context.done(null, {
        status: 303,
        headers: {
            'Location': redirectUrl,
            'Content-Type': 'text/html',
        },
        body: "<html><head></head><body>Oauth Redirect</body></html>",
    });
}
exports.main = main;
//# sourceMappingURL=shopify-oauth-start.1.js.map