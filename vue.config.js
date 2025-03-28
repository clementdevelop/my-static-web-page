module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'  // GitHub Pages base path
    : '/',
  devServer: {
    allowedHosts: "all",
  },
  css: {
    loaderOptions: {
      css: {
        url: false,
      }
    }
  },
  chainWebpack: config => {
    config.plugin('copy').tap(args => {
      const publicDir = require('path').resolve(process.VUE_CLI_SERVICE.context, 'public').replace(/\\/g, '/');
      const escapedPublicDir = publicDir.replace(/\$/g, '\\$2');
      args[0].patterns[0].globOptions.ignore = args[0].patterns[0].globOptions.ignore.map(i => i.replace(publicDir, escapedPublicDir));
      return args;
    });
  }
};
