import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import type { AppProps } from 'next/app'
import Layout from "./components/Layout"

const poppins = Poppins({
  weight: ['400', '500', '600', "800", "900"],
  style: ['normal'],
  subsets: ['latin']
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </div>

  )
}

export default MyApp
