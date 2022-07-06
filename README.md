# Vue 3 + TypeScript + Vite

基于 Vue3 + Vite + Vant + Sass+ rem 适配方案 + Axios 封装 + pinia 状态管理，手机端模板脚手架

### Node 版本要求

Node.js 12.0.0 或更高版本 (推荐 14.0.0+)

此项目创建时使用的 v16.15.0

### 目录结构

├── public # 公共资源
│ ├── favicon.ico # favicon 图标
├── src # 源代码
│ ├── api # 所有请求
│ ├── assets # 静态资源
│ ├── components # 全局公用组件
│ ├── config # 全局配置
│ ├── mock # 开发环境配置
│ ├── layout # 全局 layout
│ ├── locals # 多语言支持
│ ├── mock # 项目 mock 模拟数据
│ ├── routes # 路由
│ ├── stores # 全局 store 管理
│ ├── utils # 全局公用方法
│ └── views # 业务页面
│ ├── home # 主页
│ ├── app.vue # 根组件
│ ├── main.js # 入口文件
│ └── env.d.ts # 配置 ts 识别 vue 文件
├── .env.development # 开发环境环境常量
├── .gitignore # git 忽略清单
├── .postcssrc.js # postcss 配置
├── .prettierrc # Prettier 配置
├── README.md # README.md
├── vue.config.js # 配置文件
└── package.json # package.json
