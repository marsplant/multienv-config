module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.txt$/,
          use: ['./loader/reverse-loader.js']
        }
      ]
    }
  },
  chainWebpack: config => {
    // reverse Loader
    config.module
      .rule('reverse-loader')
      .test(/\.txt$/)
      .use('./loader/reverse-loader')
      .loader('./loader/reverse-loader')
      .end()
  }
}
