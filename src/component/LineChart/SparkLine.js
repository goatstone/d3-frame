import React from 'react'
import * as d3 from 'd3'

const SparkLine = ({ data, xScale, yScale }) => {
  const sparkLine = d3.line()
    .x(d => xScale(new Date(d.day).setHours(0, 0, 0, 0)))
    .y(d => yScale(d.quality))
  const linePath = sparkLine(data)

  return (
    <g>
      <path
        className="sparkline"
        d={linePath}
        fill="transparent"
      />
    </g>
  )
}

export default SparkLine
