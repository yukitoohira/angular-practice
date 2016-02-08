var gulp = require('gulp');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var plumber=require('gulp-plumber');
var concat=require('gulp-concat');
var browser=require('browser-sync');

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

gulp.task('serve',function(){
    browser({
        server:{
            baseDir:"./"
        }
    });
});