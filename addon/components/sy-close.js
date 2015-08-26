import Ember  from 'ember'
import layout from '../templates/components/sy-close'

export default Ember.Component.extend({
  layout: layout,

  tagName: 'button',
  classNames: 'close',

  attributeBindings: [ 'type', 'aria-label' ],

  type: 'button',
  'aria-label': 'Close'
})
