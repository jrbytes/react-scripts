import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`
