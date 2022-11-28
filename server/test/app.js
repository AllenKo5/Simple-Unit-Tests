require('./test_config.js');
require('chai').should();

const app = require('../src/app.js');

describe('server', () => {
  it('should start the server', (done) => {
    app.should.not.be.an('undefined');
    done();
  });
});
