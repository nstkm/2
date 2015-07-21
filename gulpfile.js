var gulp = require("gulp"),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    prefix = require('gulp-autoprefixer')
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('server', ['jade'] , function () {
  browserSync({
    port: 9000,
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['css']);
    gulp.watch('app/jade/**/*.jade', ['jade']);
    gulp.watch([
    //'./*.html',
    'app/js/**/*.js',
    'app/css/**/*.css'
  ]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);

gulp.task('jade', function() {
gulp.src('app/jade/index.jade')
.pipe(jade({ pretty: true }))
.pipe(gulp.dest('app/'))
.pipe(reload({stream: true}));
});

gulp.task('css', function () {
        gulp.src('app/scss/main.scss')
        //.pipe(concatCss('app/css/style.css'))
        .pipe(prefix('last 2 versions','>1%','ie 7'))
        .pipe(sass())
        //.pipe(minifyCss())
        .pipe(rename('main.css'))
        .pipe(gulp.dest('app/css'))
        .pipe(reload({stream: true}));
        //.pipe(connect.reload());
});

//default
//gulp.task('default', ['css', 'jade', 'watch']);
