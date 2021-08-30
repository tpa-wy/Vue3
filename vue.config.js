module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: []
        }
    },
    css: {
        loaderOptions: {
            sass: {
                // 定义 scss 全局变量
                prependData: `
              @import "@/assets/css/vars.scss";
            `
            }
        }
    }

}