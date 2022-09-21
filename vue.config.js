const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin//包体积分析工具

module.exports = {
  publicPath: '/version-manager/',
  outputDir: 'static', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: false,
  // indexPath: 'index.html',
  devServer: {
    open: true,
    host: 'localhost',
    port: 8081,
    https: false,//是否启用 https
    hot: true,
    // productionSourceMap: false,  // 生产环境是否生成 sourceMap 文件
    proxy: {
      // 配置跨域
      '/api': {
        target: 'https://registry-dev.dmetasoul.com/',//后端接口地址(测试线)
        ws: true,
        changOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          // '^/api': '/'
        }
      },
    },
  },
  // webpack配置
  configureWebpack: (config) => {
    // 为生产环境修改配置
    if (process.env.NODE_ENV === 'production') {
      // config.plugins.push(
      //   new BundleAnalyzerPlugin()  // 使用默认配置
      // )
      config.plugins.push(
        // 1、取消打印
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,//生产环境自动删除debugger
              drop_console: true, //生产环境自动删除console
            },
            warnings: false,
          },
          sourceMap: false,   //关掉sourcemap 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
          parallel: true, //使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        }),
      )
      config.optimization = {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vue: {
              name: 'vue',
              test: /[\\/]node_modules[\\/]vue[\\/]/,
              priority: -10,
              enforce: true
            },
            vuex: {
              name: 'vuex',
              test: /[\\/]node_modules[\\/]vuex[\\/]/,
              priority: -10,
              enforce: true
            },
            'vue-router': {
              name: 'vue-router',
              test: /[\\/]node_modules[\\/]vue-router[\\/]/,
              priority: -10,
              enforce: true
            },
            'element-ui': {
              name: 'element-ui',
              test: /[\\/]node_modules[\\/]element-ui[\\/]/,
              priority: -10,
              enforce: true
            },
            'vendors': {
              name: 'vendors',
              test: /[\\/]node_modules[\\/]/,
              priority: -20,
              enforce: true
            }
          }
        }
      }
    } else {
      // 本地开发配置
      // config.devtool = 'cheap-module-eval-source-map'
    }
  },

};