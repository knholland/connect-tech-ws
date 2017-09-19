'use strict';

const config = require('../config'),
    request = require('request');

/**
 * Gets a Cat Fact from designated API
 *
 * @return {Promise}
 * Returns a promise.
 */
function getCatFact() {
    return new Promise((resolve, reject) => {
        /**
        * We are building our URL using environment variables.
        *
        * Unless we change these values using environment variables, the URL is:
        * http://www.catfact.info/api/v1/facts.json
        *
        * To see how this is done, check out code-examples/config.js
        */
        request.get(`${config.get('factsEndpoint')}`, (err, res, body) => {
            if (!err) {
                /*
                 * unless we add additional params to query, this should only
                 * return a default 25 catfacts at a time
                 *
                 * Math.floor(Math.random() * (max - min)) + min
                 */
                const factNumber = Math.floor(Math.random() * (25 - 0)) + 0;
                console.log('factNumber', factNumber);

                resolve(JSON.parse(body).facts[factNumber].details);
            } else {
                console.error(`🚒 Error getCatFacts: ${JSON.stringify(err)}`);
                reject(err);
            }
        });
    });
}

function getCatImage() {
    return new Promise((resolve) => {
        resolve('http://thecatapi.com/api/images/get');
    });
}

module.exports = {
    getCatFact,
    getCatImage
};
