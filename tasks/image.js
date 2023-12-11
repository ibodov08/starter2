import gulp from "gulp";
import url from"../config/url.js";
import gulpSize from"gulp-size";
import imageMin from"gulp-imagemin";
import newer from"gulp-newer";
import webp from"gulp-webp";
import gulpIf from"gulp-if";

export default () =>{
  return gulp.src(url.image.src)
  .pipe(gulpSize({
    title: "Before size: "
  }))
  .pipe(gulpSize({
    title: "After size: "
  }))
  .pipe(newer(url.image.dest))
  .pipe(webp())
  .pipe(gulp.dest(url.image.dest))
  .pipe(gulp.src(url.image.src))
  .pipe(newer(url.image.dest))
  .pipe(gulpIf(url.proIs,imageMin({
    verbose: true
  })))
  .pipe(gulp.dest(url.image.dest))
}
