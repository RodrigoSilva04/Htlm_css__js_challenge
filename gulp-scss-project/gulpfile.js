const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// SCSS to CSS task
function scssTask() {
  return gulp
    .src('src/scss/**/*.scss') // Source folder
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css')); // Destination folder
}

// Watch task
function watchTask() {
  gulp.watch('src/scss/**/*.scss', scssTask);
}

// Default task
exports.default = gulp.series(scssTask, watchTask);
