const gulp = require('gulp'),
      sass = require('gulp-sass'),
      rename = require('gulp-rename'),
      jshint = require('gulp-jshint'),
      minifyjs = require('gulp-js-minify');

const scssFiles = './sass/*.scss',
      cssDest = './public/stylesheets',
      jsFiles = [
          './scripts/*.js'
          ],
      jsDest = './public/javascripts';

const options = {
  outputStyle: 'compressed'
}

gulp.task('sass', function() {
  return gulp.src(scssFiles)
    .pipe(sass(options).on('error', sass.logError))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(cssDest));
});


gulp.task('lint', function() {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyjs())
        .pipe(gulp.dest(jsDest));
});

gulp.task('watch', function() {
  gulp.watch(scssFiles, ['sass']);
  gulp.watch(jsFiles, ['lint', 'scripts']);
});

gulp.task('default', ['watch']);