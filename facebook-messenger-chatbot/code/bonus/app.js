'use strict';

const bodyParser = require('body-parser'),
    config = require('./config'),
    debug = require('debug')('app:app'),
    express = require('express'),
    pkg = require('./package.json'),
    receivedMessage = require('./lib/handlers/receivedMessage'),
    verifyRequestSignature = require('./lib/handlers/verify'),
    VALIDATION_TOKEN = config.get('VALIDATION_TOKEN');

let app = express();

app.set('port', config.get('PORT'));

app.use(bodyParser.json({verify: verifyRequestSignature}));

/*
 * Check that the token used in the Webhook setup is the same token used here.
 * This route is used by Facebook to validate the webhook endpoint.
 */
app.get('/webhook', (req, res) => {
    if (req.query['hub.mode'] === 'subscribe' &&
        req.query['hub.verify_token'] === VALIDATION_TOKEN) {
        debug('Validating webhook');
        res.status(200).send(req.query['hub.challenge']);
    } else {
        debug('Failed validation. Make sure the validation tokens match.');
        console.error('Failed validation. Make sure the validation tokens match.');
        res.sendStatus(403);
    }
});


/*
 * All callbacks for Messenger are POST-ed. They will be sent to the same
 * webhook.
 *
 * NOTE: To receive callbacks, must subscribe app to the page on Messenger
 * console.
 * https://developers.facebook.com/docs/messenger-platform/product-overview/setup#subscribe_app
 *
 */
app.post('/webhook', (req, res) => {
    let data = req.body;

    // Make sure this is a page subscription
    if (data.object == 'page') {
        /**
         * Iterate over each entry.
         *
         * NOTE: It is possible to have multiple if batched.
         */
        data.entry.forEach(function (pageEntry) {
            debug(`pageEntry in POST /webhook: ${JSON.stringify(pageEntry)}`);

            /**
             * Iterate over each messaging event.
             *
             * We currently are only concerned with messages
             */
            pageEntry.messaging.forEach((messagingEvent) => {
                if (messagingEvent.message) {
                    debug('receivedMessage');
                    receivedMessage(messagingEvent);
                } else {
                    debug(`Webhook received unknown messagingEvent: ${messagingEvent}`);
                }
            });
        });

        /**
        * Need to send a 200 back with 20sec or request will timeout
        */
        res.sendStatus(200);
    }
});


// start server
app.listen(app.get('port'), () => {
    debug(`Webhook running on ${app.get('port')}`);
});
