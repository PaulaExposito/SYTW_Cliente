const gulp = require('gulp');
const gls = require('gulp-live-server');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

// gulp.task('server', () => {
//     let server = gls.static('.', 3000);
//     server.start();
// });

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", browserSync.reload);

    gulp.watch('src/styles/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });

    gulp.watch('src/styles/**/*.css').on("change", browserSync.reload);
});

gulp.task('styles', () => {
    return gulp.src(['src/styles/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/styles/'));
});

gulp.task('clean', () => {
    return del([
        'src/styles/**/index.css',
    ]);
});


gulp.task('default', gulp.series(['clean', 'styles', 'browser-sync']));
