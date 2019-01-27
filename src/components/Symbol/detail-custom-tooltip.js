import React from 'react'
import PropTypes from 'prop-types'

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

DetailCustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.number,
      close: PropTypes.number,
      open: PropTypes.number,
      high: PropTypes.number,
      low: PropTypes.number
    })
  )
}

export default DetailCustomTooltip
