'use strict';
const moment = require('moment');

function create() {
  return { expiration: moment().add(1, 'd') };
}

function isExpired(token) {
  return moment() > token.expiration;
}

module.exports = {
  create: create,
  isExpired: isExpired,
};