import { computed } from "@ember/object";

const { localStorage, JSON } = window;
const { stringify, parse } = JSON;

const defaults = {
  storage: localStorage,

  serialize(val) {
    return stringify(val);
  },

  deserialize(val) {
    return parse(val);
  },

  defaultValue: undefined,

  dependentKeys: []
};

export default function computedStorage(storageKey, options) {
  let {
    storage,
    serialize,
    deserialize,
    defaultValue,
    dependentKeys
  } = Object.assign({}, defaults, options);

  return computed(...dependentKeys, {
    get() {
      let val = storage.getItem(storageKey);
      return val === null ? defaultValue : deserialize(val);
    },
    set(key, val) {
      try {
        storage.setItem(storageKey, serialize(val));
      } catch (e) {
        console.error(e); //eslint-disable-line no-console
      }

      return val;
    }
  });
}
