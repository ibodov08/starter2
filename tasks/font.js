import gulp from"gulp";
import url from "../config/url.js";
import gulpSize from "gulp-size";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import woff2 from "gulp-ttf2woff2";

export default () =>{
  return gulp.src(url.font.src)
  .pipe(gulpSize({
    title: "Before size: "
  }))
  .pipe(gulpSize({
    title: "After size: "
  }))
  .pipe(newer(url.font.dest))
  .pipe(fonter({
    formats: ["ttf", "eot", "woff", "svg"]
  }))
  .pipe(gulp.dest(url.font.dest))
  .pipe(newer(url.font.dest))
  .pipe(woff2())
  .pipe(gulp.dest(url.font.dest))
}
