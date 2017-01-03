"use strict";
function main(context, request) {
    context.done(null, {
        headers: {
            'Content-Type': 'text/html',
        },
        body: '<html><head></head><body>Welcome!</body></html>'
    });
}
exports.main = main;
//# sourceMappingURL=shopify-welcome.js.map