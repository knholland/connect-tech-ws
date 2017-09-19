'use strict';

const callSendAPI = require('../handlers/callSendAPI');

/*
 * Send a Gif using the Send API.
 *
 */
function sendGifMessage(recipientId) {
    let messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: 'image',
                payload: {
                    url: 'https://media.giphy.com/media/uU3oBlPJTx184/giphy.gif'
                }
            }
        }
    };

    callSendAPI(messageData);
}

module.exports = sendGifMessage;
