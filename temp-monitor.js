'use strict';
const mailer = require('./mailer.js');

function update(temp) {
  if(temp > 90) {
    mailer.send('admin@example.com', 'Warning high temperature');
  }
}

module.exports = {
  update: update,
};
