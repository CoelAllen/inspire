import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)

  /** @type {import('./Models/SandboxImage').SandboxImage | null} */
  sandboxImage = null

  /** @type {import('./Models/SandboxWeather').SandboxWeather | null} */
  sandboxWeather = null

  /** @type {import('./Models/SandboxQuote').SandboxQuote | null} */
  sandboxQuote = null

  /** @type {import('./Models/Task').Task[]} */
  tasks = []
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
