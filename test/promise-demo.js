'use strict';

const pd = require('../promise-demo');

describe('PromiseDemo', function (){
  it('return promise that resolved into the input', function *() {
    let result = pd(5);
    yield assert.becomes(result, 5);
  });
});