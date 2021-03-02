# webpack 多环境配置

- 安装 cross-env，用于环境变量设置
- 修改 package.json 中的 scripts，设置 NODE_ENV 的值 
- 创建 build/webpack.env.conf.js，根据不同的环境变量输出相应的配置对象。
- 分别在 build/webpack.dev.conf.js 和 build/webpack.prod.conf.js 文件中导入 webpack.env.conf.js 的配置并传入 DefinePlugin 的 process.env。






