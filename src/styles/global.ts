import { createGlobalStyle, css } from 'styled-components'
import leagueGothic from '../assets/fonts/league-gothic-regular.ttf'
import firaSansThin from '../assets/fonts/fira-sans-thin.ttf'
import firaSansRegular from '../assets/fonts/fira-sans-regular.ttf'
import firaSansBold from '../assets/fonts/fira-sans-bold.ttf'

export enum FiraCodeFontWeights {
  Thin = 100,
  Regular = 400,
  Bold = 700,
}

export default createGlobalStyle`
  @font-face {
    font-family: 'League Gothic';
    src: local('LeagueGothic-Regular-VariableFont_wdth'), url(${leagueGothic}) format('truetype');
  }

  @font-face {
    font-family: 'Fira Sans';
    src: local('FiraSans-Thin'), url(${firaSansThin}) format('truetype');
    font-weight: ${FiraCodeFontWeights.Thin};
  }

  @font-face {
    font-family: 'Fira Sans';
    src: local('FiraSans-Regular'), url(${firaSansRegular}) format('truetype');
    font-weight: ${FiraCodeFontWeights.Regular};
  }

  @font-face {
    font-family: 'Fira Sans';
    src: local('FiraSans-Bold'), url(${firaSansBold}) format('truetype');
    font-weight: ${FiraCodeFontWeights.Bold};
  }

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
      background-color: ${theme.colors.mainBg};
    }
  `}
`
