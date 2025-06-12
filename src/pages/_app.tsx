import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode, useEffect } from 'react';
import Head from 'next/head';
import { Global } from '@/styles/styled/global';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@/styles/styled/themes';
import useThemeStore from '@/stores/useThemeStore';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type AppWrapperProps = {
  children: ReactNode;
};

const AppThemeWrapper = ({ children }: AppWrapperProps) => {
  const { theme } = useThemeStore();
  const themeObject = theme === 'dark' ? darkTheme : lightTheme;
  return (
    <StyledThemeProvider theme={themeObject}>{children}</StyledThemeProvider>
  );
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();

  useEffect(() => {
    NProgress.configure({
      easing: 'ease-out',
      speed: 400,
      showSpinner: false,
      trickleRate: 0.02,
      trickleSpeed: 400,
    });

    const start = () => NProgress.start();
    const done = () => NProgress.done();

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', done);
    router.events.on('routeChangeError', done);

    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', done);
      router.events.off('routeChangeError', done);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Product Gallery</title>
      </Head>
      <Global />
      {/* <Toaster /> */}
      <AppThemeWrapper>
        {getLayout(<Component {...pageProps} />)}
      </AppThemeWrapper>
    </>
  );
}

export default appWithTranslation(MyApp);
