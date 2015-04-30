var gulp = require('gulp');
var devGulpTasks = require('grommet/utils/gulp-tasks');

var opts = {
  copyAssets: [
    'index.html',
    {
      asset: 'src/img/**',
      dist: 'dist/img/'
    }
  ],  
  jsAssets: ['src/js/**/*.js'],
  mainJs: 'src/js/index.js',
  mainScss: 'src/scss/index.scss',
  devServerPort: 9000
};

devGulpTasks(gulp, opts);
