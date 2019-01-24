import React, { Fragment } from 'react'

import { DetailBox } from './styles'

import Data from './detail-data'
import Chart from './detail-chart'
import News from './detail-news'

const SymbolDetail = () => (
  <DetailBox>
    <Data />
    <Chart />
    <News />
  </DetailBox>
)

export default SymbolDetail
