const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    productionSourceMap: false,
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@components', resolve('src/components'))
        // 这里只写了部分，可以自己再添加，按这种格式 .set('', resolve(''))
    }
};