var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css');
//sass编译成css
gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
      .pipe(minifycss())
    .pipe(gulp.dest('./css'));
});
 //监听sass，自动编译
gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', function() {
    
    gulp.src('./sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
  });
});







