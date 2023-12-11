import gulp from "gulp";
import url from "../config/url.js";
import gulpSize from "gulp-size";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import rename from "gulp-rename";

export default () =>{
  return gulp.src(url.js.src)
  .pipe(gulpSize({
    title: "Before size: "
  }))

  .pipe(gulpSize({
    title: "After size: "
  }))
  .pipe(babel())
  .pipe(uglify())
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(gulp.dest(url.js.dest))
}