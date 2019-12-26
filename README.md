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
2.sass-loader
将sass导入javascript/index.js`import '../sass/styles.scss';`
添加解析依赖路径`npm i --save-dev sass sass-loader postcss-loader css-loader`并设置：
```
rules: [
    {
      test: /\.js$/,
      /* ... */
    },
    {
      // Apply rule for .sass, .scss or .css files
      test: /\.(sa|sc|c)ss$/,

      // Set loaders to transform files.
      // Loaders are applying from right to left(!)
      // The first loader will be applied after others
      use: [
             {
               // This loader resolves url() and @imports inside CSS
               loader: "css-loader",
             },
             {
               // Then we apply postCSS fixes like autoprefixer and minifying
               loader: "postcss-loader"
             },
             {
               // First we transform SASS to standard CSS
               loader: "sass-loader"
               options: {
                 implementation: require("sass")
               }
             }
           ]
    }
]
```
设置PostCSS`npm i --save-dev autoprefixer cssnano`和post.config.css
```
// It is handy to not have those transformations while we developing
if(process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: [
            require('autoprefixer'),
            require('cssnano'),
            // More postCSS modules here if needed
        ]
    }
}
```
压缩插件：MiniCssExtractPlugin`npm i --save-dev mini-css-extract-plugin`，在webpack.config中设置
```
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
```
在`module.rules`后面接上`plugins`
```
module: {
  rules: [
    /* ... */
  ]
},
plugins: [

  new MiniCssExtractPlugin({
    filename: "bundle.css"
  })

]
```
现在我们可以将此插件链接到我们的CSS加载器中：
```
{
      test: /\.(sa|sc|c)ss$/,
      use: [
             {
               // After all CSS loaders we use plugin to do his work.
               // It gets all transformed CSS and extracts it into separate
               // single bundled file
               loader: MiniCssExtractPlugin.loader
             }, 
             {
               loader: "css-loader",
             },
             /* ... Other loaders ... */
           ]
}
```
3.文件类预处理
- images
- fonts


1. James Madison
2. James Monroe
3. John Quincy Adams


     
- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request

@octocat :+1: 这个 PR 看起来很棒 - 可以合并了！ :shipit:
