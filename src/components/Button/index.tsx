import { ButtonProps } from './types'

export function Button({ icon, buttonText, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {icon} {buttonText}
    </button>
  )
}
