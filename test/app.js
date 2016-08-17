'use strict';

const app = require('../app');

describe('App', function () {

  describe('GET /', function () {
    it('return hello world json', function *() {
      yield request(app).get('/')
        .expect('Content-Type', /json/)
        .expect(200, { data: 'hello world!' })
    });
  });

});
