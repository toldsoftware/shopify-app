"use strict";
var tslib_1 = require("tslib");
function main(context, request) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            context.done(null, {
                headers: {
                    'Content-Type': 'text/html',
                },
                body: '<html><head></head><body>Welcome!</body></html>'
            });
            return [2 /*return*/];
        });
    });
}
exports.main = main;
//# sourceMappingURL=shopify-welcome.js.map