var expect = require('expect.js');

var plugin = ((process.env.JSCOV === 1) ? require('../lib-cov/instrument.js') : require('../lib/instrument.js'));

describe('module', function() {
  it('exports Gulp plugin', function() {
    expect(plugin).to.be.a('function');
  });
});

describe('plugin', function() {
  it('returns stream', function() {
    var stream = plugin();
    expect(stream).to.be.an('object');
    expect(stream).to.have.property('write');
  });
});
