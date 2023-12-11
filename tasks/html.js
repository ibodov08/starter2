import gulp from "gulp";
import url from "../config/url.js";
import gulpFileInclude from"gulp-file-include";
import htmlMin from"gulp-htmlmin";
import gulpSize from"gulp-size";
import gulpWebp from"gulp-webp-html";

export default () =>{
  return gulp.src(url.html.src)
  .pipe(gulpFileInclude())
  .pipe(gulpSize({
    title: "Before size: "
  }))
  .pipe(htmlMin({
    collapseWhitespace: true
  }))
  .pipe(gulpSize({
    title: "After size: "
  }))
  .pipe(gulpWebp())
  .pipe(gulp.dest(url.html.dest))
}
