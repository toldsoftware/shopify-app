"use strict";
var tslib_1 = require("tslib");
var fs = require('fs');
var p = require('path');
function main(context, request) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var path;
        return tslib_1.__generator(this, function (_a) {
            path = p.resolve(__dirname, 'resources', 'shopify-script.js');
            fs.readFile(path, function (err, data) {
                context.log('path=' + path + ' data=' + data + ' err=' + err);
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