/* craco.config.js */
const { whenDev, whenProd, when } = require('@craco/craco')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' )
const path = require('path')
const CracoLessPlugin = require('craco-less');
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1890ff' },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'common': resolve('src/common'),
      'components': resolve('src/components'),
      'hooks': resolve('src/hooks'),
      'layouts': resolve('src/layouts'),
      'views': resolve('src/views'),
      'store': resolve('src/store'),
      'utils': resolve('src/utils')
      // 此处是一个示例，实际可根据各自需求配置
    },
    /**
     * 重写 webpack 任意配置
     *  - configure 能够重写 webpack 相关的所有配置，但是，仍然推荐你优先阅读 craco 提供的快捷配置，把解决不了的配置放到 configure 里解决；
     *  - 这里选择配置为函数，与直接定义 configure 对象方式互斥；
     */
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
        publicPath: '/'
      }
      return webpackConfig
    },
    plugins: [
      // ...whenDev(() => [

      // ])
      new BundleAnalyzerPlugin(), // 打包分析
      new SimpleProgressWebpackPlugin()
    ]
  },
  devServer: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        // target: 'http://localhost:3000',
        // target: 'https://nexus3-pg-dev.cdp.show', // 开发环境
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/' // 重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          // "^/loc": ''
        }
      }
    }
  }
};
