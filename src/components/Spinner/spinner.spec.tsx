import { render, screen } from '@testing-library/react'

import { Spinner } from '.'

describe('<Spinner />', () => {
  it('should be able to render the Spinner', () => {
    render(<Spinner />)
  })
})
