import styled from 'styled-components'

export const ListBox = styled.div`
  width: 220px;
  background: #e1e2e1;
  border-radius: 2px;
  padding: 16px;
`

export const DetailBox = styled.div`
  position: relative;
  background: #f5f5f6;
  border-radius: 2px;
  margin-left: 16px;
  padding: 32px 16px 16px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;

  &::before {
    content: '';
    position: absolute;
    width: calc(100% - 32px);
    background: #ff333a;
    height: 8px;
    display: block;
    top: 16px;
  }

  & .symbol {
    &__data {
      flex-basis: 33%;
      min-width: 320px;

      &--company-name {
        font-weight: 700;
        font-size: 18px;
      }

      &--primary-exchange,
      &--latest-time {
        font-size: 12px;
        color: #767676;
      }

      &--latest-price {
        font-size: 36px;
        font-weight: 700;
        display: flex;

        & .stats {
          display: flex;
          align-items: center;
          margin-left: 8px;
        }

        & span.stats__change {
          font-size: 18px;
          color: #ff433d;
          font-weight: 400;
        }

        & span.stats__change-percent {
          font-size: 18px;
          color: #ff433d;
          font-weight: 400;
          margin-left: 5px;
        }
      }

      &--info-company {
        list-style: none;
        font-size: 14px;
        margin-top: 16px;

        & li {
          font-weight: 700;
          display: flex;
          align-items: center;
          height: 24px;
          border-top: 1px dotted #000;

          & span {
            font-weight: 400;
            display: block;
            flex: 1;
            text-align: right;
          }

          &:last-child {
            border-bottom: 1px dotted #000;
          }
        }
      }
    }

    &__chart {
      min-height: 180px;
      flex: 1;
      background: #e1e2e1;
      border-radius: 2px;
      padding: 16px;
      margin-left: 16px;
    }

    &__news {
      margin-top: 24px;
      flex-basis: 100%;
    }
  }
`
