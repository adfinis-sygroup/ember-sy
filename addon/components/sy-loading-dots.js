import Component from "@ember/component";
import layout from "../templates/components/sy-loading-dots";

export default Component.extend({
  layout,

  tagName: "span",
  classNames: ["loading-dots"]
});
