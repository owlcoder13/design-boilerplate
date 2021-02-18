const mix = require('laravel-mix');

mix.js('src/js/index.js', 'build/js').react()
    .sass('src/scss/style.scss', 'build/css');
