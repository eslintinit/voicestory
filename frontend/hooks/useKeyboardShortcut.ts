import { useEffect } from 'react'

enum ModKey {
  CtrlKey = 'ctrlKey',
  AltKey = 'altKey',
  ShiftKey = 'shiftKey',
  MetaKey = 'metaKey',
}
enum EventType {
  Keypress = 'keypress',
  Keydown = 'keydown',
  Keyup = 'keyup',
}
enum Attribute {
  Key = 'key',
  KeyCode = 'keyCode',
}
interface Options {
  modKey: keyof typeof ModKey
  eventType: keyof typeof EventType
  attr: keyof typeof Attribute
}
export default function useKeyboardShortcut(
  keyMap,
  options: Options = {
    modKey: ModKey.CtrlKey,
    eventType: EventType.Keypress,
    attr: Attribute.Key,
  },
) {
  useEffect(() => {
    const { modKey = 'ctrlKey', eventType = 'keypress', attr = 'key' } = options

    const handler = (event) => {
      console.log(event)
      if (modKey && !event[modKey]) {
        return
      }

      const callback = keyMap[event[attr]]
      if (callback) {
        callback()
      }
    }

    document.addEventListener(eventType, handler)

    return () => {
      document.removeEventListener(eventType, handler)
    }
  })
}
