'use strict';

const config = require('../../config'),
    crypto = require('crypto'),
    APP_SECRET = config.get('APP_SECRET');

/*
 * Verify that the callback came from Facebook. Using the App Secret from
 * the App Dashboard, we can verify the signature that is sent with each
 * callback in the x-hub-signature field, located in the header.
 *
 * https://developers.facebook.com/docs/graph-api/webhooks#setup
 *
 */
function verifyRequestSignature(req, res, buf) {
    let signature = req.headers['x-hub-signature'];

    if (!signature) {
        // if prod, throw error
        if (config.get('ENVIRONMENT').toLowerCase() === 'prod') {
            console.error('Invalid signature');
            throw new Error('Invalid signature.');
        } else {
            console.error('Couldn\'t validate the signature.');
        }
    } else {
        let elements = signature.split('='),
            // method = elements[0],
            signatureHash = elements[1],
            expectedHash = crypto.createHmac('sha1', APP_SECRET)
                .update(buf)
                .digest('hex');

        if (signatureHash != expectedHash) {
            throw new Error('Couldn\'t validate the request signature.');
        }
    }
}

module.exports = verifyRequestSignature;
