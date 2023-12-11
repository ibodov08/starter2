import gulp from "gulp";
import url from "../config/url.js";
import gulpSize from "gulp-size";
import concat from "gulp-concat";
import cssImport from "gulp-cssimport";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import mediaCss from "gulp-group-css-media-queries";
import gulpWebp from "gulp-webp-css";


export default () =>{
  return gulp.src(url.css.src)
  .pipe(concat("style.css"))
  .pipe(gulpWebp())
  .pipe(cssImport())
  .pipe(autoprefixer())
  .pipe(shorthand())
  .pipe(mediaCss())
  .pipe(gulpSize({
    title: "main.css"
  }))
  .pipe(gulp.dest(url.css.dest))
  .pipe(csso())
  .pipe(gulpSize({
    title: "main.min.css"
  }))
  .pipe(rename({
    suffix: ".min"
  }))
 
  .pipe(gulp.dest(url.css.dest))
}
