import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../services/layout'
import AppContext from '../services/context'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  // vamos colocar os dados base do sistema aqui no contexto Global   


  return (
    <AppContext.Provider value={{}} >
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
