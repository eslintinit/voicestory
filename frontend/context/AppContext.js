import { useState, createContext } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [userLoaded, setUserLoaded] = useState(false)
  const [communitiesLoaded, setCommunitiesLoaded] = useState(false)
  const [channelsLoaded, setChannelsLoaded] = useState(false)
  const [messagesLoaded, setMessagesLoaded] = useState(false)

  const appLoaded =
    userLoaded && communitiesLoaded && channelsLoaded && messagesLoaded

  return (
    <AppContext.Provider
      value={{
        appLoaded,
        userLoaded,
        setUserLoaded,
        communitiesLoaded,
        setCommunitiesLoaded,
        channelsLoaded,
        setChannelsLoaded,
        messagesLoaded,
        setMessagesLoaded,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider as default, AppContext }
