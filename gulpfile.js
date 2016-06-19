const gulp = require('gulp')
const less = require('gulp-less')

// Instance of ProcessManager
const processManager = require('electron-connect').server.create()

gulp.task('default', ['less'], () => {
  // Start browser process
  processManager.start(process.argv)
  // Restart browser process
  gulp.watch([
    './main.js',
    './main-process/**/*.js'
  ], () => {
    processManager.restart(process.argv)
  })
  // Reload renderer process
  gulp.watch([
    './index.html',
    './renderer-process/**/*.js',
    './windows/**/*.html',
    './assets/**/*.{less,js,css}'
  ], processManager.reload)
})

gulp.task('less', () => {
  gulp.watch([
    './assets/**/*.less'
  ], () => {
    gulp.src('./assets/less/index.less')
      .pipe(less())
      .pipe(gulp.dest('./assets/css'))
  })
})
