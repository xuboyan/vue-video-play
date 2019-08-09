module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    outputDir: 'dist',
    assetsDir: 'static',
    filenameHashing: true,
    // 当在 multi-page 模式下构建时，webpack 配置会包含不一样的插件
    // (这时会存在多个 html-webpack-plugin 和 preload-webpack-plugin 的实例)。
    // 如果你试图修改这些插件的选项，请确认运行 vue inspect。
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },

    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,

    // 是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,

    // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
    transpileDependencies: [],

    // 生产环境 sourceMap
    productionSourceMap: false,

    // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
    // corsUseCredentials: false,
    // webpack 配置，键值对象时会合并配置，为方法时会改写配置
    // https://cli.vuejs.org/guide/webpack.html#simple-configuration
    configureWebpack: (config) => {

    },

    // webpack 链接 API，用于生成和修改 webapck 配置
    // https://github.com/mozilla-neutrino/webpack-chain
    chainWebpack: (config) => {
        // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
        config.optimization
            .splitChunks({
                cacheGroups: {}
            });

        // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
        config.module
            .rule('eslint')
            .exclude
            .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
            .end()
    },

    // 配置高于chainWebpack中关于 css loader 的配置
    css: {
        // 是否开启支持 foo.module.css 样式
        modules: false,

        // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
        extract: false,

        // 是否构建样式地图，false 将提高构建速度
        sourceMap: false,

        // css预设器配置项
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },

            postcss: {
                // options here will be passed to postcss-loader
            }
        }
    },

    // All options for webpack-dev-server are supported
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        open: false,
        hot:true,
        host: '0.0.0.0',

        port: 3000,

        https: false,

        hotOnly: false,

        proxy: {
            '/apis':{
                target:'http://120.55.60.108:8080/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/apis': '/'
                }
            }
        },

    },
    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 1,

    // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},

    // 第三方插件配置
    pluginOptions: {}
};