Package.describe({
  summary: "Front-end framework from Twitter - script only"
});

Package.on_use(function (api) {
  api.use('jquery');

  var path = Npm.require('path');
  api.add_files(path.join('js', 'bootstrap.js'), 'client');
});
