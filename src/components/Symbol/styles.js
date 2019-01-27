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
  min-width: 140px;
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
    flex: 1;
    display: flex;

    &__data {
      flex-basis: 33%;
      min-width: 320px;
      position: relative;

      & p {
        margin-bottom: 8px;
      }

      .btn-wishlist {
        cursor: pointer;
        border: 1px solid #673ab7;
        background: transparent;
        border-radius: 3px;
        padding: 5px 10px;
        font-size: 12px;
        color: #673ab7;
        font-weight: 700;
        margin-top: 8px;
        width: 100%;

        &:hover {
          background: #673ab7;
          color: #fff;
        }
      }

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
        align-items: center;

        & .stats {
          display: flex;
          align-items: center;
          margin-left: 8px;
          color: ${props => (props.symbolUp ? '#1ecd93' : '#ff333a')};
          font-size: 18px;
          font-weight: 400;
          flex: 1;
          font-weight: 700;

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
      padding-top: 16px;
      padding-right: 16px;
      margin-left: 16px;

      .error {
      }

      g.recharts-cartesian-axis-ticks {
        font-size: 10px;
      }

      & .area-chart-tooltip {
        background: #f2f2f2;
        box-shadow: 2px 2px 2px -1px #000;
        font-size: 12px;
        font-weight: 700;
        line-height: 18px;
        padding: 8px;
        min-width: 100px;

        & hr {
          margin: 3px 0;
        }
      }
    }

    &__news {
      margin-top: 24px;
      flex-basis: 100%;
    }
  }
`
