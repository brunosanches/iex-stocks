import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts'

import { SimpleBox } from './styles'

const data = [
  { name: 'Open', uv: 4000, amt: 2400 },
  { name: 'Close', uv: 3000, amt: 2210 }
]

const Simple = ({ symbol, latestPrice, change, changePercent }) => (
  <SimpleBox symbolUp={Math.sign(change) > -1}>
    <div className="symbol__data">
      <p className="company-name">{symbol}</p>
      <div className="symbol__data--stats">
        <div className="symbol__data--stats-price">
          <div className="price-latest">{latestPrice} </div>
          <div className="change">
            {change} ({changePercent})
          </div>
        </div>
        <div className="symbol__chart">
          <LineChart width={80} height={30} data={data}>
            <XAxis dataKey="name" hide={true} />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  </SimpleBox>
)

export default Simple
