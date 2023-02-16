import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import { Home } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}
