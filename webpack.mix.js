let mix = require('laravel-mix');

require('laravel-mix-purgecss');
require('laravel-mix-postcss-config');


mix

    .js('index.js', 'dist/index.js').react()
   //  .sass('resources/gutenberg/sass/app.scss', 'public/gutenberg/css')


