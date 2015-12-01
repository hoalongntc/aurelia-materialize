export function configure(config) {
  config.aurelia.use.plugin('materialize-css');
  config.globalResources([
    './resources/side-nav'
  ]);
}
