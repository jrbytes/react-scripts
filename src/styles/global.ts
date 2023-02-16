import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  button {
    cursor: pointer;
  }

  a,
  button,
  svg {
    transition: opacity 0.1s;

    &:hover {
      opacity: 0.9;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.mainBg};
    }
  `}
`
