var through  = require('through2');
var coverage = require('jscoverage');

module.exports = function() {
  return through.obj(function(file, enc, done) {
    if (!file.isNull()) {

      if (file.isBuffer()) {
        var js = file.contents.toString();
        var instrumented = coverage.process(file.path, js);

        file.contents = new Buffer(instrumented);
      }
      else if (file.isStream()) {
        file.contents = file.contents.pipe(through(function(chunk, enc, next) {
          var js = new Buffer(chunk, enc);
          var instrumented = coverage.process(file.path, js.toString('utf8'));

          this.push(instrumented);
          next();
        }));
      }
    }

    this.push(file);

    done();
  });
};
