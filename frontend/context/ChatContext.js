import { useState, useEffect, createContext } from 'react'
import { useRouter } from 'next/router'

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  const router = useRouter()
  const { community: communityUrl, channel: channelUrl } = router.query

  const [focusedMessageIndex, setFocusedMessageIndex] = useState(null)

  const focusMessage = (messageIndex) => {
    const message = document.getElementById(`message-${messageIndex}`)
    if (message) {
      setFocusedMessageIndex(messageIndex)
      message.focus()
    }
  }

  const unfocusMessage = (messageIndex) => {
    const message = document.getElementById(`message-${messageIndex}`)

    setFocusedMessageIndex(null)
    if (message) {
      message.blur()
    }
  }

  useEffect(() => {
    setFocusedMessageIndex(null)
  }, [communityUrl, channelUrl])

  return (
    <ChatContext.Provider
      value={{
        focusedMessageIndex,
        setFocusedMessageIndex,
        focusMessage,
        unfocusMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export { ChatProvider as default, ChatContext }
