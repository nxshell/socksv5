const server = require('./lib/server');
const client = require('./lib/client');
const none = require('./lib/auth/None');
const password = require('./lib/auth/UserPassword');

module.exports = {
  server,
  client,
  auth: {
    none,
    password
  }
};
