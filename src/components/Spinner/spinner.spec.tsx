import { render } from '@testing-library/react'

import { Spinner } from '.'

describe('Spinner', () => {
  it('should be able to render the spinner', async () => {
    expect(render(<Spinner />).getByLabelText('loading')).toBeInTheDocument()
  })
})
