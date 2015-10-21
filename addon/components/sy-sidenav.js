import run                      from 'ember-runloop'
import Component                from 'ember-component'
import computed                 from 'ember-computed'
import { camelize, capitalize } from 'ember-string'
import layout                   from '../templates/components/sy-sidenav'
import computedLocalStorage     from '../utils/computed-local-storage'

const { floor, random } = Math

const evNamespace  = `sysidenav-${floor(random() * Date.now())}`
const animationend = 'animationend mozAnimationEnd webkitAnimationEnd oanimationend MSAnimationEnd'
  .split(' ')
  .map(a => `${a}.${evNamespace}-animationend`)
  .join(' ')

/**
 * SySideNavigation
 *
 * @class SySidenav
 * @public
 */
export default Component.extend({
  layout,

  classNames: [ 'flex-grow' ],

  expand: false,
  slide:  true,

  autohide: computedLocalStorage('sy-sidenav-autohide', false),
  showAutohideButton: true,

  application: computed(function() {
    return this.container.lookup('application:main')
  }),

  title: computed('application.name', function() {
    return capitalize(camelize(this.get('application.name')))
  }),

  headerLink: 'index',

  didInsertElement() {
    this.$('nav.slide-in').one(animationend, () => run(() => {
      this.set('slide', false)
      this.$('nav.slide-in').off(`.${evNamespace}-animationend`)
    }))
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
