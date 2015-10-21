import Component from 'ember-component'
import layout    from '../templates/components/sy-sidenav-list'

const SySidenavList = Component.extend({
  layout: layout,

  tagName: 'ul',
  classNames: [ 'nav-side-list' ],

  header: null
})

SySidenavList.reopenClass({
  positionalParams: [ 'header' ]
})

export default SySidenavList
