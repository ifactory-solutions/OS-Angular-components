var path = require('path');
var rootDir = path.join(__dirname, '../..');

module.exports = function (gulp, $, resources) {
    gulp.task('minify-css', function () {
        return gulp.src(resources.css)
            .pipe(gulp.dest(resources.out))
            .pipe($.cleanCss())
            .pipe($.rename(function(path) {
                path.extname = ".min.css"
            }))
            .pipe(gulp.dest(resources.out))
            .pipe(gulp.dest(resources.docs));
    });
};