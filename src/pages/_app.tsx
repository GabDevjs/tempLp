import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../services/layout'
import AppContext from '../services/context'
import { ConfigPage } from '../config'

function MyApp({ Component, pageProps }: AppProps) {
  // 
  const { navbar, infos, social } = ConfigPage

  return (
    <AppContext.Provider value={{
      navbar,
      infos,
      social,
    }} >
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
