Package.describe({
  name: 'zaku:bootstrap-script',
  summary: 'Front-end framework from Twitter - script only',
  version: '0.9.0_1',
  git: 'https://github.com/Zaku-eu/meteor-bootstrap-script.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('zaku:bootstrap-script.js', 'client');
});
