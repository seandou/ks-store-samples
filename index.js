'use strict';

const path = require('path');
const fs = require('fs');

let args = process.argv.slice(2);
let db = 'mongodb';

if (args[0] == '--db') {
  db = args[1];
}

let configFile = path.join(__dirname, db, 'config.js');
if (!fs.existsSync(configFile)) {
  console.log(`Config file not exists: ${db}/config.js`);
  process.exit(1);
}

require('node-next');
const config = require(configFile);
const run = require('./main');

run(config);
