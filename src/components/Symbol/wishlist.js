import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Creators as SymbolsActions } from '../../store/ducks/symbols'

import { ListBox } from './styles'
import Simple from './simple'

class Wishlist extends Component {
  static propTypes = {
    getSymbol: PropTypes.func,
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
    return (
      <ListBox>
        {this.props.wishlist.map((symbol, idx) => (
          <div
            key={idx}
            className="wishlist"
            data-symbol={symbol.company.symbol}
            onClick={e => this.props.getSymbol(e.currentTarget.dataset.symbol)}
          >
            <Simple
              key={symbol.company.symbol}
              symbol={symbol.company.symbol}
              companyName={symbol.company.companyName}
              latestPrice={symbol.quote.latestPrice}
              change={symbol.quote.change}
              changePercent={symbol.quote.changePercent}
            />
          </div>
        ))}
      </ListBox>
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
)(Wishlist)
