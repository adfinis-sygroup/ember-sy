/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-sy',

  options: {
    babel: {
      plugins: ['transform-object-rest-spread']
    }
  },

  included: function(app) {
    this._super.included(app)

    app.import('vendor/ember-sy/register-version.js')
  }
};
