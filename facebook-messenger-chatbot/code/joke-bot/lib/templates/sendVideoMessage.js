'use strict';

const callSendAPI = require('../handlers/callSendAPI');

/*
 * Send a video using the Send API.
 *
 */
function sendVideoMessage(recipientId) {
    let messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: 'video',
                payload: {
                    url: ''
                }
            }
        }
    };

    callSendAPI(messageData);
}

module.exports = sendVideoMessage;
