import '../public/styles/globals.scss'

import { AppProps } from 'next/app'

import { StoreContextProvider } from '../src/store/context'
import PersistGate from '../src/store/persist'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreContextProvider>
      <PersistGate>
        <Component {...pageProps} />
      </PersistGate>
    </StoreContextProvider>
  )
}

export default MyApp
