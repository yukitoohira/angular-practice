var gulp = require('gulp');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var browser = require('browser-sync');
var ngTemplateCache = require('gulp-angular-templatecache');

gulp.task('build', function () {
    gulp.src('src/**/*.js')
        .pipe(plumber())
        .pipe(concat('bundle.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.js', ['build']);
});

gulp.task('serve', function () {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('templates', function () {
    gulp.src('src/**/*.html')
        .pipe(ngTemplateCache({
            standalone: true
        }))
        .pipe(gulp.dest('dist'))
});