import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

export function renderWithTheme(children: React.ReactNode): RenderResult {
  return render(
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
}
