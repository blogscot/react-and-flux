const gulp = require('gulp'),
      connect = require('gulp-connect'),
      open = require('gulp-open'),
      clean = require('gulp-clean'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      reactify = require('reactify'),
      concat = require('gulp-concat'),
      historyApiFallback = require('connect-history-api-fallback')


const config = {
  port: 8080,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    images: './src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    ],
    dist: './dist',
    mainJs: './src/main.js'
  }
}

gulp.task('connect', () => {
  connect.server({
    root: ['dist'],
    debug: false,
    port: config.port,
    base: config.devBaseUrl,
    livereload: true,
    middleware: function(connect, opt) {
      return [historyApiFallback({})]
    }
  })
})

gulp.task('open', ['connect'], () => {
  gulp.src('dist/index.html')
  .pipe(open({
    uri: config.devBaseUrl + ':' + config.port
  }))
})

gulp.task('html', () => {
  gulp.src(config.paths.html)
  .pipe(gulp.dest(config.paths.dist))
  .pipe(connect.reload())
})

gulp.task('clean', () => {
  gulp.src(config.paths.dist)
  .pipe(clean())
})

gulp.task('js', () => {
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('css', () => {
  gulp.src(config.paths.css)
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest(config.paths.dist + '/css'))
})

gulp.task('images', () => {
  gulp.src(config.paths.images)
  .pipe(gulp.dest(config.paths.dist + '/images'))
  .pipe(connect.reload())

  gulp.src('./src/favicon.ico')
  .pipe(gulp.dest(config.paths.dist))
})

//watch the file changes to trigger livereload
gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html'])
  gulp.watch(config.paths.js, ['js'])
});

gulp.task('default', [
  'html',
  'css',
  'images',
  'js',
  'open',
  'watch'
])