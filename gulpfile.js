var gulp = require('gulp');
var gulpPrefixer = require('./index');

gulp.task('default', ()=> {
return gulp.src('wow.json')
  .pipe(gulpPrefixer())
  .pipe(gulp.dest('jsons'));
});