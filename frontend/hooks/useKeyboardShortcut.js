import { useEffect } from 'react'

export default function useKeyboardShortcut(keyMap, modKey = 'ctrlKey') {
  useEffect(() => {
    function handleKeyPress(e) {
      if (!e[modKey]) {
        return
      }

      const callback = keyMap[e.key]
      if (callback) {
        callback()
      }
    }
    document.addEventListener('keypress', handleKeyPress)

    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  })
}
