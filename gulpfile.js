'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass   = require('gulp-sass'),
    sourceMaps = require('gulp-sourcemaps'),
    del    = require('del')

gulp.task('concatScripts', function(){
    return gulp.src(['js/app.js','js/directives/coverPage.js','js/directives/projectsDir.js','js/directives/skillsDir.js','js/directives/skillsDirective.js'])// return statement acts as a promise. so other tasks know to be dependent on the result
        .pipe(sourceMaps.init())
        .pipe(concat("main.js"))
        .pipe(sourceMaps.write('./'))// relative to the path provided by gulp.dest
        .pipe(gulp.dest("js"))
})

gulp.task("minifyScripts", ["concatScripts"], function(){ //concatScripts
       return gulp.src('js/main.js')
            .pipe(uglify())
            .pipe(rename('main.min.js'))
            .pipe(gulp.dest('js'))
    })

gulp.task('compileSass', function(){
   return gulp.src("scss/application.scss")// in the application.scss we will want to require or import all new scss files. this is the source of files to a
        .pipe(sourceMaps.init())
        .pipe(sass())//invoking gulp-sass
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest('css'))
})

gulp.task('watchFiles', function(){
    gulp.watch('scss/**/*.scss', ['compileSass']) // if a task doesn't have anything depending on it, it needs no return // look in sass/look in all sub directories/ anything ending in .scss
    gulp.watch('js/main.js', ['concatScripts']) // runs the concatScripts task when main.js changes
})

gulp.task('clean', function (){
    del(['dist', 'css/application.css*', 'js/main*.js*'])
})
gulp.task('build', [ 'minifyScripts', 'compileSass'], function (){
    return gulp.src(["css/application.css", 'js/main.min.js', 'index.html', 'Media/**'], {base: './'}) //base options preserves folder structure
        .pipe(gulp.dest('dist'))
}) //concatScripts is a dependecy of minify scripts so it has been removed, called in the array of minifyscripts

gulp.task('serve', ['watchFiles'])

gulp.task("default", ["clean"], function (){
    gulp.start('build')
})

//gulp has globbing patters to match files
//gulp optimizes tasks at the same time