import Component from "@ember/component";
import layout from "../templates/components/sy-sidenav-item";

const SySidenavItem = Component.extend({
  layout,

  tagName: "li",
  classNames: ["nav-side-list-item"],

  link: null,
  icon: null,
  text: null,
  model: null
});

SySidenavItem.reopenClass({
  positionalParams: ["link", "icon", "text"]
});

export default SySidenavItem;
