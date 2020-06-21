const path = require('path');
module.exports = {
  productionSourceMap: false,
   chainWebpack: config => {
      config.resolve.alias
       .set('@', path.resolve(__dirname,'src'))
       .set('assets', path.resolve(__dirname,'src/assets'))
       .set('components', path.resolve(__dirname,'src/components'))
       .set('views', path.resolve(__dirname,'src/views'))
       .set('network', path.resolve(__dirname,'src/network'))
       .set('utils', path.resolve(__dirname,'src/utils'))
     }
}