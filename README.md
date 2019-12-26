# d3-webpack-babel-tutorial

本项目主要借鉴了[如何从零开始为基本网站配置Webpack 4](https://github.com/pixelgoo/simple_webpack_boilerplate) 和[如何使用Webpack和Babel设置D3.js](https://github.com/maecapozzi/d3-webpack-babel-tutorial)构建的。

1.安装Webpack
`npm i --save-dev webpack webpack-cli`

2.创建基本文件
1. src
   - fonts
   - images
   - javascripts
     - index.js
   - sass
     - styles.scss
   - index.html
2. webpack.config.js

3.Loaders
1. babel-loader
`npm i --save-dev babel-loader @babel/core @babel/preset-env`
在webpack.config.js中设置
```
rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
]
```


- George Washington
- John Adams
- Thomas Jefferson

1. James Madison
2. James Monroe
3. John Quincy Adams


     
- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request

@octocat :+1: 这个 PR 看起来很棒 - 可以合并了！ :shipit:
