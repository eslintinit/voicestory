import { useEffect } from 'react'

export default function useKeyboardShortcut(keyMap, options = {}) {
  useEffect(() => {
    const { modKey = 'ctrlKey', eventType = 'keypress', attr = 'key' } = options

    const handler = (event) => {
      // console.log(event)
      if (modKey && !event[modKey]) {
        return
      }

      // eventType === 'keydown' || eventType === 'keyup' ? e.keyCode : e.key
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
