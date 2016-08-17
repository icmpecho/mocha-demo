'use strict';
const chai = require('chai');
chai.use(require('chai-as-promised'));
global.assert = chai.assert;
global.expect = chai.expect;
chai.should();
global.sinon = require('sinon');
global.request = require('supertest-as-promised');