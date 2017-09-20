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
        // This works for simple examples, but would probably want this to be smarter if building a real bot
        intent = event.message.nlp ? Object.keys(event.message.nlp.entities)[0] : 'set up wit.ai',
        config = require('../../config'),
        sendGenericMessage = require('../templates/sendGenericMessage'),
        sendTextMessage = require('../templates/sendTextMessage');

    debug(`Received message for user:${senderID} + page:${recipientID} + at ${timeOfMessage}`);
    debug(JSON.stringify(message));

    if (message) {
        debug(`User message received: ${JSON.stringify(message)}`);
        debug(`User intent received: ${JSON.stringify(intent)}`);

        switch(intent) {
            case 'greetings':
                sendTextMessage(senderID, '👋🏻');
                break;

            case 'joke':
                sendTextMessage(senderID, null);
                break;

            case 'bye':
                sendTextMessage(senderID, 'ok, bye! 👀');
                break;

            default:
                sendTextMessage(senderID, config.get('defaultResponse'));
        }
        // sendTextMessage(senderID, config.get('defaultResponse'));
        return;
    } else {
        debug('not a message');
    }
}

module.exports = receivedMessage;
