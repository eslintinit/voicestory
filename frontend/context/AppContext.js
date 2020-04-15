import { useState, useReducer, createContext } from 'react'

const AppContext = createContext()

const initialState = {
  userLoaded: false,
  communitiesLoaded: false,
  channelsLoaded: false,
  messagesLoaded: false,
}

function reducer(state, action) {
  switch (action) {
    case 'USER_LOADED':
      return { userLoaded: true }
    case 'COMMUNITIES_LOADED':
      return { communitiesLoaded: true }
    case 'CHANNELS_LOADED':
      return { channelsLoaded: true }
    case 'MESSAGES_LOADED':
      return { messagesLoaded: true }
    default:
      throw new Error()
  }
}

const AppProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, initialState)
  const appLoaded =
    appState.userLoaded &&
    appState.communitiesLoaded &&
    appState.channelsLoaded &&
    appState.messagesLoaded

  const [showShortcuts, setShowShortcuts] = useState(false)
  const toggleShortcuts = () => setShowShortcuts(!showShortcuts)

  return (
    <AppContext.Provider
      value={{
        appLoaded,
        appState,
        dispatch,
        showShortcuts,
        setShowShortcuts,
        toggleShortcuts,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider as default, AppContext }
