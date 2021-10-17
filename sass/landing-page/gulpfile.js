const gulp = require('gulp');
const gls = require('gulp-live-server');

gulp.task('default', () => {

  let server = gls.static('.', 80);
  server.start();

});


