# webpack 多环境配置

- 安装 cross-env，在命令行中给 NODE_ENV 传参，设置环境变量。
- build/webpack.env.conf.js 根据不同的环境变量输出相应的配置对象。
- 分别在 build/webpack.dev.conf.js 和 build/webpack.prod.conf.js 文件中导入 webpack.env.conf.js 的配置，并且修改 DefinePlugin 的 process.env。






