import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from '../theme'
import { SEO } from './components/SEO'


Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps, router }: AppProps) {
  const isTemplate = router.asPath.startsWith('/');

  return (
    <ChakraProvider theme={theme}>
      {isTemplate && <SEO/>}
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}


export default App;
