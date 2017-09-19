'use strict';

const callSendAPI = require('../handlers/callSendAPI'),
    data = require('../data');

/*
 * Send a text message using the Send API.
 *
 */
function sendTextMessage(recipientId, messageText) {
    data().then(
        (joke) => {
            let messageData = {
                recipient: {
                    id: recipientId
                },
                message: {
                    text: joke ? joke : messageText,
                    metadata: 'defaultResponse'
                }
            };

            callSendAPI(messageData);
        }
    ).catch((error) => {
        console.error(`Error sendTextMessage: ${error}`);
    });
}

module.exports = sendTextMessage;
