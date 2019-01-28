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

      @media (max-width: 768px) {
        justify-content: flex-start;
        padding-left: 16px;
      }

      & h1 {
        font-size: 36px;
        font-weight: 700;

        @media (max-width: 480px) {
          font-size: 22px;
        }

        @media (max-width: 479px) {
          display: none;
        }
      }
    }

    &__symbols {
      background: #fff;
      width: 100%;
    }
  }
`
