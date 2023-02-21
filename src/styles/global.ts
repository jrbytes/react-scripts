import { createGlobalStyle, css } from 'styled-components'

export enum FiraCodeFontWeights {
  Thin = 100,
  Regular = 400,
  Bold = 700,
}

export default createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'League Gothic', sans-serif;
  }

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
      font-family: ${theme.font.text.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.background};
      color: ${theme.colors.foreground};
    }
  `}
`
