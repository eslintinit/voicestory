import { useState } from 'react'
import FocusTrap from 'focus-trap-react'
import Shortcut from './Shortcut'
import * as S from './ShortcutsWindow.styled'

import shortcutTabs from './shortcuts'

const ShortcutsWindow = ({ close }) => {
  const [activeTab, setActiveTab] = useState('Essential')

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
