import Ember from 'ember'
import RouteWithSubnavMixin from '../../../mixins/route-with-subnav'
import { module, test } from 'qunit'

module('Unit | Mixin | with subnav')

// Replace this with your real tests.
test('it works', function(assert) {
  let RouteWithSubnavObject = Ember.Object.extend(RouteWithSubnavMixin)
  let subject = RouteWithSubnavObject.create()
  assert.ok(subject)
})
