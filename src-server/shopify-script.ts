import * as T from '@told/azure-functions-server/lib/src';

declare let require: any;
const fs = require('fs');

export async function main(context: T.Context<any>, request: T.Request<any, any>) {

    let path = './resources/shopify-script.js';

    fs.readFile(path, (err: any, data: any) => {
        let body = '' + data;

        context.done(null, {
            headers: {
                'Content-Type': 'application/javascript',
            },
            body: body as any
        });
    });


}