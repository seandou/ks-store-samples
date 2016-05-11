var path = require('path');

module.exports = {
  type: 'mongoose',
  host: '127.0.0.1',
  dbname: 'test',
  models: path.join(__dirname, 'models'),
};