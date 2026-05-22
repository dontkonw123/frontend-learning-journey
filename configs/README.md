
# 常用开发配置

1. 在vite.config.js里面通常配置一下方便在编写时便捷

``` js
  export default defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        // 这个配置
        '@': path.resolve(__dirname, '../src')
      }
    }
  })
```
