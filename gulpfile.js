var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync'),
minifyCSS = require('gulp-minify-css'),
notify = require("gulp-notify"),
pluginAutoprefix = require('less-plugin-autoprefix');

var autoprefix = new pluginAutoprefix({ browsers: ["iOS >= 7", "Chrome >= 30", "Explorer >= 9", "last 2 Edge versions", "Firefox >= 20"] });

gulp.task('styles', function(){
    gulp.src('app/pre-less/main.less')
        .pipe(less(
            {
                plugins: [autoprefix]
            }
        ))
            .on("error", notify.onError({
                message: 'LESS compile error: <%= error.message %>'
            }))
            // .pipe(minifyCSS({
            //     keepBreaks: false // New rule will have break if 'true'
            // }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}));
});


gulp.task('browser-sync', function() {
	browserSync({
		server: {
			 baseDir: "app"
		}
	});
});

gulp.task('watch', ['browser-sync'], function() {
	// gulp.watch('views/**/*.jade', ['html']);
    // gulp.watch('js/**/*.js', ['lint', 'scripts']);
    gulp.watch('app/index.html', function(){
        browserSync.reload();
    });

    gulp.watch('app/js/**/*.js', function(){
        browserSync.reload();
    })
	gulp.watch('app/pre-less/**/*.less', ['styles']);
	// gulp.watch('images/*', ['images']);
});