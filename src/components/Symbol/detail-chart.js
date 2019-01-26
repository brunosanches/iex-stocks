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
      <ResponsiveContainer>
        <AreaChart
          data={symbol.chart}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" ticks={symbol.quote.symbolsChartTime} />
          <YAxis
            domain={['dataMin', 'dataMax']}
            ticks={symbol.quote.symbolsChartClose}
          />
          <Tooltip content={<DetailCutomToolTip external={symbol.chart} />} />
          <Area
            type="linear"
            dataKey="close"
            stroke={Math.sign(symbol.quote.change) > -1 ? '#1ecd93' : '#ff333a'}
            fill={Math.sign(symbol.quote.change) > -1 ? '#1ecd93' : '#ff333a'}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </Fragment>
)

export default Chart
