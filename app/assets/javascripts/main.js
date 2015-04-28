// `main.js` is the file that sbt-web will use as an entry point
(function (requirejs) {
  'use strict';
  // -- RequireJS config --
  requirejs.config({
    // Packages = top-level folders; loads a contained file named 'main.js"
    packages: ['common'],
    shim: {
      'jsRoutes': {
        deps: [],
        // it's not a RequireJS module, so we have to tell it what var is returned
        exports: 'jsRoutes'
      }
    },
    paths: {
      'jsRoutes': ['/jsroutes']
    },
    urlArgs: "v="+(new Date()).getTime()
  });

  requirejs.onError = function (err) {
    console.log(err);
  };
})(requirejs);