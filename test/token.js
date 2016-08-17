'use strict';
const sinon = require('sinon');
const moment = require('moment');
const Token = require('../token');

describe('Token', function() {

  describe('#isExpired', function() {
    let token, clock;
    beforeEach(function () {
      clock = sinon.useFakeTimers(moment().unix());
      token = Token.create();
    });

    afterEach(function () {
      clock.restore();
    });

    it('not expired if token is just created', function () {
      assert.equal(Token.isExpired(token), false);
    });

    it('expired in one day', function () {
      clock.tick(moment.duration({ days: 1, seconds: 1 }).asMilliseconds());
      assert.equal(Token.isExpired(token), true);
    });
  });
});