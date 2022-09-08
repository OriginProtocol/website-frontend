//import 'react-toastify/scss/main.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
