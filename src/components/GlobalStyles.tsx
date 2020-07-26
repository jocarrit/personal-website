import { Global, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Theme } from '../lib/types'

const globalStyles = (theme: Theme) => css`
  * {
    box-sizing: border-box;
  }
  *::selection {
    color: ${theme.white};
    background-color: ${theme.primary};
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${theme.body};
    background-color: ${theme.background};
  }
`

const GlobalStyles:React.FC = () => {
  const theme = useTheme<Theme>()
  return <Global styles={globalStyles(theme)} />
}

export default GlobalStyles
