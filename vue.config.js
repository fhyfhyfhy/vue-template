const path = require('path');
const defaultSettings = require('./src/settings.js');

// 获取绝对路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = defaultSettings.title || 'Init'; // page title

// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9527; // dev port

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true, // 自动打开浏览器
    // 出现编译器错误或警告时，在浏览器中显示全屏覆盖
    overlay: {
      warnings: false,
      errors: true,
    },
    // 提供了一个在 devServer 内部的所有中间件执行之前的自定义执行函数
    // before: require('./mock/mock-server.js'),
  },
  configureWebpack: {
    name: name, // 设置为页面的title
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    // https://juejin.cn/post/6844903517564436493
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
};
