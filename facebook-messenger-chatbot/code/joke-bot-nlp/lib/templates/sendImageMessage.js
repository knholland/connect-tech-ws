'use strict';

const callSendAPI = require('../handlers/callSendAPI');

/*
 * Send an image using the Send API.
 *
 */
function sendImageMessage(recipientId) {
    let messageData = {
        recipient: {
            id: recipientId
        },
        message: {
            attachment: {
                type: 'image',
                payload: {
                    url: 'https://www.petfinder.com/wp-content/uploads/2012/11/152177319-declawing-cats-632x475-e1354303246526-632x353.jpg'
                }
            }
        }
    };

    callSendAPI(messageData);
}

module.exports = sendImageMessage;
