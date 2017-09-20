'use strict';

const debug = require('debug')('app:lib/handlers/sendReadReceipt'),
    callSendAPI = require('../handlers/callSendAPI');

/*
 * Send a read receipt to indicate the message has been read
 *
 */
function sendReadReceipt(recipientId) {
    debug('Sending a read receipt to mark message as seen');

    let messageData = {
        recipient: {
            id: recipientId
        },
        sender_action: 'mark_seen'
    };

    callSendAPI(messageData);
}

module.exports = sendReadReceipt;
