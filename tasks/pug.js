import gulp from "gulp";
import url from "../config/url.js";
import gulpSize from "gulp-size";
import gulpPug from "gulp-pug";
import gulpWebp from "gulp-webp-html";



export default () =>{
  return gulp.src(url.pug.src)
  .pipe(gulpSize({
    title: "Before size: "
  }))
  .pipe(gulpPug({
    pretty: true
    // data: {
    //   baza: require("../baza/slider.json")
    // }
  }))
  .pipe(gulpSize({
    title: "After size: "
  }))
  .pipe(gulpWebp())
  .pipe(gulp.dest(url.pug.dest))
}