// vue.config.js
const path = require('path')

module.exports = {
  lintOnSave: 'warning', // 개발 중 lint 에러로 멈추지 않도록(옵션)
  configureWebpack: {
    resolve: {
      alias: {
        '@':    path.resolve(__dirname, 'src'),
        '~':    path.resolve(__dirname, 'src'),
        '~img': path.resolve(__dirname, 'src/assets/img'),
        '~css': path.resolve(__dirname, 'src/assets/css')
      }
    }
  }
}
