import { useState, useContext } from 'react'
import { AppContext } from 'context'
import { useKeyboardShortcut, useEscapeToClose } from 'hooks'
import FocusTrap from 'focus-trap-react'
import Shortcut from './Shortcut'
import * as S from './ShortcutsWindow.styled'

import shortcutTabs from './shortcutsList'

const ShortcutsWindow = ({ close }) => {
  const { showShortcuts, setShowShortcuts } = useContext(AppContext)
  const [activeTab, setActiveTab] = useState('Essential')

  useKeyboardShortcut(
    {
      '?': () => setShowShortcuts(!showShortcuts),
    },
    'shiftKey',
  )

  useEscapeToClose(() => setShowShortcuts(false))

  if (!showShortcuts) return null

  return (
    <FocusTrap>
      <S.Container>
        <S.Tabs>
          {shortcutTabs.map((tab) => (
            <S.Tab
              active={tab.name === activeTab}
              onFocus={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </S.Tab>
          ))}
        </S.Tabs>
        <S.CloseIconWrapper onClick={close} />
        <S.Body>
          {shortcutTabs
            .find((shortcutTab) => shortcutTab.name === activeTab)
            .shortcuts.map((shortcut, index) => (
              <Shortcut
                shortcut={shortcut}
                index={index}
                key={shortcut.label}
              />
            ))}
        </S.Body>
      </S.Container>
    </FocusTrap>
  )
}

export default ShortcutsWindow
