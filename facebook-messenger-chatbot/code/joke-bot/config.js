/*
 * Copyright 2016 Turner Broadcasting System, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const debug = require('debug')('app:config'),
    nconf = require('nconf');

// whitelist environment variables
nconf.env([
    'APP_SECRET',
    'DEFAULT_IMAGE',
    'DEFAULT_RESPONSE',
    'ENVIRONMENT',
    'PORT',
    'PAGE_ACCESS_TOKEN',
    'REQUEST_TIMEOUT',
    'TASK_INTERVAL',
    'VALIDATION_TOKEN'
]);

// These are required to be set to start up
if (!nconf.get('ENVIRONMENT') || !nconf.get('PORT') || !nconf.get('APP_SECRET') || !nconf.get('VALIDATION_TOKEN') || !nconf.get('PAGE_ACCESS_TOKEN')) {
    debug(`1. ${nconf.get('ENVIRONMENT')} || 2. ${nconf.get('PORT')} || 3. ${nconf.get('APP_SECRET')} || 4. ${nconf.get('VALIDATION_TOKEN')} || 5. ${nconf.get('PAGE_ACCESS_TOKEN')}`);
    console.error('Required environment values are not set');
    process.exit(1);
}

let config = {
    default: {
        defaultImage: nconf.get('DEFAULT_IMAGE') ? nconf.get('DEFAULT_IMAGE') : '',
        defaultResponse: nconf.get('DEFAULT_RESPONSE') ? nconf.get('DEFAULT_RESPONSE') : 'I can\'t find a joke right now.',
        requestTimeout: nconf.get('REQUEST_TIMEOUT') ? nconf.get('REQUEST_TIMEOUT') : 1000 * 60 * 1
    }
};

// load the correct config based on environment
switch (nconf.get('ENVIRONMENT').toLowerCase()) {
    case 'prod':
        nconf.defaults(config.prod);
        break;

    default:
        nconf.defaults(config.default);
}


// Load overrides that don't override anything, they fill in the blanks
nconf.overrides(config.default);



module.exports = nconf;
