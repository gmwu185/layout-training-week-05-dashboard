var gulp = require('gulp');
// var through = require('through2');
var mainBowerFiles = require("main-bower-files");
var $ = require('gulp-load-plugins')();
var { options } = require('./options');


var bowerTask = function (cd){
  gulp
    .src(mainBowerFiles())
    .pipe(gulp.dest('./.tmp/vendors'))
    // .pipe($.uglify())
  cd();
};

var vendorJs = function(cd){
  // 使用 setTiomout 讓 bowerTask 將檔案寫入完成後在執行 vendorJS 裡的內容，才不會有取不到 bower 套件的問題。
  setTimeout(function(){
    console.log('bowerTask setTimeout');
      gulp
        .src([
          './.tmp/vendors/**/**.js',  // 注意相對路徑 ./ 取得站台下的 .tmp 資料夾路徑
          './node_modules/bootstrap/dist/js/bootstrap.bundle.js'
        ])
        .pipe($.order(['jquery.js']))
        .pipe($.concat('allVendors.js'))
        .pipe($.if(options.env === 'production', $.uglify()))
        .pipe(gulp.dest('./output/assets/js'));
    cd();
  }, 300);
};

// 注意：這是 Node.js 的 module.exports
// 並非 ES6 的方法
exports.bowerTask = bowerTask;
exports.vendorJs = vendorJs;