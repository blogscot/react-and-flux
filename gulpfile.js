let gulp = require('gulp')
let connect = require('gulp-connect')
let open = require('gulp-open')
let clean = require('gulp-clean')

let config = {
  port: 8080,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
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

gulp.task('livereload', ['html'], () => {
  gulp.src(config.paths.dist)
  .pipe(connect.reload())
})

gulp.task('open', ['server'], () => {
  gulp.src('dist/index.html')
  .pipe(open({
    uri: config.devBaseUrl + ':' + config.port
  }))
})

//watch the file changes to trigger livereload
gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['livereload']);
});

gulp.task('html', () => {
  gulp.src(config.paths.html)
  .pipe(gulp.dest(config.paths.dist))
})

gulp.task('clean', () => {
  gulp.src(config.paths.dist)
  .pipe(clean())
})

gulp.task('default', ['server', 'livereload', 'watch', 'open'])