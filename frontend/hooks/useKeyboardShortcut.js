import { useEffect } from 'react'

export default function useKeyboardShortcut(
  keyMap,
  options = {
    modKey: 'ctrlKey',
    eventType: 'keypress',
  },
) {
  useEffect(() => {
    const { modKey, eventType } = options
    function handleKeyPress(e) {
      if (modKey && !e[modKey]) {
        return
      }

      const callback =
        keyMap[
          eventType === 'keydown' || eventType === 'keyup' ? e.keyCode : e.key
        ]
      if (callback) {
        callback()
      }
    }
    document.addEventListener(eventType, handleKeyPress)

    return () => {
      document.removeEventListener(eventType, handleKeyPress)
    }
  })
}
