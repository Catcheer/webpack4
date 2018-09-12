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