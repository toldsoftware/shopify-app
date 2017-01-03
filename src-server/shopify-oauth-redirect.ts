import * as T from '@told/azure-functions-server/lib/src';

import * as S from './shared/settings';
import { shopifyToken } from './shared/shopify-token';
import * as D from './data/shop';

export async function main(context: T.Context<any>, request: T.Request<{ code: string, hmac: string, timestamp: string, state: string, shop: string }, any>) {

    let isNonceValid = D.verifyShopNonce(request.query.shop, request.query.state);

    let isHmacValid = shopifyToken.verifyHmac({
        code: request.query.code,
        hmac: request.query.hmac,
        timestamp: request.query.timestamp,
        state: request.query.state,
        shop: request.query.shop
    });

    // Exchange Token
    let accessToken = await shopifyToken.getAccessToken(request.query.shop, request.query.code);

    console.log('shopify-oauth-redirect SUCCESS');

    await D.storeShopAccessToken(request.query.shop, accessToken);
    await D.removeShopNonce(request.query.shop, request.query.state);
    let loginToken = await D.getShopLoginToken(request.query.shop);

    let redirectUrl = S.url_shopify_welcome + '?loginToken=' + loginToken;

    context.done(null, {
        status: 303,
        headers: {
            'Location': redirectUrl,
            'Content-Type': 'text/html',
        },
        body: `<html><head></head><body>Oauth Redirect</body></html>` as any,
    });



}