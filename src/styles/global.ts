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
    display: flex;
    cursor: pointer;
    padding: 0.4rem 1rem;
    font-size: 1.6rem;
    font-family: 'Fira Sans';
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 8px;
    border: 0.2rem solid #fff;
    color: #fff;
    background-color: transparent;
    transition: 0.3s;

    :hover {
      background-color: #128eac;
      border: 0.2rem solid #128eac;
      text-shadow: 1px 1px 2px black;
    }
  }

  a,
  svg {
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
