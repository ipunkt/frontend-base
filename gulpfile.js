var gulp   = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build', ['clean'], function(cb) {
    gulpSequence('bower', 'copy', ['sass', 'webpack'] , cb);
});

gulp.task('watch', function(cb) {
    gulpSequence('build:dev', ['sass:watch', 'webpack:watch'], cb);
});
