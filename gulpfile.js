const gulp = require('gulp'),
      connect = require('gulp-connect'),
      open = require('gulp-open'),
      clean = require('gulp-clean'),
      browserify = require('gulp-browserify'),
      concat = require('gulp-concat')


const config = {
  port: 8080,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    dist: './dist'
  }
}

gulp.task('server', () => {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  })
})

gulp.task('open', () => {
  gulp.src('dist/index.html')
  .pipe(open({
    uri: config.devBaseUrl + ':' + config.port
  }))
})

gulp.task('html', () => {
  gulp.src(config.paths.html)
  .pipe(gulp.dest(config.paths.dist))
})

gulp.task('clean', () => {
  gulp.src(config.paths.dist + '/*.*')
  .pipe(clean())
})

gulp.task('livereload', ['html'], () => {
  gulp.src(config.paths.dist)
  .pipe(connect.reload())
})

gulp.task('bundlejs', () => {
  gulp.src(config.paths.js)
  .pipe(browserify({ transform: ['reactify'] }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest(config.paths.dist + '/scripts'))
  .pipe(connect.reload())
})

//watch the file changes to trigger livereload
gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['livereload'])
  gulp.watch(config.paths.js, ['bundlejs'])
});

gulp.task('default', ['server', 'livereload', 'bundlejs', 'watch', 'open'])