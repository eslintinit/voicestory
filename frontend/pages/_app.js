import App from 'next/app';
import { withApollo } from 'utils/apollo';
import UploadManagerProvider from 'context/UploadManager';
import ThemeProvider from 'context/ThemeProvider';
// import { ToastContainer } from 'react-toastify';
import * as Sentry from '@sentry/node';

import AppProvider from 'context/AppContext';
import UserProvider from 'context/UserContext';

import Layout from 'components/Layout';
import NextNProgress from 'components/UI/NextNProgress';
import Loader from 'components/UI/Loader';

import { FlagCloseButton } from 'components/UI/Flag/Flag';

import ResetStyles from 'styles/reset';
import GlobalStyles from 'styles/global';
import FontsStyles from 'styles/fonts';
import ProgressBarStyles from 'styles/progressbar';

import FlexStyles from 'styles/flex';
import StyledToastContainer from 'styles/toastify';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.min.css';

Sentry.init({
  dsn: 'https://0ab20507a8b44341b9ea647c69a54f40@sentry.io/4038973',
});

const Providers = ({ children }) => (
  <AppProvider>
    <UserProvider>
      <UploadManagerProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </UploadManagerProvider>
    </UserProvider>
  </AppProvider>
);

class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
      router: { route },
    } = this.props;

    const hideLayout =
      route === '/' ||
      route === '/[company]/signup' ||
      route === '/[company]/login' ||
      route === '/[company]/communities/new';

    const isWidget = route !== '/';

    if (!isWidget) {
      return (
        <>
          <ResetStyles />
          <FontsStyles />
          <Component {...pageProps} />
        </>
      );
    }

    return (
      <Providers>
        <Layout hideLayout={hideLayout}>
          {/*
          <NextNProgress />
          */}
          <StyledToastContainer closeButton={<FlagCloseButton />} autoClose={4000} />
          <Component {...pageProps} />
          <>
            <FontsStyles />
            <ResetStyles />
            <GlobalStyles />
            <ProgressBarStyles />
            <FlexStyles />
          </>
        </Layout>
      </Providers>
    );
  }
}

export default withApollo()(MyApp);
