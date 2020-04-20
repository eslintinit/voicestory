import { useState, useEffect } from 'react'
import { useDoubleKeyPress } from 'hooks'
import useSound from 'use-sound'

import Landing from './Landing'
import Widget from './Widget'
import WidgetIcon from './WidgetIcon'

export default () => {
  const widgetUrl = `${process.env.FRONTEND_URL}/voicestory/general/general`
  const [widgetOpened, setWidgetOpened] = useState(false)

  // useKeyboardShortcut(
  //   {
  //     Escape: () => alert('escape'),
  //   },
  //   {
  //     modKey: null,
  //     eventType: 'keyup',
  //     attr: 'key'
  //   },
  // )
  const [playSoundWidgetOpen] = useSound('/sounds/card_drop.mp3')
  const [playSoundWidgetClose] = useSound('/sounds/card_deal.mp3')

  const openWidget = () => {
    playSoundWidgetOpen()
    setWidgetOpened(true)
  }

  const closeWidget = () => {
    playSoundWidgetClose()
    setWidgetOpened(false)
  }

  useDoubleKeyPress({
    key: 'Enter',
    onDoublePress: openWidget,
  })

  useDoubleKeyPress({
    key: 'Escape',
    onDoublePress: closeWidget,
  })

  useEffect(() => {
    const onClose = window.addEventListener(
      'message',
      (event) => {
        if (event.data.message === 'close-widget') {
          closeWidget()
        }
        if (event.data.message === 'open-widget') {
          openWidget()
        }
      },
      false,
    )
    return () => window.removeEventListener('message', onClose)
  }, [])

  return (
    <Landing>
      <WidgetIcon openWidget={openWidget} show={!widgetOpened} />
      <Widget widgetUrl={widgetUrl} opened={widgetOpened} />
    </Landing>
  )
}
