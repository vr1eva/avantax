import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import type { AppProps } from 'next/app'

const poppins = Poppins({
  weight: ['400', '500', '600'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return <main className={poppins.className}>
    <Component {...pageProps} />
  </main>
}

export default MyApp
