import { createContext } from 'react'
// import { useState, createContext, useContext, useEffect } from 'react'
// import { useLazyQuery, useMutation } from '@apollo/react-hooks'
// import Router from 'next/router'
// import Cookies from 'js-cookie'
// import { COMPANY_NAME } from 'utils/config'
// import { LOGOUT_USER, GET_ME } from 'apis/User'
// import { AppContext } from './AppContext'

const UserContext = createContext()

const UserProvider = ({ children }) => {
  // const [user, setUser] = useState(null)

  // const [logoutUser] = useMutation(LOGOUT_USER)
  // const [fetchMe, { data: { me, loading } = {} }] = useLazyQuery(GET_ME, {
  //   fetchPolicy: 'network-only',
  //   onCompleted: () => {
  //     localStorage.setItem('tenant', COMPANY_NAME())
  //     setUser(me)
  //     Router.push(
  //       `/[company]/[community]/[channel]`,
  //       `/${COMPANY_NAME()}/general/general`,
  //       {
  //         shallow: true,
  //       }
  //     )
  //   },
  // })

  // const { userLoaded, setUserLoaded } = useContext(AppContext)

  // const [fetchOnly, { data: { me: me1 } = {} }] = useLazyQuery(GET_ME, {
  //   fetchPolicy: 'network-only',
  //   onCompleted: () => {
  //     localStorage.setItem('tenant', COMPANY_NAME())
  //     setUser(me1)
  //     if (!userLoaded) {
  //       setUserLoaded(true)
  //     }
  //   },
  // })

  // const logout = async () => {
  //   try {
  //     await logoutUser({})
  //   } catch (error) {
  //     alert(error)
  //   }

  //   Cookies.remove('token')
  //   setUser(null)
  //   if (window) {
  //     window.localStorage.setItem('logout', Date.now())
  //     localStorage.removeItem('user')
  //   }
  // }

  // const signin = token => {
  //   Cookies.set('token', token, { expires: 30 })
  //   fetchMe()
  // }

  // const getMe = () => {
  //   fetchOnly()
  // }

  // useEffect(() => {
  //   if (!user) {
  //     getMe()
  //   }
  // }, [])

  // useEffect(() => {
  //   if (user === null) {
  //     const localState = JSON.parse(localStorage.getItem('user'))
  //     if (localState) {
  //       setUser(localState)
  //     }
  //   } else if (localStorage.getItem('tenant') !== COMPANY_NAME()) {
  //     logout()
  //   } else {
  //     localStorage.setItem('user', JSON.stringify(user))
  //   }
  // }, [user])

  return (
    <UserContext.Provider
      value={
        {
          // isLogged: !!user,
          // user,
          // setUser,
          // getMe,
          // signin,
          // logout,
          // loading,
        }
      }
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider as default, UserContext }
