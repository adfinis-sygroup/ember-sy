import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sy-loading-dots', 'Integration | Component | sy loading dots', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sy-loading-dots}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sy-loading-dots}}
      template block text
    {{/sy-loading-dots}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
