var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

var connect = require('gulp-connect');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// gulp.task('default', ['allFile','server', 'watch', 'sass']);

gulp.task('allFile', function () {
    gulp.src(['app/**/*', '!app/sass/**/*'])
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
})

gulp.task('watch', function () {
    gulp.watch(['app/**/*'], ['allFile']);
    gulp.watch('app/sass/**/*.scss', ['sass']);

})
gulp.task('server', function () {
    connect.server({
        root: 'dist', //设置根目录
        livereload: true, // 是否热更新
        port: 7780
    });
})



gulp.task('default', ['allFile', 'server', 'watch', 'sass'], function () {

});

gulp.task('mod', function () {
    // 做一些事
    var options = {
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    gulp.src('*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('modify'));

});

gulp.task("cssmin", function () {
    var cssmin = require('gulp-cssmin');
    var rename = require('gulp-rename');

    gulp.src('*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('modify'));
})

const babel = require('gulp-babel');

gulp.task('babel', () => {
    gulp.src('test.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('dist'))
}

);