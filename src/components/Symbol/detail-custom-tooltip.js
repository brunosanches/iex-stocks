import React from 'react'

const DetailCustomTooltip = ({ active, payload, external, label }) => {
  if (active) {
    return (
      <div className="area-chart-tooltip">
        <p>{payload[0].label}</p>
        <p>{`Open: ${payload[0].payload.open}`} </p>
        <p>{`High: ${payload[0].payload.high}`} </p>
        <p>{`Low: ${payload[0].payload.low}`} </p>
        <p>{`Close: ${payload[0].payload.close}`} </p>
      </div>
    )
  }

  return null
}

export default DetailCustomTooltip
