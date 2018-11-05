# ts-loader outDir issue

**UPDATE:**  
**Intendend behaviour since 5.0.0 as mentioned in https://github.com/TypeStrong/ts-loader/pull/822. Adding the dist folder to outDir from webpack.config.js (or tsconfig.json) fixes the issue.**  

```javascript
module: {
    rules: [
        {
            test: /\.tsx?$/,
            loader: "ts-loader",
            options: {
                compilerOptions: {
                    outDir: './dist'
                }
            }
        }
    ]
},
```

**Issue:**  
*Versions 4.3.0-4.5.0 of ts-loader correctly place the typescript declaration files inside the dist folder when "outDir" is set to "./".  
However upgrading ts-loader to 5.0.0-5.3.0 will result in the d.ts files being spit out in the root directory of the project rather than in the dist folder.*