import Service from 'ember-service'

/**
 * Sidebar toggler state service
 *
 * @class SidebarToggler
 * @extends Ember.Service
 * @public
 */
export default Service.extend({
  /**
   * Current visibility state of toggle button
   *
   * @property {Boolean} showButton
   * @public
   */
  showButton: false,

  /**
   * Enable sidebar toggle button
   *
   * @method enable
   * @return {void}
   */
  enable() {
    this.set('showButton', true)
  },

  /**
   * Disable sidebar toggle button
   *
   * @method disable
   * @return {void}
   */
  disable() {
    this.set('showButton', false)
  }
})
