System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(config) {
    config.globalResources(['./aurelia-materialize', './resources/side-nav']);
  }

  return {
    setters: [],
    execute: function () {}
  };
});