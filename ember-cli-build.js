/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    cssnextOptions: {
      features: { rem: false },
      browsers: 'last 2 Firefox versions, last 2 Chrome versions'
    },
    hinting: false
  })

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree()
}
