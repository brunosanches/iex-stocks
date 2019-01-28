import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Creators as SymbolsActions } from '../../store/ducks/symbols'

import Loading from '../Loading'

class Data extends Component {
  static propTypes = {
    addWishList: PropTypes.func,
    removeWishList: PropTypes.func,
    symbols: PropTypes.shape({
      wishlist: PropTypes.array,
      symbol: PropTypes.shape({
        chart: PropTypes.shape({
          data: PropTypes.arrayOf(
            PropTypes.shape({
              average: PropTypes.number,
              changeOverTime: PropTypes.number,
              close: PropTypes.number,
              date: PropTypes.date,
              high: PropTypes.number,
              label: PropTypes.string,
              low: PropTypes.number,
              marketAverage: PropTypes.number,
              marketChangeOverTime: PropTypes.number,
              marketClose: PropTypes.number,
              marketHigh: PropTypes.number,
              marketLow: PropTypes.number,
              marketNotional: PropTypes.number,
              marketNumberOfTrades: PropTypes.number,
              marketOpen: PropTypes.number,
              marketVolume: PropTypes.number,
              minute: PropTypes.string,
              notional: PropTypes.number,
              numberOfTrades: PropTypes.number,
              open: PropTypes.number,
              volume: PropTypes.number
            })
          ),
          symbolsChartClose: PropTypes.array,
          symbolsChartTime: PropTypes.array
        }),
        company: PropTypes.shape({
          companyName: PropTypes.string,
          exchange: PropTypes.string,
          symbol: PropTypes.string,
          website: PropTypes.string
        }),
        quote: PropTypes.shape({
          change: PropTypes.string,
          changePercent: PropTypes.string,
          close: PropTypes.string,
          high: PropTypes.string,
          latestPrice: PropTypes.number,
          latestTime: PropTypes.string,
          low: PropTypes.string,
          open: PropTypes.string,
          peRatio: PropTypes.string
        }),
        error: PropTypes.shape({
          message: PropTypes.string,
          orign: PropTypes.string,
          status: PropTypes.bool
        })
      })
    })
  }

  render () {
    const {
      symbols: { symbol, wishlist, loading }
    } = this.props
    return (
      <Fragment>
        {loading ? <Loading /> : null}
        <div className="symbol__data">
          <p className="symbol__data--company-name">
            {symbol.company.companyName} ({symbol.company.symbol})
          </p>
          <p className="symbol__data--primary-exchange">
            {`${symbol.company.exchange}. Currency in USD`}
          </p>
          <div className="symbol__data--latest-price">
            {symbol.quote.latestPrice}
            <div className="stats">
              <span className="stats__change">{symbol.quote.change}</span>
              <span className="stats__change-percent">
                ({symbol.quote.changePercent})
              </span>
            </div>
          </div>
          <p className="symbol__data--latest-time">{symbol.quote.latestTime}</p>
          <ul className="symbol__data--info-company">
            <li data-info-company="open">
              Open: <span>{symbol.quote.open}</span>
            </li>
            <li data-info-company="previous-close">
              Previous Close: <span>{symbol.quote.close}</span>
            </li>
            <li data-info-company="high">
              High: <span>{symbol.quote.high}</span>
            </li>
            <li data-info-company="low">
              Low: <span>{symbol.quote.low}</span>
            </li>
            <li data-info-company="low">
              P/E Ratio: <span>{symbol.quote.peRatio}</span>
            </li>
          </ul>
          {wishlist.filter(
            symbolList =>
              symbolList.company.companyName === symbol.company.companyName
          ).length === 0 ? (
              <button
                className="btn-wishlist"
                onClick={e => this.props.addWishList(symbol)}
              >
              Add Wishlist
              </button>
            ) : (
              <button
                className="btn-wishlist"
                onClick={e => this.props.removeWishList(symbol)}
              >
              Remove Wishlist
              </button>
            )}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  symbols: state.symbols
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(SymbolsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data)
