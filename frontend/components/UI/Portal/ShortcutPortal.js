import { useState } from 'react'
import { useKeyboardShortcut } from 'hooks'

import ShortcutsWindow from 'components/UI/Shortcuts/ShortcutsWindow'

export default () => {
  const [showShortcuts, setShowShortcuts] = useState(false)

  useKeyboardShortcut(
    {
      '?': () => setShowShortcuts(!showShortcuts),
    },
    'shiftKey',
  )

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
