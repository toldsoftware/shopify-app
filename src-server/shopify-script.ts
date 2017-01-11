import * as T from '@told/azure-functions-server/lib/src';

declare let require: any;
declare let __dirname: string;
const fs = require('fs');
const p = require('path') as { resolve(...parts: string[]): string };

export async function main(context: T.Context<any>, request: T.Request<any, any>) {

    let path = p.resolve(__dirname, 'resources', 'shopify-script.js');

    fs.readFile(path, (err: any, data: any) => {
        context.log('path=' + path + ' data=' + data + ' err=' + err);

        let body = '' + data;

        context.done(null, {
            headers: {
                'Content-Type': 'application/javascript',
            },
            body: body as any
        });
    });


}