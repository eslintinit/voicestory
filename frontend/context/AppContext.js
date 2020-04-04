import { useState, createContext } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [userLoaded, setUserLoaded] = useState(false)
  const [communitiesLoaded, setCommunitiesLoaded] = useState(false)
  const [channelLoaded, setChannelLoaded] = useState(false)
  const [messagesLoaded, setMessagesLoaded] = useState(false)

  const appLoaded =
    userLoaded && communitiesLoaded && channelLoaded && messagesLoaded

  return (
    <AppContext.Provider
      value={{
        appLoaded,
        userLoaded,
        setUserLoaded,
        communitiesLoaded,
        setCommunitiesLoaded,
        channelLoaded,
        setChannelLoaded,
        messagesLoaded,
        setMessagesLoaded,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider as default, AppContext }
