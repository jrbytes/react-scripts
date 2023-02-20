import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/helpers'
import { Home } from '.'
import theme from '../../styles/theme'

describe('<Home />', () => {
  it('should be able to render the home page', async () => {
    const { container } = renderWithTheme(<Home />)

    setTimeout(() => {
      expect(
        screen.getByText(/react tips/i, { selector: 'aside' })
      ).toBeInTheDocument()
      expect(screen.getByText(/hello world/i)).toBeInTheDocument()
      expect(container).toHaveStyle({
        backgroundColor: theme.grid.container,
      })
    }, 100)
  })
})
