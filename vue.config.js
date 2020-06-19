module.exports = {
  productionSourceMap: false, // From Shuqbara
  runtimeCompiler: true,
  transpileDependencies: ["vuetify", "@firebase"],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "Haircode",
        appId: "com.dash.haircode",
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
      args[0].title = "Haircode";
      return args;
    });
  }
};
