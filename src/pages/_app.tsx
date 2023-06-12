import 'styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import createEmotionCache from 'utils/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react'
import Layout from 'layout/Layout'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  )
}
