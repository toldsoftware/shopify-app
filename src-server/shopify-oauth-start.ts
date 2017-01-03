import * as T from '@told/azure-functions-server/lib/src';

import { shopifyToken } from './shared/shopify-token';
import * as D from './data/shop';

export async function main(context: T.Context<any>, request: T.Request<{ hmac: string, shop: string, timestamp: string }, any>) {
    // let redirectUrl = `https://{shop}.myshopify.com/admin/oauth/authorize?client_id={api_key}&scope={scopes}&redirect_uri={redirect_uri}&state={nonce}&grant_options[]={option}`;
    let nonce = shopifyToken.generateNonce();
    let redirectUrl = shopifyToken.generateAuthUrl(request.query.shop.replace('.myshopify.com', ''), null, nonce);

    // Store shop w/ nonce together
    await D.storeShopNonce(request.query.shop, nonce);

    context.done(null, {
        status: 303,
        headers: {
            'Location': redirectUrl,
            'Content-Type': 'text/html',
        },
        body: `<html><head></head><body>Oauth Redirect</body></html>` as any,
    });
}