import * as T from '@told/azure-functions-server/lib/src';

export async function main(context: T.Context<any>, request: T.Request<any, any>) {

    context.done(null, {
        headers: {
            'Content-Type': 'text/html',
        },
        body: '<html><head></head><body>Welcome!</body></html>' as any
    });
}