# ts-loader outDir issue

Versions 4.3.0-4.5.0 of ts-loader correctly place the typescript declaration files inside the dist folder when "outDir" is set to "./".  
However upgrading ts-loader to 5.0.0-5.3.0 will result in the d.ts files being spit out in the root directory of the project rather than in the dist folder.