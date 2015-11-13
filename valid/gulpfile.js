var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
  spritesmith = require('gulp.spritesmith'),
  sass = require('gulp-sass')
  concatFile = require('gulp-concat'), 
  uglifyJS = require('gulp-uglify'), 
  shell = require('gulp-shell'),
  amdOptimize = require('amd-optimize');


gulp.task('bundle', function () {
  return gulp.src('./**/*.js')
    .pipe(amdOptimize('main'))
    .pipe(concatFile('test.js'))
    .pipe(gulp.dest('./jsbuild/'));
});
