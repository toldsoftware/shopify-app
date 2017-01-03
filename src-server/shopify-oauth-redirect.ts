import * as T from '@told/azure-functions-server/lib/src';

import { shopifyToken } from './shopify-token';

export function main(context: T.Context<any>, request: T.Request<{ code: string, hmac: string, timestamp: string, state: string, shop: string }, any>) {

    // TODO: verify nonce belongs to shop
    let isValid = shopifyToken.verifyHmac({
        code: request.query.code,
        hmac: request.query.hmac,
        timestamp: request.query.timestamp,
        state: request.query.state,
        shop: request.query.shop
    });

    // Exchange Token
    let accessToken = shopifyToken.getAccessToken(request.query.shop, request.query.code);

    accessToken.then(x => {
        // TODO: Store token
        console.log('shopify-oauth-redirect SUCCESS');
    }).catch(err => {
        console.log('shopify-oauth-redirect FAILED', err);
        throw err;
    });

    let redirectUrl = shopifyToken.generateAuthUrl(request.query.shop);

    context.done(null, {
        headers: {
            'Location': redirectUrl,
            'Content-Type': 'text/html',
        },
        body: `<html><head></head><body>Oauth Redirect</body></html>` as any,
    });
}