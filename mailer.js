'use strict';

function send(address, content) {
  console.log('mailed to ' + address + ' with content: ', content);
}

module.exports = {
  send: send,
};
