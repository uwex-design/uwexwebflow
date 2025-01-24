const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const merge = require("merge-stream");

// Caminhos dos arquivos
const paths = {
	styles: {
		src: "src/scss/**/*.scss",
		dest: "dist/css",
	},
	scripts: {
		// Scripts de vendors que já estão compilados
		vendor: ["node_modules/gsap/dist/gsap.min.js"],
		// Seus scripts que precisam ser compilados
		src: ["src/js/main.js"],
		//home
		srcHome: ["src/js/home.js"],
		dest: "dist/js",
	},
};

// Compilar SCSS
function styles() {
	return gulp
		.src(paths.styles.src)
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				outputStyle: "compressed",
			}).on("error", sass.logError)
		)
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(paths.styles.dest));
}

// Processar scripts vendors (sem compilação Babel)
function vendorScripts() {
	return gulp.src(paths.scripts.vendor).pipe(concat("vendor.min.js")).pipe(gulp.dest(paths.scripts.dest));
}

// Processar scripts home (sem compilação Babel)
function homeScripts() {
	return gulp.src(paths.scripts.srcHome).pipe(concat("home.min.js")).pipe(gulp.dest(paths.scripts.dest));
}

// Processar seus scripts (com compilação Babel)
function appScripts() {
	return gulp
		.src(paths.scripts.src)
		.pipe(sourcemaps.init())
		.pipe(
			babel({
				presets: [
					[
						"@babel/preset-env",
						{
							modules: false,
							targets: "> 0.25%, not dead",
						},
					],
				],
				plugins: [["@babel/plugin-transform-runtime"]],
			})
		)
		.pipe(concat("app.min.js"))
		.pipe(uglify())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(paths.scripts.dest));
}

// Observar alterações
function watch() {
	gulp.watch(paths.styles.src, styles);
	gulp.watch(paths.scripts.src, gulp.series(vendorScripts, homeScripts, appScripts));
}

// Tarefas
exports.styles = styles;
exports.vendorScripts = vendorScripts;
exports.appScripts = appScripts;
exports.homeScripts = homeScripts;
exports.scripts = gulp.series(vendorScripts, homeScripts, appScripts);
exports.watch = watch;
exports.build = gulp.parallel(styles, exports.scripts);
exports.default = gulp.series(exports.build, watch);
