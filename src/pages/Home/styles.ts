import styled, { css } from 'styled-components'
import laptopTyping from '../../assets/images/laptop-typing.jpg'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;

    div {
      width: 900px;
      height: 700px;
      display: grid;
      grid-template-columns: 1fr 1fr;

      aside {
        background: url(${laptopTyping}) no-repeat center center / cover;
        border-top-left-radius: ${theme.border.radius};
        border-bottom-left-radius: ${theme.border.radius};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: ${theme.spacings.large};

        font-family: 'League Gothic', sans-serif;
        font-size: ${theme.font.sizes.xxlarge};
      }

      main {
        background-color: ${theme.colors.backgroundLight};
        border-top-right-radius: ${theme.border.radius};
        border-bottom-right-radius: ${theme.border.radius};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: ${theme.spacings.large};
        color: ${theme.colors.green};
      }
    }
  `}
`
