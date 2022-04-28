// React starts here, and renders whatever page it's supposed to for the time in <Component />
// Footer is used so every page has a footer
import '../styles/globals.css'
import Footer from '../components/footer'
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