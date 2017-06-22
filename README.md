# 新卓越考试系统 vue + vue-router + vuex 重构

### 基本功能演示
![image](https://github.com/ljuyi/exam-system-manage/blob/master/static/image/view.gif)

### 目录结构
```
|-- api                                                         // 与静态资源交互目录
|-- build                                                       // 项目打包文件配置
|-- config                                                      // webpack配置目录
|-- dist                                                        // 项目编译打包目录
|-- src                                                         // 项目源文件		
|           |-- common                                          // 公共库
|                       |-- js                                  // 公共js文件
|                                   |-- utils.js                // 各种工具
|                       |-- styLus                              // 公共样式文件
|                                   |-- index.styl              // 公共样式入口文件
|                                   |-- base.styl               // 基础样式
|                                   |-- icon.styl               // 图标样式
|                                   |-- mixin.styl              // 多次使用的样式
|                       |-- components                          // 组件目录
|                                   |-- slideshow               // 登陆页轮播图组件
|                                   |-- broadcast               // 公告信息展示组件
|                                   |-- button                  // 按钮组件
|                                   |-- alert                   // 弹出框组件
|                                   |-- dropselect              // 下拉框组件
|                                   |-- footer                  // 页脚组件
|                                   |-- header                  // 页眉组件
|                                   |-- inputtext               // 输入框组件
|                                   |-- login                   // 登陆弹出框组件
|                                   |-- swap                    // 遮盖层组件
|                                   |-- tab                     // 导航组件
|                                   |-- vuetable                // 展示信息时的表格组件
|                       |--libs                                 // 引入库目录
|                       |-- router                              // vue-router目录
|                                   |-- index.js                // 路由入口文件
|                                   |-- routes.js               // 路由配置文件
|                       |-- store                               // vuex目录
|                                   |-- module                  // 各个vuex存储信息模块
|                                   |-- index.js                // store组件入口文件
|                                   |-- types.js                // 存储store模块type文件
|                       |-- views                               // 一级路由目录
|                       |-- App.vue                             // vue组件入口文件
|                       |-- main.js                             // 程序入口文件,初始化vue实例
|-- static                                                      // 静态文件目录
|-- .babelrc                                                    // babel配置文件
|-- .eslintrc.js                                                // eslint配置文件
|-- .gitignore                                                  // git提交忽略文件
|-- pro.server.js                                               // 服务器启动配置文件
|-- index.html                                                  // 入口html文件
|-- package.json                                                // 项目及工具的依赖配置文件
|-- README.md                                                   // 说明

```

### 开发日志
- [x] 项目目录构建 -- 完成
- [x] 登陆页面重构

#### 前台页面重构(突然发现好像没有这两个页面)
- [ ] student.html
- [ ] test.html

#### 后台页面重构
- [x] home.html(后台主页面) -- 公用组件完成
- [x] exam-manage
- [ ] ...

