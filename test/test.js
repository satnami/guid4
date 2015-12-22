var should = require('chai').should(),
    guid4 = require('../index');

describe('#uuid', function() {
  it('generate guid4', function() {
    guid4.should.have.length(36);
  });
});