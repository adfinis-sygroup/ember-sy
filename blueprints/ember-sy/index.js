"use strict";

module.exports = {
  description: "",

  afterInstall() {
    return this.addAddonToPackage("ember-adcssy");
  }
};
