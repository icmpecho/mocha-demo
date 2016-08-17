'use strict';
const mailer = require('../mailer');
const tempMonitor = require('../temp-monitor');

describe('TemperatureMonitor', function () {

  describe('#update', function () {
    let mock;

    before(function () {
      mock = sinon.mock(mailer);
    });

    after(function () {
      mock.restore();
    });

    it('send email to admin if temperature is above 90', function () {
      mock.expects('send')
        .once()
        .withExactArgs('admin@example.com', 'Warning high temperature');
      tempMonitor.update(91);
      mock.verify();
    });

    it('does not send email if temperature is 90', function () {
      mock.expects('send').never();
      tempMonitor.update(90);
      mock.verify(); 
    });

  });
});