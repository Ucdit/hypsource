var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
/*var sass = require('gulp-ruby-sass');*/

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});
// gulp.task('sass', function () {
//   return sass('source/**/*.scss')
//     .on('error', sass.logError)
//     .pipe(gulp.dest('result'));
// });
// 创建 Compass 任务
gulp.task('compass', function() {
  gulp.src('./scss/**')
    .pipe(compass({
        comments: false,
        css: 'css',
        sass: 'scss',
        image: 'img'
    }));
});