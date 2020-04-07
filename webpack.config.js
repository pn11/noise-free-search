const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin') // vue-loader

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'www',
    port: 4000,
    inline: true
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // import Vue from 'vue' できるようにする。
    }
  },
  module: {
    rules: [
      { // .vue だったら vue-loader を使って import する。
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [ 
    new VueLoaderPlugin() // vue-loader
  ]
};
