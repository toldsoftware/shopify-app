import * as T from '@told/azure-functions-server/lib/src';

export function main(context: T.Context<any>, request: T.Request<any, any>) {

    let html = '<html><head></head><body>Hello!!!</body></html>';

    context.done(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/html',
        },
        body: html as any,
    });
}