import React from 'react'

import { SimpleBox } from './styles'

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
      </div>
    </div>
  </SimpleBox>
)

export default Simple
