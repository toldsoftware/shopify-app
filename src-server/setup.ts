import * as T from '@told/azure-functions-server/lib/src';

import { shopifyToken } from './shopify-token';

export function main(context: T.Context<any>, request: T.Request<{ hmac: string, shop: string, timestamp: number }, any>) {

    let redirectUrl = shopifyToken.generateAuthUrl(request.query.shop);
    context.done(null, {
        status: 303,
        headers: {
            'Location': redirectUrl,
            'Content-Type': 'text/html',
        },
        body: `<html><head></head><body>Oauth Redirect</body></html>` as any,
    });
}