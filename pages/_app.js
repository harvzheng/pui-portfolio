import '../styles/globals.css'
import Footer from '../pages/components/footer'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp