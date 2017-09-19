'use strict';

const debug = require('debug')('app:lib/handlers/sendTypingOff'),
    callSendAPI = require('../handlers/callSendAPI');

/*
 * Turn typing indicator off
 *
 */
function sendTypingOff(recipientId) {
    debug('Turning typing indicator off');

    let messageData = {
        recipient: {
            id: recipientId
        },
        sender_action: 'typing_off'
    };

    callSendAPI(messageData);
}

module.exports = sendTypingOff;
