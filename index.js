'use strict';

module.exports = function (webpackConfig) {
  webpackConfig.plugins = webpackConfig.plugins || [];
  let len = webpackConfig.plugins.length;
  let latestOptionsPlugin;
  while (len--) {
    let plugin = webpackConfig.plugins[len];
    if (plugin.constructor.name === 'LoaderOptionsPlugin') {
      if (!latestOptionsPlugin) {
        latestOptionsPlugin = plugin;
      } else {
        latestOptionsPlugin.options.options = Object.assign({}, plugin.options.options, latestOptionsPlugin.options.options);
        webpackConfig.plugins.splice(len, 1);
      }
    }
  }
  return webpackConfig;
};