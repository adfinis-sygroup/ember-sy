import Component from 'ember-component'
import layout    from '../templates/components/sy-close'

export default Component.extend({
  layout: layout,

  tagName: 'button',
  classNames: 'close',

  attributeBindings: [ 'type', 'aria-label' ],

  type: 'button',
  'aria-label': 'Close'
})
