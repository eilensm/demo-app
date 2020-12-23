module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.externals = {
        "vee-validate": "vee-validate"
      };
    }
  },
  pluginOptions: {
    i18n: {
      enableInSFC: false
    },
    webpackBundleAnalyzer: {
      // verhindert das automatische Öffnen der Seite mit der Webpack Bundle Analyse,
      // die Seite kann dann manuell unter http://127.0.0.1:8888 geöffnet werden
      openAnalyzer: false
    }
  }
};
