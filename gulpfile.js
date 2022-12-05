// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));

// style.scssをタスクを作成する
gulp.task("default", () => {
  // style.scssファイルを取得
  return (
    gulp
      .src("scss/*.scss")
      // Sassのコンパイルを実行
      .pipe(sass())
      // cssフォルダー以下に保存
      .pipe(gulp.dest("dest/css"))
  );
});

// var gulp = require("gulp");
// var rename = require("gulp-rename");
// var ejs = require("gulp-ejs");
// var replace = require("gulp-replace");

// gulp.task("ejs", (done) => {
// 	gulp
// 		.src(["ejs/**/*.ejs", "!" + "ejs/**/_*.ejs"])
// 		.pipe(ejs({}, {}, {ext:'.html'}))
// 		.pipe(rename({ extname: ".html" }))
//         .pipe(replace(/[\s\S]*?(<!DOCTYPE)/, "$1"))
// 		.pipe(gulp.dest("./"));
// 	done();
// });


// // const gulp = require('gulp');
// const imagemin = require('gulp-imagemin');
 
// exports.default = () => (
// 	gulp.src('images/**/*')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('dest/images/'))
// );



// gulp htmlbeautifyを実行
var htmlbeautify = require("gulp-html-beautify");

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