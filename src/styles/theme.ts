import { FiraCodeFontWeights } from './global'

export default {
  grid: {
    container: '110rem',
    gutter: '3.2rem',
    gutterLarge: '5.2rem',
  },
  border: {
    radius: '0.4rem',
  },
  font: {
    title: {
      family: '"League Gothic", sans-serif',
    },
    text: {
      family: '"Fira Sans", sans-serif',
      weight: {
        thin: FiraCodeFontWeights.Thin,
        regular: FiraCodeFontWeights.Regular,
        bold: FiraCodeFontWeights.Bold,
      },
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },
  colors: {
    primary: '#0a3380',
    primaryLight: '#2ea6f7',
    secondary: '#54ced4',
    text: '#3b4964',
    mainBg: '#f2f2f2',
    success: '#61ce70',
    warning: '#ff9e21',
    error: '#f03759',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
} as const
