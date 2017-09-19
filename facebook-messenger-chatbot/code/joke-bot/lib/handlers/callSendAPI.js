'use strict';

const config = require('../../config'),
    debug = require('debug')('app:lib/handlers/callSendAPI'),
    PAGE_ACCESS_TOKEN = config.get('PAGE_ACCESS_TOKEN'),
    request = require('request');

/*
 * Call the Send API. The message data goes in the body. If successful, we'll
 * get the message id in a response
 *
 */
function callSendAPI(messageData) {
    request({
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token: PAGE_ACCESS_TOKEN},
        method: 'POST',
        json: messageData
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let recipientId = body.recipient_id,
                messageId = body.message_id;

            if (messageId) {
                debug(`Successfully sent message with id: ${messageId} to recipient: ${recipientId}`);
            } else {
                debug(`Successfully called Send API for recipient ${recipientId}`);
            }
        } else {
            console.error('Failed calling Send API', response.statusCode, response.statusMessage, body.error);
        }
    });
}

module.exports = callSendAPI;
