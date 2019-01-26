import React from 'react'

import { DetailBox } from './styles'

import Data from './detail-data'
import Chart from './detail-chart'
import News from './detail-news'

const SymbolDetail = ({ symbol }) => (
  <DetailBox symbolUp={Math.sign(symbol.quote.change) > -1}>
    <Data symbol={symbol} />
    <Chart symbol={symbol} />
    <News symbol={symbol} />
  </DetailBox>
)

export default SymbolDetail
