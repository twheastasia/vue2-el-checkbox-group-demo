// vue.config.js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const TimeStamp = new Date().getTime()

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: '复杂数据结构的RadioGroup和CheckboxGroup',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: { // 输出重构
      filename: `[name].${TimeStamp}.js`,
      chunkFilename: `[name].${TimeStamp}.js`
    }
  }
}