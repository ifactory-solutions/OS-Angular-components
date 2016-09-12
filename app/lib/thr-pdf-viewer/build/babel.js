var merge = require('merge-stream');
var path = require('path');
var rootDir = path.join(__dirname, '../..');

module.exports = function (gulp, $, resources) {
    gulp.task('babel', () => {
        return merge(
                gulp.src(resources.js)
                    .pipe($.babel({
                        presets: ['es2015']
                    })),
                gulp.src(resources.partials)
                    .pipe($.angularTemplatecache({module: 'thr-pdf-viewer'}))
            )
            .pipe($.concat('thr-pdf-viewer.js'))
            .pipe(gulp.dest(resources.out))
            .pipe(gulp.dest(resources.docs))
            .pipe($.uglify())
            .pipe($.rename(function(path) {
                path.extname = ".min.js"
            }))
            .pipe(gulp.dest(resources.out));
    });
};