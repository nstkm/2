var gulp = require('gulp'),
    browserSync = require('browsersync'),
    connect = require('gulp-connect'),
    opn = require('opn'),
    wiredep = require('wiredep').stream,
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCSS = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    jade = require('jade'),
    sass = require('gulp-sass');



//
gulp.task('server', function () {
browserSync({
port: 9000,
server: {
baseDir: 'app'
}
});

gulp.task('default', function() {

});