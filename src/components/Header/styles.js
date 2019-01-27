import styled from 'styled-components'

export const HeaderBox = styled.header`
  height: 142px;
  margin-bottom: 16px;

  & .header {
    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #673ab7;
      width: 100%;
      color: #fff;
      height: 60px;

      & h1 {
        font-size: 36px;
        font-weight: 700;
      }
    }

    &__symbols {
      background: #fff;
      width: 100%;
    }
  }
`
