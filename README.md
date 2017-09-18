## 搭建本地环境
```bash
npm install --registry=https://registry.npm.taobao.org
```

## 开发环境
开发过程只需关注src目录代码，dist目录代码会同步更新，运行`npm run dev`命令生成dist目录，也就是小程序项目代码目录，在微信开发者工具里打开的也是此目录

## 生产环境
生成打包压缩后代码，保留在dist目录下
```bash
npm run build
```

## 开发体验



