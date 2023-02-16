import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/helpers'
import { Home } from '.'

describe('<Home />', () => {
  it('should be able to render the home page', () => {
    renderWithTheme(<Home />)

    expect(screen.getByRole('heading', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
  })
})
