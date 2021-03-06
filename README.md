## 初始化
```
$ git clone https://github.com/gityoog/march-mp-example.git

$ npm install 
```

## 开发
```
$ npm run dev
```
- 微信开发者工具载入 `dist/development` 预览
- 源码位于 `src/*` 使用任意编辑器如VSCode编辑

## 打包
```
$ npm run build
```
- 微信开发者工具或命令行工具载入 `dist/production` 上传

## 文件结构
```
├── build
|  ├── build.ts // 打包编译脚本
|  ├── dev.ts // 开发编译脚本
|  ├── config
|  |  ├── default.ts // 默认webpack配置
|  |  ├── development.ts // 开发webpack配置
|  |  └── production.ts // 打包webpack配置
|  ├── plugins
|  |  ├── process-plugin // webpack进度显示插件
|  |  └── tsconfig-paths-webpack-context-plugin // tsconfig.json paths载入插件
|  └── tsconfig.json
├── dist
|  ├── development // 开发输出
|  └── production // 打包输出
└── src
   ├── app.json // 小程序 app.json
   ├── app.ts // 小程序 app.js 入口
   ├── pages // 页面
   |  └── ...
   ├── typings // 组件声明 wx小程序环境声明
   └── ... // 小程序相关文件
```