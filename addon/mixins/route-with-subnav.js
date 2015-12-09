import Mixin         from 'ember-metal/mixin'
import injectService from 'ember-service/inject'

/**
 * Renders subnav route subroute into subnav outlet
 *
 * @class RouteWithSubnavMixin
 * @public
 */
export default Mixin.create({
  /**
   * Sidebar toggle service
   *
   * @property {SidebarTogglerService} sidebarToggler
   * @public
   */
  sidebarToggler: injectService(),

  /**
   * Enable sidebar toggle button
   *
   * @method activate
   * @return {void}
   */
  activate() {
    this.get('sidebarToggler').enable()
  },

  /**
   * Disable sidebar toggle button
   *
   * @method deactivate
   * @return {void}
   */
  deactivate() {
    this.get('sidebarToggler').disable()
  },

  /**
   * Render subnav into subnav outlet
   *
   * @method renderTemplate
   * @return {void}
   */
  renderTemplate() {
    this._super(...arguments)
    this.render(`${this.routeName}.subnav`, {
      into: 'application',
      outlet: 'subnav'
    })
  }
})
