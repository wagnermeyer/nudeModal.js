/**
 * ============= REQUIRE ===================
 */
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer')
/**
 * =========================================
 */



/**
 * ================= TASKS =================
 */

//SASS + CONCAT CSS+SASS
gulp.task('sass', function(){
  gulp.src('./src/sass/*.sass')
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('./dist/css'))
})

//CONCAT JS
gulp.task('concat-js',function(){

  var srcJs = './src/js/*.js'

  gulp.src(srcJs)
  .pipe(plumber())
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('./dist/js'))
})

/**
 * =========================================
 */



/**
 * ================ WATCH ================
 */

gulp.task('watch', function(){
  gulp.watch('./src/sass/*.sass', ['sass']);
  gulp.watch('./src/sass/**/*.sass', ['sass']);
  gulp.watch('./src/js/*.js', ['concat-js']);
})

/**
 * =========================================
 */



/**
 * ================ DEFAULT ================
 */

gulp.task('default', ['sass','concat-js','watch'])

/**
 * =========================================
 */

