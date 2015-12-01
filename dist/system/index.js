System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(config) {
    config.aurelia.use.plugin('materialize-css');
    config.globalResources(['./resources/side-nav']);
  }

  return {
    setters: [],
    execute: function () {}
  };
});