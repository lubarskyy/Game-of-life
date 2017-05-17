var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });
    
    gulp.watch("js/*.js").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});
