'use strict';

const callSendAPI = require('../handlers/callSendAPI');

/*
 * Send a button message using the Send API.
 *
 */
function sendButtonMessage(recipientId) {
    let messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'button',
                    text: 'I want a joke. 🤣',
                    buttons: [
                        {
                            type: 'postback',
                            title: 'Trigger Postback',
                            payload: 'joke-postback'
                        }
                    ]
                }
            }
        }
    };

    callSendAPI(messageData);
}

module.exports = sendButtonMessage;
