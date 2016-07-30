let path = require('path'),
  srcPath = path.join(__dirname, 'src'),
  distPath = path.join(__dirname, 'dist'),
  webpack = require("webpack"),
  pkg = require('./package.json'),
  fs = require('fs'),
  copyright = fs.readFileSync('./copyright.txt', 'utf8'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const filename = isProd ? `${pkg.name}.umd.min.js` : `${pkg.name}.umd.js`

copyright = copyright.replace('{pkg.name}', pkg.name)
  .replace('{pkg.description}', pkg.description)
  .replace('{pkg.version}', pkg.version)
  .replace('{pkg.author}', pkg.author)
  .replace('{pkg.homepage}', pkg.homepage)
  .replace('{pkg.license}', pkg.license);

let plugins = [
  new webpack.BannerPlugin(copyright)
];

if (isProd) {
  plugins = plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ])
}

module.exports = {
  entry: path.join(srcPath, 'index.ts'),
  output: {
    path: distPath,
    libraryTarget: "umd",
    filename
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },
  externals: [
    {
      'rxjs': 'rxjs',
      'rxjs/Observable': 'rxjs/Observable',
      '@angular/core': '@angular/core',
      'wp-api-angularjs': 'wp-api-angularjs',
      'ionic-angular': 'ionic-angular'
    }
  ],
  module: {
    loaders: [{
      test: /\.ts$/,
      exclude: /(node_modules)/,
      loader: 'ts'
    }]
  },
  plugins: plugins
}
