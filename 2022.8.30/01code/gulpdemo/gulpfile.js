// 告诉gulp，所做的事情：
var gulp = require("gulp");
const uglify = require("gulp-uglify");
const sass = require('gulp-sass')(require('sass'));

// 复制单个文件
gulp.task("copy-index",async function(){
    gulp.src("./src/index.html").pipe(gulp.dest("D:\\phpstudy_pro\\WWW\\gp01\\gulpdemo"));
})

gulp.task("watch",async function(){

    gulp.watch("./src/*.html",async function(){
        gulp.src("./src/*.html").pipe(gulp.dest("D:\\phpstudy_pro\\WWW\\gp01\\gulpdemo"));
    })
    
    gulp.watch("./src/js/*.js",async function(){

        gulp.src("./src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("D:\\phpstudy_pro\\WWW\\gp01\\gulpdemo\\js"));

    })

    
    gulp.watch("./src/scss/*.scss",async function(){

        gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("D:\\phpstudy_pro\\WWW\\gp01\\gulpdemo\\css"));

    })
    
})