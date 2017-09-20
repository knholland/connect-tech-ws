'use strict';

const debug = require('debug')('app:lib/handlers/sendTypingOn'),
    callSendAPI = require('../handlers/callSendAPI');

/*
 * Turn typing indicator on
 *
 */
function sendTypingOn(recipientId) {
    debug('Turning typing indicator on');

    let messageData = {
        recipient: {
            id: recipientId
        },
        sender_action: 'typing_on'
    };

    callSendAPI(messageData);
}

module.exports = sendTypingOn;
