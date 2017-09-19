'use strict';

const callSendAPI = require('../handlers/callSendAPI');

/*
 * Send a message with Quick Reply buttons.
 *
 */
function sendQuickReply(recipientId) {
    let messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            text: 'Can I tell you a joke?',
            quick_replies: [
                {
                    content_type: 'text',
                    title: 'Yes!',
                    payload: 'joke'
                }
            ]
        }
    };

    callSendAPI(messageData);
}

module.exports = sendQuickReply;
