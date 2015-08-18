import Ember                from 'ember'
import layout               from '../templates/components/sy-sidenav'
import computedLocalStorage from '../utils/computed-local-storage'

const { computed             } = Ember
const { camelize, capitalize } = Ember.String

const animationend = 'animationend mozAnimationEnd webkitAnimationEnd oanimationend MSAnimationEnd'

/**
 * SySideNavigation
 *
 * @class SySidenav
 * @public
 */
export default Ember.Component.extend({
  layout,

  classNames: [ 'flex-grow' ],
  expand:   false,
  autohide: computedLocalStorage('sy-sidenav-autohide', false),
  slide:    true,

  application: computed(function() {
    return this.container.lookup('application:main')
  }),

  title: computed('application.name', function() {
    return capitalize(camelize(this.get('application.name')))
  }),

  headerLink: 'index',

  didInsertElement() {
    this.$('nav.slide-in').one(animationend, () => {
      this.set('slide', false)
    })
  },

  actions: {
    toggle() {
      this.set('expand', !this.get('expand'))
    },

    close() {
      this.set('expand', false)
    },

    autohide() {
      this.set('autohide', !this.get('autohide'))
    }
  }
})
