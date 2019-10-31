const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');
const minifyCSS = require('gulp-csso');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const browserify = require('browserify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babel = require('babelify');
require('dotenv').config();

gulp.task("nodemon", cb => {
    let started = false;

    return nodemon({
        script: "ml-sphero.js.js"
    }).on("start", () => {
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('scss-watch', () => {
    return compileScss(true);
});

gulp.task('js-watch', () => {
    compileJs(true);
});

gulp.task('scss', () => {
    compileScss(false);
});

gulp.task('js', () => {
    compileJs(false);
});

gulp.task(
    "browser-sync",
    gulp.series("nodemon", () => {
        browserSync.init(null, {
            proxy: "http://localhost:8001",
            files: ["modules/**/public/**/*.*", "modules/**/public/*.*", "modules/**/views/*.*", "resources/layout/*.*", "public/**/*.*"],
            browser: process.env.DEFAULT_TEST_BROWSER,
            port: 9000
        });
    })
);


gulp.task("default", gulp.parallel("scss-watch","js-watch", "browser-sync"));
gulp.task("build", gulp.parallel("scss", "js"));

function compileScss(w) {
    let scss = () => {
        gulp.src('resources/scss/*.scss')
            .pipe(sass())
            .pipe(minifyCSS())
            .pipe(gulp.dest('public/css'));
    };

    scss();

    if(w) {
        return watch(['resources/scss/*.scss','resources/scss/**/*.scss'], () => {
            scss();
        });
    }
}

function compileJs(watch) {
    let bundler = watchify(browserify(['resources/js/main.js'], { debug: true }).transform(babel.configure({
        presets: ['@babel/preset-env']
    })));

    let rebundle = () => {
        bundler.bundle()
            .on('error', function(err) { console.error(err); this.emit('end'); })
            .pipe(source('main.js'))
            .pipe(buffer())
            .pipe(gulp.dest('public/js'));
    };

    if (watch) {
        bundler.on('update', function() {
            console.log('-> bundling...');
            rebundle();
        })
    }

    rebundle();
}
