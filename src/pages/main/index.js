import React, { Fragment, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Container } from './styles'
import { Creators as SymbolsAction } from '../../store/ducks/symbols'

import Loading from '../../components/Loading'
import Header from '../../components/Header'
import Wishlist from '../../components/Symbol/wishlist'
import SymbolDetail from '../../components/Symbol/detail'

class Main extends Component {
  static propTypes = {
    getSymbolsMarquee: PropTypes.func,
    getSymbolsSupport: PropTypes.func,
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

  componentDidMount () {
    this.props.getSymbolsSupport()
    this.props.getSymbolsMarquee()
  }

  render () {
    const { symbols } = this.props

    return (
      <Fragment>
        <Header />
        <Container>
          {symbols.loading ? <Loading /> : null}
          {Array.from(symbols.wishlist).length > 0 ? (
            <Wishlist wishlist={symbols.wishlist} />
          ) : null}

          {Object.keys(symbols.symbol).length > 0 ? (
            <SymbolDetail symbol={symbols.symbol} />
          ) : null}
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  symbols: state.symbols
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(SymbolsAction, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
