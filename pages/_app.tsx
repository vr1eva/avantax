import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import type { AppProps } from 'next/app'

const poppins = Poppins({
  weight: ['400', '500', '600', "900"]
})

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </>
}

export default MyApp
