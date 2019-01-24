import React, { Fragment } from 'react'

const Data = () => (
  <Fragment>
    <div className="symbol__data">
      <p className="symbol__data--company-name">Apple Inc. (AAPL)</p>
      <p className="symbol__data--primary-exchange">
        Nasdaq Global Select. Currency in USD
      </p>
      <div className="symbol__data--latest-price">
        153.21
        <div className="stats">
          <span className="stats__change">-0.09</span>
          <span className="stats__change-percent">(-0.00059)</span>
        </div>
      </div>
      <p className="symbol__data--latest-time">3:16:55 PM</p>
      <ul className="symbol__data--info-company">
        <li data-info-company="open">
          Open: <span>154.03</span>
        </li>
        <li data-info-company="previous-close">
          Previous Close: <span>153.3</span>
        </li>
        <li data-info-company="high">
          High: <span>155.14</span>
        </li>
        <li data-info-company="low">
          Low: <span>151.7</span>
        </li>
        <li data-info-company="low">
          P/E Ratio: <span>12.97</span>
        </li>
      </ul>
    </div>
  </Fragment>
)

export default Data
