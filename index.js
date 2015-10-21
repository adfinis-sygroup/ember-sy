/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sy',

  included: function(app) {
    this._super.included(app)

    app.import('vendor/ember-sy/register-version.js')
  }
};
