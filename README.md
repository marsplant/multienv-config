## webpack 多环境配置

- 安装 cross-env，用于环境变量设置。
- 修改 package.json 中的 scripts，设置 NODE_ENV 的值。
- 创建 build/webpack.env.conf.js，根据不同的环境变量输出相应的配置对象。
- 分别在 build/webpack.dev.conf.js 和 build/webpack.prod.conf.js 文件中导入 webpack.env.conf.js 的配置并传入 DefinePlugin 的 process.env。

## 实现 loader
- loader 是一个输出转换函数的模块，用于转换文件，函数的输入是文件源代码，输出是转换结果。
- 创建 loader/reverser-loader.js，用于对文件中的字符串进行反转操作。
- 创建 src/txt/test.txt，用于测试 loader
- 在 build/webpack.base.conf.js 的 module/rules 中添加 reverse-loader（可见89行-92行的代码）
- 命令行运行npm run start:dev, 打开 localhost:8080 可见 “text: kjihgfedcba” 的文字，说明loader实现成功。

## 实现 plugin
- 创建 plugins/MyPlugin.js，该插件监听 emit 事件，在webpack输出asset 到 output目录之前执行。
- 在 build/webpack.base.conf.js 的 plugins 属性中注册 MyPlugin
- 命令行执行 npm run build，在打包结束前会输出 "learning plugin"

## plugin 和 loader 的区别
- loader 是一个文件转换器，比如将 A.styl 转换成 A.css。
- plugin 是一个扩展器，监听webpack打包过程的事件，执行更广泛的任务，比如打包优化，资源管理和环境变量注入。


