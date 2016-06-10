var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('es6TOes5', function() {
   var stream = gulp.src('libs/*.js')
   		.pipe(babel({}))
   		.pipe(gulp.dest('dist'));
   return stream;
});

gulp.task('watch', function() {
   gulp.watch('libs/*.js', ['es6TOes5']);
});

gulp.task('default', ['es6TOes5']);