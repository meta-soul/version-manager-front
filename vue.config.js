module.exports = {
  publicPath: '/',
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8083,
    https: false,//是否启用 https
    hot: 'only',
    // productionSourceMap: false,  // 生产环境是否生成 sourceMap 文件
    proxy: {
      // 配置跨域

      // '/api': {
      //   target: process.env.VUE_APP_test_PROXYURL,//后端接口地址(测试线)
      //   ws: true,
      //   changOrigin: true,
      //   logLevel: 'debug',
      //   pathRewrite: {
      //     // '^/api': '/'
      //     '^/form': '/'  //本地前端测试访问开发机后端
      //   }
      // },
    },
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境
      config.mode = 'production'
    } else {
      // 开发环境
      config.mode = 'development'
    }

  }

};