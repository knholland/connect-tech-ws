'use strict';

const callSendAPI = require('../handlers/callSendAPI'),
    data = require('../data'),
    debug = require('debug')('app:lib/templates/sendGenericMessage');

/*
 * Send a Structured Message (Generic Message type) using the Send API.
 *
 */
function sendGenericMessage(recipientId) {
    data().then(
        (joke) => {
            debug(`Joke: ${JSON.stringify(joke)}`);

            let messageData = {
                recipient: {
                    id: recipientId
                },
                message: {
                    attachment: {
                        type: 'template',
                        payload: {
                            template_type: 'generic',
                            elements: joke
                        }
                    }
                }
            };

            callSendAPI(messageData);
        }
    ).catch((error) => {
        console.error(`Error sendGenericMessage: ${error}`);
    });
}


module.exports = sendGenericMessage;
