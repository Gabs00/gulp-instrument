# gulp-instrument

[![Build Status](https://secure.travis-ci.org/alexmingoia/gulp-instrument.png)](http://travis-ci.org/alexmingoia/gulp-instrument) 
[![NPM version](https://badge.fury.io/js/gulp-instrument.png)](http://badge.fury.io/js/gulp-instrument)
[![Dependency Status](https://david-dm.org/alexmingoia/gulp-instrument.png)](http://david-dm.org/alexmingoia/gulp-instrument)

Gulp plugin for instrumenting code using jscoverage (or other instrumentation engine).

## Install

```sh
npm install --save gulp-instrument
```

## Usage

In your `gulpfile.js`:

```javascript
var gulp = require('gulp')
  , instrument = require('gulp-instrument');

gulp.task('instrument', function() {
  return gulp.src('lib/**.js')
    .pipe(instrument())
    .pipe(gulp.dest('lib-cov'));
});
```

### Instrumentation engine

Currently only jscoverage is supported, but support for other engines could be
added easily if somebody would like to contribute.

## BSD Licensed
