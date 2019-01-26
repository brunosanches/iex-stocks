import React, { Fragment } from 'react'

const News = ({ symbol }) => (
  <Fragment>
    <div className="symbol__news">
      {symbol.news.map((notice, idx) => (
        <p key={idx}>{notice.headline}</p>
      ))}
    </div>
  </Fragment>
)

export default News
