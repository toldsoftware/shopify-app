"use strict";
var tslib_1 = require("tslib");
var S = require("./shared/settings");
var shopify_token_1 = require("./shared/shopify-token");
var D = require("./data/shop");
function main(context, request) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var isNonceValid, isHmacValid, accessToken, loginToken, redirectUrl;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, D.verifyShopNonce(request.query.shop, request.query.state)];
                case 1:
                    isNonceValid = _a.sent();
                    if (!isNonceValid) {
                        context.done('Shop Nonce is not valid', null);
                    }
                    ;
                    isHmacValid = shopify_token_1.shopifyToken.verifyHmac({
                        code: request.query.code,
                        hmac: request.query.hmac,
                        timestamp: request.query.timestamp,
                        state: request.query.state,
                        shop: request.query.shop
                    });
                    if (!isHmacValid) {
                        context.done('Shop Hmac is not valid', null);
                    }
                    ;
                    return [4 /*yield*/, shopify_token_1.shopifyToken.getAccessToken(request.query.shop, request.query.code)];
                case 2:
                    accessToken = _a.sent();
                    console.log('shopify-oauth-redirect SUCCESS');
                    return [4 /*yield*/, D.storeShopAccessToken(request.query.shop, accessToken)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, D.removeShopNonce(request.query.shop, request.query.state)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, D.getShopLoginToken(request.query.shop)];
                case 5:
                    loginToken = _a.sent();
                    redirectUrl = S.url_shopify_welcome + '?loginToken=' + loginToken;
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
//# sourceMappingURL=shopify-oauth-redirect.js.map