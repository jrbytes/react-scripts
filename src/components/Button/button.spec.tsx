import { render, screen } from '@testing-library/react'

import { Button } from '.'
import { ButtonProps } from './types'

type SutParams = Pick<ButtonProps, 'buttonText' | 'icon'>
type SutReturn = { button: HTMLElement }

const makeSut = ({ icon, buttonText }: SutParams): SutReturn => {
  render(<Button icon={icon} buttonText={buttonText} />)
  return { button: screen.getByRole('button', { name: buttonText }) }
}

describe('Button Component', () => {
  it('should be able to render the button component', async () => {
    expect(makeSut({ buttonText: 'Ipsum' }).button).toBeDefined()
  })
})
