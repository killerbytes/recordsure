var gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

// var $ = require('gulp-load-plugins')();
var openURL = require('open');
var lazypipe = require('lazypipe');
var rimraf = require('rimraf');
var wiredep = require('wiredep').stream;
var runSequence = require('run-sequence');

const $ = gulpLoadPlugins();
let dev = true;

var styles = lazypipe()
  .pipe($.sass, {
    outputStyle: 'expanded',
    precision: 10
  })
  .pipe($.autoprefixer, 'last 1 version')
  .pipe(gulp.dest, '.tmp/styles');


gulp.task('clean:tmp', function (cb) {
  rimraf('./.tmp', cb);
});

gulp.task('styles', function () {
  return gulp.src('app/styles/**/*.scss')
    .pipe(styles());
});


// gulp.task('scripts', () => {
//   return gulp.src('app/scripts/**/*.js')
//     .pipe($.plumber())
//     .pipe($.if(dev, $.sourcemaps.init()))
//     .pipe($.if(dev, $.sourcemaps.write('.')))
//     .pipe(gulp.dest('.tmp/scripts'))
//     .pipe(reload({stream: true}));
// });

gulp.task('watch', function () {
  $.watch('app/styles/**/*.scss')
    .pipe($.plumber())
    .pipe(styles())
    .pipe($.connect.reload());

  $.watch('app/views/**/*.html')
    .pipe($.plumber())
    .pipe($.connect.reload());

  $.watch('app/scripts/**/*.js')
    .pipe($.plumber())
    .pipe($.connect.reload());

  $.watch('test/spec/**/*.js')
    .pipe($.plumber())

  gulp.watch('bower.json', ['bower']);
});

// inject bower components
gulp.task('bower', function () {
  return gulp.src('app/index.html')
    .pipe(wiredep({
      directory: './bower_components',
      ignorePath: '..'
    }))
  .pipe(gulp.dest('app'));
});

gulp.task('start:client', ['start:server', 'styles'], function () {
  openURL('http://localhost:9000');
});

gulp.task('start:server', function() {
  $.connect.server({
    root: ['app', '.tmp'],
    livereload: true,
    // Change this to '0.0.0.0' to access the server from outside.
    port: 9000,
    middleware: function(connect) {
      return [connect().use('/bower_components', connect.static('bower_components'))];
    }    
  });
});

gulp.task('start:server:test', function() {
  $.connect.server({
    root: ['test', 'app', '.tmp'],
    livereload: true,
    port: 9001
  });
});

gulp.task('serve', function (cb) {
  runSequence('clean:tmp',
    ['start:client'],
    'watch', cb);
});


gulp.task('test', ['start:server:test'], function () {
  var testRequire= [
    'bower_components/angular/angular.js',
    'bower_components/angular-messages/angular-messages.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'bower_components/angular-route/angular-route.js',
    'test/mock/**/*.js',
    'test/spec/**/*.js'
  ]
  
  var testToFiles = testRequire.concat('app/scripts/**/*.js', 'test/spec/**/*.js');
  return gulp.src(testToFiles)
    .pipe($.karma({
      configFile: 'test/karma.conf.js',
      action: 'watch'
    }));
});

