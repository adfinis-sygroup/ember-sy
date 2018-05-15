import Mixin from "@ember/object/mixin";

/**
 * Renders subnav route subroute into subnav outlet
 *
 * @class RouteWithSubnavMixin
 * @public
 */
export default Mixin.create({
  /**
   * Render subnav into subnav outlet
   *
   * @method renderTemplate
   * @return {void}
   */
  renderTemplate() {
    this._super(...arguments);
    this.render(`${this.routeName}.subnav`, {
      into: "application",
      outlet: "subnav"
    });
  }
});
