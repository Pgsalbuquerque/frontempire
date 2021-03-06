import GlobalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}> 
      <Component {...pageProps} />
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default MyApp