"use strict";
var tslib_1 = require("tslib");
var fs = require('fs');
function main(context, request) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var path;
        return tslib_1.__generator(this, function (_a) {
            path = './resources/shopify-script.js';
            fs.readFile(path, function (err, data) {
                var body = '' + data;
                context.done(null, {
                    headers: {
                        'Content-Type': 'application/javascript',
                    },
                    body: body
                });
            });
            return [2 /*return*/];
        });
    });
}
exports.main = main;
//# sourceMappingURL=shopify-script.js.map