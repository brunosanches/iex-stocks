import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Data = ({ symbol }) => (
  <Fragment>
    <div className="symbol__data">
      <p className="symbol__data--company-name">{symbol.company.companyName}</p>
      <p className="symbol__data--primary-exchange">
        {`${symbol.quote.primaryExchange}. Currency in USD`}
      </p>
      <div className="symbol__data--latest-price">
        {symbol.quote.latestPrice}
        <div className="stats">
          <span className="stats__change">{symbol.quote.change}</span>
          <span className="stats__change-percent">
            ({symbol.quote.changePercent})
          </span>
        </div>
      </div>
      <p className="symbol__data--latest-time">{symbol.quote.latestTime}</p>
      <ul className="symbol__data--info-company">
        <li data-info-company="open">
          Open: <span>{symbol.quote.open}</span>
        </li>
        <li data-info-company="previous-close">
          Previous Close: <span>{symbol.quote.close}</span>
        </li>
        <li data-info-company="high">
          High: <span>{symbol.quote.high}</span>
        </li>
        <li data-info-company="low">
          Low: <span>{symbol.quote.low}</span>
        </li>
        <li data-info-company="low">
          P/E Ratio: <span>{symbol.quote.peRatio}</span>
        </li>
      </ul>
    </div>
  </Fragment>
)

export default Data
