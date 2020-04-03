import App from 'next/app'
import { withApollo } from 'utils/apollo'
import ThemeProvider from 'context/ThemeProvider'
import * as Sentry from '@sentry/node'

import AppProvider from 'context/AppContext'
import UserProvider from 'context/UserContext'

import Layout from 'components/Layout'

import ResetStyles from 'styles/reset'
import GlobalStyles from 'styles/global'
import FontsStyles from 'styles/fonts'
import 'react-perfect-scrollbar/dist/css/styles.css'

Sentry.init({
  dsn: 'https://0ab20507a8b44341b9ea647c69a54f40@sentry.io/4038973',
})

const Providers = ({ children }) => (
  <AppProvider>
    <UserProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </UserProvider>
  </AppProvider>
)

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
      router: { route },
    } = this.props

    const hideLayout =
      route === '/' ||
      route === '/[company]/signup' ||
      route === '/[company]/login' ||
      route === '/[company]/communities/new'

    const isWidget = route !== '/'

    if (!isWidget) {
      return (
        <>
          <ResetStyles />
          <Component {...pageProps} />
        </>
      )
    }

    return (
      <Providers>
        <Layout hideLayout={hideLayout}>
          <Component {...pageProps} />
          <>
            <ResetStyles />
            <FontsStyles />
            <GlobalStyles />
          </>
        </Layout>
      </Providers>
    )
  }
}

export default withApollo()(MyApp)
