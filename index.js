'use strict';

module.exports = function (webpackConfig) {
  let len = webpackConfig.plugins.length;
  let latestOptionsPlugin;
  while (len--) {
    let plugin = webpackConfig.plugins[len];
    if (plugin.constructor.name === 'LoaderOptionsPlugin') {
      if (!latestOptionsPlugin) {
        latestOptionsPlugin = plugin;
      } else {
        Object.assign(latestOptionsPlugin.options.options, plugin.options.options);
        webpackConfig.plugins.splice(len, 1);
      }
    }
  }
  return webpackConfig;
};