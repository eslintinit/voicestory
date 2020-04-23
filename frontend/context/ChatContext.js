import { useState, createContext } from 'react'
import { useKeyboardShortcut } from 'hooks'

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
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

  const focusNextMessage = () => {
    const nextMessageIndex = focusedMessageIndex + 1
    const nextMessage = document.getElementById(`message-${nextMessageIndex}`)

    if (nextMessage) {
      setFocusedMessageIndex(nextMessageIndex)
      nextMessage.focus()
    }
  }

  const focusPreviousMessage = () => {
    const previousMessageIndex = focusedMessageIndex - 1
    const previousMessage = document.getElementById(
      `message-${previousMessageIndex}`,
    )

    if (previousMessage) {
      setFocusedMessageIndex(previousMessageIndex)
      previousMessage.focus()
    }
  }

  // ← →
  useKeyboardShortcut(
    {
      ArrowUp: focusPreviousMessage,
      ArrowDown: focusNextMessage,
    },
    {
      modKey: null,
      eventType: 'keydown',
    },
  )

  return (
    <ChatContext.Provider
      value={{
        focusedMessageIndex,
        setFocusedMessageIndex,
        focusMessage,
        unfocusMessage,
        focusNextMessage,
        focusPreviousMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export { ChatProvider as default, ChatContext }
