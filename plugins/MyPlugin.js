class MyPlugin {
  // 构造方法
  constructor (options) {
    console.log('MyPlugin constructor:', options)
  }
  // 应用函数
  apply (compiler) {
    // 绑定钩子事件
    compiler.plugin('emit', function (compilation, callback) {
      // 功能完成后调用 webpack 提供的回调
      console.log('learning Plugin')
      callback()
    })
  }
}

module.exports = MyPlugin
