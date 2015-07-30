var gulp = require("gulp"),
	jade = require('gulp-jade'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	//csso = require('gulp-csso'),
	//concatCss   = require('gulp-concat-css'),
	//prefix = require('gulp-autoprefixer')
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
	gulp.watch('app/scss/other/*.scss', ['css2']);
	gulp.watch('app/jade/**/*.jade', ['jade']);
	gulp.watch('app/css/**/*.css', ['concat']);
	gulp.watch([
	//'./*.html',
	'app/js/**/*.js',
	'app/css/**/*.css'
  ]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);

gulp.task('jade', function() {
gulp.src('app/jade/*.jade')
.pipe(jade({ pretty: true }))
.pipe(gulp.dest('app/'))
.pipe(reload({stream: true}));
});



gulp.task('css', function () {
		gulp.src('app/scss/main.scss')
		//.pipe(concatCss('app/css/style.css'))
		//.pipe(prefix('last 10 versions','>1%','ie 7'))
		.pipe(sass())
		//.pipe(minifyCss())
		//.pipe(rename('main.css'))
		//.pipe(concat('style.min.css'))
		.pipe(gulp.dest('app/css'))
		.pipe(reload({stream: true}));
		//.pipe(connect.reload());
});


// other css
gulp.task('css2', function() {
		gulp.src('app/scss/other/*.scss')
		.pipe(sass())
		//.pipe(prefix('last 2 versions','>1%','ie 7'))
		.pipe(gulp.dest('app/css'))
		.pipe(reload({stream: true}));
});

// concat css

gulp.task('concat', function() {
	gulp.src('app/css/*.css')
	.pipe(concat('*.css'))
	// .pipe(minifyCss(''))
	.pipe(rename('style.css'))
	.pipe(gulp.dest('app/css'));
});
