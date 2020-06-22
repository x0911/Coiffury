module.exports = {
  productionSourceMap: false,
  runtimeCompiler: true,
  transpileDependencies: ["vuetify", "@firebase", "proxy-polyfill"],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "Coiffury",
        appId: "com.dash.coiffury",
        win: {
          icon: "public/icon.ico"
        }
      }
    }
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  },
  devServer: {
    host: "localhost"
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Coiffury";
      return args;
    });
    config.plugin("preload").tap(options => {
      options[0].include = "all";
      return options;
    });
  }
};
