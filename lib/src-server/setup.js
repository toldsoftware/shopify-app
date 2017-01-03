"use strict";
var shopify_token_1 = require("./shopify-token");
function main(context, request) {
    var redirectUrl = shopify_token_1.shopifyToken.generateAuthUrl(request.query.shop);
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
//# sourceMappingURL=setup.js.map