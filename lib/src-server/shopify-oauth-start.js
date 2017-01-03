"use strict";
var tslib_1 = require("tslib");
var shopify_token_1 = require("./shared/shopify-token");
var D = require("./data/shop");
function main(context, request) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var nonce, redirectUrl;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nonce = shopify_token_1.shopifyToken.generateNonce();
                    redirectUrl = shopify_token_1.shopifyToken.generateAuthUrl(request.query.shop.replace('.myshopify.com', ''), null, nonce);
                    // Store shop w/ nonce together
                    return [4 /*yield*/, D.storeShopNonce(request.query.shop, nonce)];
                case 1:
                    // Store shop w/ nonce together
                    _a.sent();
                    context.done(null, {
                        status: 303,
                        headers: {
                            'Location': redirectUrl,
                            'Content-Type': 'text/html',
                        },
                        body: "<html><head></head><body>Oauth Redirect</body></html>",
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.main = main;
//# sourceMappingURL=shopify-oauth-start.js.map