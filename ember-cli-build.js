/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-addon')
var funnel   = require('broccoli-funnel')

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    hinting: false
  })

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  var adcssyAssets = funnel('bower_components/adcssy/assets', {
    srcDir: '/',
    include: [ 'fonts/*', 'pictures/**/*' ],
    destDir: '/'
  })

  var fontAwesome = funnel('node_modules/font-awesome/fonts', {
    destDir: '/fonts'
  })

  app.import('bower_components/adcssy/build/css/adcssy.css')

  return app.toTree([ adcssyAssets, fontAwesome ])
}
