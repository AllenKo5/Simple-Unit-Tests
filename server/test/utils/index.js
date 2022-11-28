const config = require('../test_config.js');
const utils = require('../../src/utils');

const { limits } = config;

describe('utils', () => {
  describe('add', () => {
    it('should return addition of two numbers', (done) => {
      const sum = utils.add(5, 10);
      sum.should.equal(15);
      done();
    });

    it('should clamp number to minimum', (done) => {
      const sum = utils.add(limits.MIN - 10, 5);
      sum.should.equal(limits.MIN);
      done();
    });

    it('should clamp number to maximum', (done) => {
      const sum = utils.add(limits.MAX, 5);
      sum.should.equal(limits.MAX);
      done();
    });
  });

  describe('subtract', () => {
    it('should return difference of two numbers', (done) => {
      const diff = utils.sub(10, 5);
      diff.should.equal(5);
      done();
    });

    it('should clamp number to minimum', (done) => {
      const diff = utils.sub(limits.MIN, 5);
      diff.should.equal(limits.MIN);
      done();
    });

    it('should clamp number to maximum', (done) => {
      const diff = utils.sub(limits.MAX + 10, 5);
      diff.should.equal(limits.MAX);
      done();
    });
  });
});
