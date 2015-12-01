define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function configure(config) {
    config.aurelia.use.plugin('materialize-css');
    config.globalResources(['./resources/side-nav']);
  }
});