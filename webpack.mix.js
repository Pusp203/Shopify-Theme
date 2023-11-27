const mix = require('laravel-mix');
mix
  .js('src/js/app.js', 'assests')
  .sass('src/scss/app.scss', 'assests')
  .setPublicPath('assets');
