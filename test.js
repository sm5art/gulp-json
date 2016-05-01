var gulp = require('gulp');
var gulpJson = require('./index');


 gulp.src('api.json')
  .pipe(gulpJson())
  .pipe(gulp.dest('api'));
