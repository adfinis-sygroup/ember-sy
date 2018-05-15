import EmberObject from "@ember/object";
import RouteWithSubnavMixin from "../../../mixins/route-with-subnav";
import { module, test } from "qunit";

module("Unit | Mixin | with subnav", function() {
  // Replace this with your real tests.
  test("it works", function(assert) {
    let RouteWithSubnavObject = EmberObject.extend(RouteWithSubnavMixin);
    let subject = RouteWithSubnavObject.create();
    assert.ok(subject);
  });
});
