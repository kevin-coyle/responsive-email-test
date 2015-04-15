var gulp = require('gulp'),
	watch = require('gulp-watch'),
    inlineCss = require('gulp-inline-css');
var premailer = require('gulp-premailer');
var livereload = require('gulp-livereload');
 
gulp.task('inliner', function() {
	return gulp.src('./index.html')
	    .pipe(premailer())
	    .pipe(livereload())
	    .pipe(gulp.dest('./build/'));
	});


gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('*.css', ['inliner']);
	gulp.watch('*.html', ['inliner']);

});


gulp.task('default', ['inliner', 'watch'], function() {

});

