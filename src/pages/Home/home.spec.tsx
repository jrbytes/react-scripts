import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/helpers'
import { Home } from '.'
import theme from '../../styles/theme'

describe('<Home />', () => {
  it('should be able to render the home page', () => {
    const { container } = renderWithTheme(<Home />)

    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      maxWidth: theme.grid.container,
    })
  })
})
