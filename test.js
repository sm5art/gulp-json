var gulp = require('gulp');
var gulpPrefixer = require('./index');

gulp.task('update-api', ()=> {
return gulp.src('wow.json')
  .pipe(gulpPrefixer())
  .pipe(gulp.dest('jsons'));
});