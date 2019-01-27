import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Creators as SymbolsActions } from '../../store/ducks/symbols'

class Data extends Component {
  render () {
    const {
      symbols: { symbol, wishlist }
    } = this.props
    return (
      <Fragment>
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
