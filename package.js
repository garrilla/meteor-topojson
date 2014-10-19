Package.describe({
  name: 'garrilla:topojson',
  summary: 'An extension to GeoJSON that encodes topology. ',
  version: '1.6.18',
  git: 'https://github.com/garrilla/meteor-topojson.git'
});

Package.onUse(function(api) {
  api.versionsFrom('undefined');
  api.addFiles('garrilla:topojson.js');
  api.addFiles('topojson/topojson.js','client');
  api.export('topojson','client')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('garrilla:topojson');
  api.addFiles('garrilla:topojson-tests.js');
});
