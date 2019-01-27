import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import DetailCutomToolTip from './detail-custom-tooltip'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const Chart = ({ symbol }) => (
  <Fragment>
    <div className="symbol__chart">
      {symbol.error.status && symbol.error.orign === 'chart' ? (
        <p className="error">{symbol.error.message}</p>
      ) : (
        <ResponsiveContainer>
          <AreaChart
            data={symbol.chart.data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis dataKey="label" ticks={symbol.chart.symbolsChartTime} />
            <YAxis
              domain={['dataMin', 'dataMax']}
              ticks={symbol.chart.symbolsChartClose}
            />
            <Tooltip
              content={<DetailCutomToolTip external={symbol.chart.data} />}
            />
            <Area
              type="linear"
              dataKey="close"
              stroke={
                Math.sign(symbol.quote.change) > -1 ? '#1ecd93' : '#ff333a'
              }
              fill={Math.sign(symbol.quote.change) > -1 ? '#1ecd93' : '#ff333a'}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  </Fragment>
)

Chart.propTypes = {
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

export default Chart
