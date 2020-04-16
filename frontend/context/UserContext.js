import { useState, createContext, useContext, useEffect } from 'react'
import { useLazyQuery, useMutation } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { COMPANY_NAME } from 'utils/config'
import { GET_ME, LOGOUT } from 'apis/User'
import { AppContext } from './AppContext'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const {
    appState: { userLoaded },
    dispatch,
  } = useContext(AppContext)
  const [logoutUser] = useMutation(LOGOUT)

  const { back, push } = useRouter()

  const [fetchOnly, { data: { me: me1, loading } = {} }] = useLazyQuery(
    GET_ME,
    {
      fetchPolicy: 'network-only',
      onCompleted: () => {
        localStorage.setItem('tenant', COMPANY_NAME())
        if (me1 !== undefined && me1 !== '') setUser(me1)
        if (!userLoaded) {
          dispatch('USER_LOADED')
        }
        return ''
      },
    },
  )
  // saves token at Cookie and redirects the user
  const signin = (token) => {
    // Store the token in cookie 30 days
    if (token !== undefined && token !== '')
      Cookies.set('token', token, { expires: 30 })
    fetchOnly()
    let domainReferer = new URL(document.referrer).hostname
    let appDomain = new URL(process.env.FRONTEND_URL).hostname
    // if user is sigin from some community return to community
    if (domainReferer === appDomain) return back()
    // else return to general chat
    else return push('/')
  }

  const logout = async () => {
    try {
      await logoutUser({})
    } catch (error) {
      return alert(error)
    }

    Cookies.remove('token')
    setUser(null)
    if (window) {
      window.localStorage.setItem('logout', Date.now())
      localStorage.removeItem('user')
    }
    location.reload()
  }

  useEffect(() => {
    if (!user) {
      fetchOnly()
    }
  }, [])

  useEffect(() => {
    if (user === null) {
      const localState = JSON.parse(localStorage.getItem('user'))
      if (localState) {
        setUser(localState)
      }
    } else if (localStorage.getItem('tenant') !== COMPANY_NAME()) {
      logout()
    } else {
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        isLogged: !!user,

        signin,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider as default, UserContext }
