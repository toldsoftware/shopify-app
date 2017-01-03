"use strict";
function main(context, request) {
    var html = '<html><head></head><body>Hello!!!</body></html>';
    context.done(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/html',
        },
        body: {
            ok: true,
            data: html,
        }
    });
}
exports.main = main;
//# sourceMappingURL=setup.js.map