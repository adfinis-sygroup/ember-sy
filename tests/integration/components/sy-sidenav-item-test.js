import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, find } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | sy sidenav item", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{sy-sidenav-item}}`);

    assert.equal(find("*").textContent.trim(), "");

    // Template block usage:
    await render(hbs`
      {{#sy-sidenav-item}}
        template block text
      {{/sy-sidenav-item}}
    `);

    assert.equal(find("*").textContent.trim(), "template block text");
  });
});
