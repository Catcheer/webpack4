### HtmlWebpackPlugin


### CleanWebpackPlugin


### splitChunks

提取公共依赖，生成一个单独的模块

    ```
      optimization: {
           splitChunks: {
             chunks: 'all'
           }
         },
    ```


  ### filename与chunkFilename 区别

  filename 针对entry 内的文件

    ``` 
    entry:{
        index:'./src/index.js',
    },

    ```

  打包出来就是index.js

  chunkFilename 是未被列在entry中，却又需要被打包出来的文件命名配置。比如按需加载，这样的文件是没有被列在entry中的，如使用CommonJS的方式异步加载模块：

    ```
      require.ensure(["modules/tips.jsx"], function(require) {
          var a = require("modules/tips.jsx");
          // ...
      }, 'tips');

    ```

异步加载的模块是要以文件形式加载哦，所以这时生成的文件名是以chunkname配置的，生成出的文件名就是tips.min.js。
（require.ensure() API的第三个参数是给这个模块命名，否则 chunkFilename: "[name].min.js" 中的 [name] 是一个自动分配的、可读性很差的id，