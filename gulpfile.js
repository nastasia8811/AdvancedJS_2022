import htmlMin from 'gulp-htmlmin';
// import gulpSass from "gulp-sass";
// import gulpSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import bs from "browser-sync";
import gulpClean from 'gulp-clean';
import cleanCss from "gulp-clean-css";
import concat from "gulp-concat";
import imagemin from "gulp-imagemin";
import jsMin from "gulp-js-minify";
import gulpUglify from "gulp-uglify";
import clean from 'gulp-clean';
import gulp from 'gulp';
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)


export const html = () => gulp.src('./*.html')
    .pipe(htmlMin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));

export const scripts = () => gulp.src("./src/scripts/**/*.js")
    .pipe(concat('scripts.min.js'))
    .pipe(jsMin())
    .pipe(gulpUglify())
    .pipe(gulp.dest("./dist/scripts"))
    .pipe(bs.stream())

export const styles = () => gulp.src("./src/styles/**/*.scss", { sourcemaps: true })
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('styles.min.css'))
    .pipe(cleanCss())
    .pipe(gulpClean())
    .pipe(gulp.dest("dist/css")).pipe(bs.stream())

export const images = () => gulp.src("./src/images/**/*.{jpg,jpeg,png,svg,webp}")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));

export const cleanDest = () => gulp.src('./dist/*', {read: false})
    .pipe(clean())
    .pipe(gulpClean())

export const cleanImg= () => gulp.src('dist/images/', {allowEmpty: true})
    .pipe(clean())

export const build = gulp.series(cleanDest, gulp.parallel(html, scripts, styles, images));

export const dev = () => {
    bs.init({
        server: {
            baseDir: "./dist"
        },
        open: true,
    });


    gulp.watch('./src/**/**/*', gulp.series(build, (done) => {
        bs.reload();
        done();
    }))
}

export const watcher = () => {
    watch("*html").on("change", bs.reload);
    watch("./src/scripts/*.js").on("change", series(scripts, bs.reload));
    watch("./src/styles/**/*.scss", styles);
    watch("./src/images/**/*.{jpg,jpeg,png,svg,webp}").on("change", series(images, bs.reload)
    );
};
