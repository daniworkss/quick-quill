import '@/styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return( 
       <>
       <Head>
       <meta  httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
       </Head>
       <Component {...pageProps} />
       {/* <Script src ="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js" /> */}
       <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
      </>
  )
}
