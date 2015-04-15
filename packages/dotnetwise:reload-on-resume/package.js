Package.describe({
  name: "dotnetwise:reload-on-resume",
  summary: "Only allow the app to reload when the app is resumed, both in Cordova/browser.",
  version: '1.0.10',
  git: "https://github.com/dotnetwise/mobile-packages"
});

Package.on_use(function (api) {
  api.versionsFrom("0.9.2");
  api.use(['reactive-var', 'reload'], 'web');

  // Imply so that we can access the Reload export from an app
  api.imply(['reactive-var', 'reload'], 'web');

  api.add_files("reload-on-resume.js", 'web.cordova');
  api.add_files("reload-on-resume.js", 'web.browser');
});
