import Ember  from 'ember'
import layout from '../templates/components/sy-sidenav-list'

export default Ember.Component.extend({
  layout: layout,

  tagName: 'ul',
  classNames: [ 'nav-side-list' ]
})
