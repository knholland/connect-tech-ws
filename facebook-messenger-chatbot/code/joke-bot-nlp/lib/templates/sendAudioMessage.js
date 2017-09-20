'use strict';

const callSendAPI = require('../handlers/callSendAPI');

/*
 * Send audio using the Send API.
 *
 */
function sendAudioMessage(recipientId) {
    let messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: 'audio',
                payload: {
                    url: ''
                }
            }
        }
    };

    callSendAPI(messageData);
}

module.exports = sendAudioMessage;
