import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import DetailCutomToolTip from './detail-custom-tooltip'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
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

export default Chart
