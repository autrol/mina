### 介绍
这是一个微信小程序开发脚手架，JS支持使用ES6，CSS开发使用的是LESS

### 搭建本地环境
```bash
npm install --registry=https://registry.npm.taobao.org
```

### 开发环境
开发过程只需关注src目录代码，dist目录代码会同步更新，运行`npm run dev`命令生成dist目录，也就是小程序项目代码目录，在微信开发者工具里打开的也是此目录

### 生产环境
生成打包压缩后代码，保留在dist目录下
```bash
npm run build
```

### 注意
> 工程没有dist目录，执行npm run dev命令会自动生成dist目录，dist目录就是微信开发者工具中设置的项目目录

使用脚手架过程中，遇到有问题，欢迎提[issue](https://github.com/autrol/mina/issues)