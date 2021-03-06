// including plugins
var gulp = require('gulp')
, uglify = require("gulp-uglify")
, concat = require("gulp-concat")
, Server = require('karma').Server;
 
// task
gulp.task('minify-js', function () {
    gulp.src('./src/*/*.js') // path to your files
    .pipe(uglify())// minify and strip comments from the code"
    .pipe(concat('angular-base64.min.js'))  // concat and name it
    .pipe(gulp.dest('./'));
});

gulp.task('concat-js', function () {
    gulp.src('./src/*/*.js') // path to your files
    .pipe(concat('angular-base64.js'))  // concat and name it "concat.js"
    .pipe(gulp.dest('./'));
});

gulp.task('build-js', function () {
    gulp.src('./src/*/*.js') // path to your files
    .pipe(uglify())// minify and strip comments from the code"
    .pipe(concat('angular-base64.min.js'))  // concat and name it
    .pipe(gulp.dest('./'));
    
    gulp.src('./src/*/*.js') // path to your files
    .pipe(concat('angular-base64.js'))  // concat and name it "concat.js"
    .pipe(gulp.dest('./'));
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});