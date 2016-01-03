var gulp = require('gulp'),
	//livereload = require('gulp-livereload'),
    // spritesmith = require('gulp.spritesmith'),
    sass = require('gulp-sass'),
    //imagemin = require('gulp-imagemin'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
gulp.task('watch', function () {
    livereload.listen();
    // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
    gulp.watch('public/**/*.*', function (file) {
        console.log("监控到变化，页面刷新");
        livereload.changed(file.path);
    });
});
//sass编译成css
gulp.task('sass', function () {
  gulp.src('./public/sass/pages/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
      .pipe(minifycss())
    .pipe(gulp.dest('./public/css/pages'));
});
 //监听sass，自动编译
gulp.task('sass:watch', function () {
  gulp.watch('./public/sass/*/*.scss', function() {
    gulp.src('./public/sass/pages/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
        .pipe(minifycss())
    .pipe(gulp.dest('./public/css/pages'));
  });
});



//生成基本雪碧图
gulp.task('sprite', function () {
  var spriteData = gulp.src('./public/static/img/fjs/origin/**/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '../../../sass/base/sprite.css',
    padding: 20,
    imgPath: '/img/fjs/sprite/sprite.png',
    // algorithm : 'top-down',
    // destCSS: 'less/_sprite.scss',
    // cssFormat: 'sass',
  })).pipe(imagemin());
  return spriteData.pipe(gulp.dest('./public/static/img/fjs/sprite'));
});


gulp.task('default',['sass','script'], function() {
  // place code for your default task here
  //gulp.src('./sass/*.scss')
  //.pipe(compass({
  //	config_file:'./config.rb',
  //	css: 'stylesheets',
  //	sass:'sass',
  //	task:'watch'
  //}))
  //.pipe(gulp.dest('public/stylesheets/'));
});



gulp.task('sprite:test', function () {
    var spriteData = gulp.src('./public/static/img/fjs/broke-test/**/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '../../../sass/pages/sprite.css',
        padding: 30,
        imgPath: '/img/fjs/broke-sprite/sprite.png',
        // algorithm : 'top-down',
        // destCSS: 'less/_sprite.scss',
        // cssFormat: 'sass',
    })).pipe(imagemin());
    return spriteData.pipe(gulp.dest('./public/static/img/fjs/broke-sprite'));
});
//每个页面对应的雪碧图
gulp.task('mortgage-sprite', function () {
    var spriteData = gulp.src('./public/static/img/fjs/mortgage/**/*.png').pipe(spritesmith({
        imgName: 'mortgage.png',
        cssName: '../../sass/sprite/mortgage.css',
        padding: 20,
        imgPath: '/img/fjs/mortgage.png',
    })).pipe(imagemin());
    return spriteData.pipe(gulp.dest('./public/static/img/fjs'));
});
gulp.task('person-sprite', function () {
    var spriteData = gulp.src('./public/static/img/fjs/person/**/*.png').pipe(spritesmith({
        imgName: 'person.png',
        cssName: '../../sass/sprite/person.css',
        padding: 20,
        imgPath: '/img/fjs/person.png'
    })).pipe(imagemin());
    return spriteData.pipe(gulp.dest('./public/static/img/fjs'));
});
gulp.task('active-sprite', function () {
    var spriteData = gulp.src('./public/static/img/fjs/active/**/*.png').pipe(spritesmith({
        imgName: 'active.png',
        cssName: '../../sass/sprite/active.css',
        padding: 20,
        imgPath: '/img/fjs/active.png',
    })).pipe(imagemin());
    return spriteData.pipe(gulp.dest('./public/static/img/fjs'));
});
//gulp.task('person-sprite', function () {
//    var spriteData = gulp.src('./public/static/img/fjs/person/**/*.png').pipe(spritesmith({
//        imgName: 'person.png',
//        cssName: '../../../sass/sprite/person.css',
//        padding: 30,
//        imgPath: '/img/fjs/person.png',
//    }));
//    return spriteData.pipe(gulp.dest('./public/static/img/fjs'));
//});

//压缩js
gulp.task('script',function(){
    return gulp.src('./public/static/js/fjs/pages/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/static/js/fjs/page'));
});
//压缩图片
gulp.task('image',function(){
    return gulp.src('./public/static/img/fjs/zhuolu/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/static/img/fjs/zhuolu'));
});
gulp.task('image-all',function(){
    return gulp.src('./public/static/img/**/*.png')
        .pipe(imagemin());
})