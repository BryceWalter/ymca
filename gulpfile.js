var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var inlineCss = require('gulp-inline-css');
var reload = browserSync.reload;

gulp.task('inliner', function() {
    return gulp.src('./*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('./build'));
});

gulp.task('serve', function () {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });

    gulp.watch("./styles.css", gulp.series('inliner'))
    gulp.watch("./build/*.html").on("change", reload);
});