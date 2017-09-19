'use strict';

const config = require('../config'),
    debug = require('debug')('app:lib/data'),
    request = require('request');

function getContent() {
    return new Promise((resolve, reject) => {
        request('https://api.chucknorris.io/jokes/random', (error, res, body) => {
            debug(`Res Headers: ${JSON.stringify(res.headers)}`);

            if (!error) {
                /*
                 * Example body:
                 * {
                 *      "category":null,
                 *      "icon_url":"https:\/\/assets.chucknorris.host\/img\/avatar\/chuck-norris.png",
                 *      "id":"nf91mo_csxefyctefgwrrw",
                 *      "url":"http:\/\/api.chucknorris.io\/jokes\/nf91mo_csxefyctefgwrrw",
                 *      "value":"\u0027Icy-Hot\u0027 is too weak for Chuck Norris. After a workout, Chuck Norris rubs his muscles down with liquid-hot MAGMA."
                 * }
                 */
                resolve(JSON.parse(body).value);
            } else {
                console.error(error);
                debug(`🚒 Error from query: ${JSON.stringify(error)}`);
                reject(error);
            }
        });
    });
}

module.exports = getContent;
