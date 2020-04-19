import { useState } from 'react'
import { useKeyboardShortcut, useEscapeToClose } from 'hooks'

import ShortcutsWindow from 'components/UI/Shortcuts/ShortcutsWindow'

export default () => {
  const [showShortcuts, setShowShortcuts] = useState(false)

  useKeyboardShortcut(
    {
      '?': () => setShowShortcuts(!showShortcuts),
    },
    { modKey: 'shiftKey' },
  )

  useEscapeToClose(() => setShowShortcuts(false))

  return (
    <>
      <button
        onClick={() => setShowShortcuts(!showShortcuts)}
        className="button"
        type="button"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      >
        Shortcuts
      </button>
      {showShortcuts && (
        <ShortcutsWindow close={() => setShowShortcuts(false)} />
      )}
    </>
  )
}
