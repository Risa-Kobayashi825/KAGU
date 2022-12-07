// gulpプラグインの読み込み
const gulp = require("gulp");


/*
sass→cssコンパイルのタスク gulp sass
*/
const sass = require("gulp-sass")(require("sass"));

gulp.task('sass', () => {
  return (
    gulp
      .src("scss/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("dest/css"))
  );
});

/*
画像圧縮のタスク gulp imagemin
*/
const imagemin = require('gulp-imagemin');

gulp.task('imagemin', () => {
  return (
    gulp.src('images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dest/images/'))
  );
});

/*
ejsをhtmlにコンパイル後にインデントを整えるタスク gulp htmlbeautify
*/
const htmlbeautify = require("gulp-html-beautify");

gulp.task('htmlbeautify', function(done) {
  var options = {
    indent_size: 2,
		indent_with_tabs: true
  };
  gulp.src('dest/*.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('dest/'));
	done();
});