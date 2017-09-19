'use strict';

const debug = require('debug')('app:lib/handlers/receivedPostback'),
    sendTextMessage = require('../templates/sendTextMessage');

/*
 * Postback Event
 *
 * This event is called when a postback is tapped on a Structured Message.
 * https://developers.facebook.com/docs/messenger-platform/webhook-reference/postback-received
 *
 */
function receivedPostback(event) {
    let senderID = event.sender.id,
        recipientID = event.recipient.id,
        timeOfPostback = event.timestamp,
        payload;

    /**
    * The payload param is a developer-defined field which is set in a postback
    * button for Structured Messages.
    */
    payload = event.postback.payload;

    debug(`Received postback for user ${senderID} and page ${recipientID} with payload: ${payload} at ${timeOfPostback}`);

    /**
    * When a postback is called, we send a message back to the sender to let them
    * know it was successful
    */
    sendTextMessage(senderID, 'Postback called');
}

module.exports = receivedPostback;
