const mix = require('laravel-mix');
const path = require('path');

mix.setPublicPath('./build')
    .js('src/js/index.js', 'js')
    .sass('src/scss/style.scss', 'css');

mix.webpackConfig({
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
            publicPath: '/',
        },
    },
})