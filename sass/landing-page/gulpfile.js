const gulp = require('gulp');
const gls = require('gulp-live-server');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('server', () => {
    let server = gls.static('.', 3000);
    server.start();
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
    gulp.watch("*.html").on("change", browserSync.reload);
    gulp.watch("**/*.css").on("change", browserSync.reload);
});


gulp.task('styles', () => {
    gulp.src(['src/styles/**/*.css'])
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});


gulp.task('default', gulp.parallel('styles', 'browser-sync'));