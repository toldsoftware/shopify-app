import * as T from '@told/azure-functions-server/lib/src';

export async function main(context: T.Context<any>, request: T.Request<any, any>) {

    context.done(null, {
        headers: {
            'Content-Type': 'application/javascript',
        },
        body: `console.log('Test Script Injected');` as any
    });
}