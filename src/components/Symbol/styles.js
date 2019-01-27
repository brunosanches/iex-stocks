import styled from 'styled-components'

export const SimpleBox = styled.div`
  font-size: 12px;
  font-weight: 700;
  padding: 8px;
  background: #f5f5f5;
  border-radius: 3px;

  &:hover {
    background: #efefef;
  }

  & .symbol {
    &__data {
      display: flex;
      flex-direction: column;
      justify-content: center;

      & .company-name {
        color: #673ab7;
      }

      & .change {
        color: ${props => (props.symbolUp ? '#1ecd93' : '#ff333a')};
        margin-top: 4px;
      }

      &--stats {
        display: flex;
        align-items: center;
        margin-top: 8px;

        &-price {
          width: 100%;
        }
      }
    }

    &__chart {
      margin-left: 16px;
    }
  }
`

export const ListBox = styled.div`
  background: #e1e2e1;
  border-radius: 2px;
  margin-right: 16px;
  min-width: 200px;
  padding: 16px;

  & .wishlist {
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`

export const DetailBox = styled.div`
  position: relative;
  background: #f5f5f6;
  border-radius: 2px;
  padding: 32px 16px 16px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;

  &::before {
    content: '';
    position: absolute;
    width: calc(100% - 32px);
    background: ${props => (props.symbolUp ? '#1ecd93' : '#ff333a')};
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
          color: ${props => (props.symbolUp ? '#1ecd93' : '#ff333a')};
          font-size: 18px;
          font-weight: 400;

          &__change-percent {
            margin-left: 5px;
          }
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
      background: #efefef;
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
