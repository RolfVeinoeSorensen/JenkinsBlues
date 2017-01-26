/// <binding ProjectOpened='watch' />
"use strict";

var gulp = require("gulp"),
    runSequence = require("run-sequence"),
    sass = require('gulp-sass'),
    notify = require("gulp-notify"),
    rimraf = require('rimraf'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');


var paths = {
    sassWatchPath: './sass/**/*.scss',
    dist: '../dist',
    sassThemeBlues: './sass/themes/blues/**/application.scss',
    sassThemeBluesLight: "./sass/themes/blues-light/**/application.scss"
};

gulp.task('css-blues', ['clean-dist', 'css-blues-light'], function () {
    return gulp.src(paths.sassThemeBlues)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename("jenkins-blues.css"))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('css-blues-light', ['clean-dist'], function () {
    return gulp.src(paths.sassThemeBluesLight)
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename("jenkins-blues-light.css"))
        .pipe(gulp.dest(paths.dist));
});


gulp.task('remove-node-folder', function (cb) {
    rimraf('./node_modules', cb);
});

gulp.task('clean-dist', function (cb) {
    rimraf(paths.dist, cb);
});

gulp.task('watch', function () {
    gulp.watch(paths.sassWatchPath, ['css-blues']);
});