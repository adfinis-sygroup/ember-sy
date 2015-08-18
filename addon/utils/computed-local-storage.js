import Ember from 'ember'

const { computed }           = Ember
const { localStorage, JSON } = window
const { stringify, parse }   = JSON

export default function computedLocalStorage(storageKey, defaultValue) {
  return computed({
    get() {
      let val = localStorage[storageKey]
      return val == null ? defaultValue : parse(val)
    },
    set(key, val) {
      localStorage[storageKey] = stringify(val)
      return val
    }
  })
}
