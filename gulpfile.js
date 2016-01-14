var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')

// SERVER
gulp.task('clean:server', function(){
    return del('./dist/server')
});

gulp.task('build:server', ['clean:server'], function () {
	var tsProject = ts.createProject('server/tsconfig.json');
    var tsResult = gulp.src('server/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return tsResult.js
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist/server'))
});


// CLIENT
gulp.task('clean:client', function(){
    return del('./dist/client')
});
gulp.task('build:client', ['clean:client'] ,function () {
	var tsProject = ts.createProject('client/tsconfig.json');
    var tsResult = gulp.src('client/**/*.ts')
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
	return
		tsResult.js
        .pipe(sourcemaps.write()) 
		.pipe(gulp.dest('dist/client'))
});

gulp.task('build', ['build:server', 'build:client'])