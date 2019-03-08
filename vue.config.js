module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080/api/',
        ws: true,
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '' // 请求的时候写这个api就可以了
        }
      }
    }
  }
}
