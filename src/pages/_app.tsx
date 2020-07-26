import { AppProps } from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../lib/theme'
import Layout from '../components/Layout'

const App:React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
