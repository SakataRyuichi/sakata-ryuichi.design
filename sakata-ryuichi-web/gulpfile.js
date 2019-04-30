const webp = require('gulp-webp')

gulp.task('webp', function() {
  return gulp.src("./precompile/img/**/*.{svg,gif,png,jpg,jpeg}")
             .pipe(webp())
             .pipe(gulp.dest("./assets/img/"));
});
