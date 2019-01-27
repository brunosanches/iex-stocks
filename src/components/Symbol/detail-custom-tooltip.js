import React from 'react'

const DetailCustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="area-chart-tooltip">
        <p>{`Time: ${payload[0].payload.label}`} </p>
        <p>{`Close: ${payload[0].payload.close}`} </p>
        <hr />
        <p>{`Open: ${payload[0].payload.open}`} </p>
        <p>{`High: ${payload[0].payload.high}`} </p>
        <p>{`Low: ${payload[0].payload.low}`} </p>
      </div>
    )
  }

  return null
}

export default DetailCustomTooltip
