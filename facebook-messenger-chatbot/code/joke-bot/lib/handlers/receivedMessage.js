'use strict';

const debug = require('debug')('app:lib/handlers/receivedMessage');




/*
 * Message Event
 *
 * This event is called when a message is sent to your page. The 'message'
 * object format can vary depending on the kind of message that was received.
 * Reference docs:
 * https://developers.facebook.com/docs/messenger-platform/webhook-reference/message-received
 *
 * For this example, we're going to echo any text that we get. If we get some
 * special keywords ('button', 'generic', 'receipt'), then we'll send back
 * examples of those bubbles to illustrate the special message bubbles we've
 * created. If we receive a message with an attachment (image, video, audio),
 * then we'll simply confirm that we've received the attachment.
 *
 */
function receivedMessage(event) {
    let senderID = event.sender.id,
        recipientID = event.recipient.id,
        timeOfMessage = event.timestamp,
        message = event.message,
        config = require('../../config'),
        sendGenericMessage = require('../templates/sendGenericMessage'),
        sendTextMessage = require('../templates/sendTextMessage');

    debug(`Received message for user:${senderID} + page:${recipientID} + at ${timeOfMessage}`);
    debug(JSON.stringify(message));

    if (message) {
        debug(`User message received: ${message}`);
        sendTextMessage(senderID, config.get('defaultResponse'));
        // sendGenericMessage(senderID);
        return;
    } else {
        debug('not a message');
    }
}

module.exports = receivedMessage;
