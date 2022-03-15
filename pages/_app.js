import Layout from '../components/Layout'
import '../styles/globals.css'
import HttpsRedirect from 'react-https-redirect';

function MyApp({ Component, pageProps }) {
  return (
    <HttpsRedirect>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </HttpsRedirect>
    )
}

export default MyApp
