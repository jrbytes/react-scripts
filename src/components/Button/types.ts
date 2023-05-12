import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  icon?: React.ReactElement
  buttonText?: string
} & ButtonHTMLAttributes<HTMLButtonElement>
