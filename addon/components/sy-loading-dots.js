import Ember  from 'ember'
import layout from '../templates/components/sy-loading-dots'

export default Ember.Component.extend({
  layout,

  tagName: 'span',
  classNames: [ 'loading-dots' ]
})
