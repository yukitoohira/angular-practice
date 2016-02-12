var gulp = require('gulp');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var browser = require('browser-sync');
var ngTemplateCache = require('gulp-angular-templatecache');
var del = require('del');
var runSequence = require('run-sequence');

//clean
gulp.task('clean', function () {
    del(['dist/**.*']);
});

gulp.task('all', function () {
    runSequence(
        'clean',
        ['angular', 'templates', 'htdocs']
    );
});

gulp.task('angular', function () {
    gulp.src('src/**/*.js')
        .pipe(plumber())
        .pipe(concat('bundle.min.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function () {
    gulp.watch(['src/**/*.js', 'htdocs/**/*.html'], function () {
        runSequence(
            'all',
            'reload'
        )
    });
});

gulp.task('serve', function () {
    browser({
        server: {
            baseDir: "./dist/"
        }
    });
});

gulp.task('templates', function () {
    gulp.src('htdocs/templates/**/*.html')
        .pipe(ngTemplateCache({
            standalone: true
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('reload', function () {
    browser.reload();
});

gulp.task('htdocs', function () {
    gulp.src('./htdocs/index.html')
        .pipe(gulp.dest('./dist'));
});

