import React from 'react'
import PropTypes from 'prop-types'

import { DetailBox } from './styles'

import Data from './detail-data'
import Chart from './detail-chart'
import News from './detail-news'

const SymbolDetail = ({ symbol }) => (
  <DetailBox symbolUp={Math.sign(symbol.quote.change) > -1}>
    <div className="symbol">
      <Data />
      <Chart symbol={symbol} />
    </div>
    <News symbol={symbol} />
  </DetailBox>
)

SymbolDetail.propTypes = {
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

export default SymbolDetail
