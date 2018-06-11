var gulp = require('gulp');
var sass = require('gulp-sass');
var css = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var server = require('gulp-webserver');

gulp.task('server', function() {
    .pipe(server, {
        port: 8080,
        host: '169.254.131.178',
        open: true,
        livereload: true
    })
})

gulp.task('css', function() {
    gulp.src('src/css/*.css')
        .pipe(css())
        .pipe(gulp.dest('build/css'))
})

gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/sass'))
})

gulp.task('uglify', function() {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
})