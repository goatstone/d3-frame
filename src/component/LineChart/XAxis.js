import React from 'react'
import * as d3 from 'd3'

const XAxis = ({
  xScale,
  ticks,
  cssClasses,
  bottomOffset,
}) => {
  const xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(ticks)

  return (
    <g
      ref={node => d3.select(node).call(xAxis)}
      className={cssClasses.classes.chartXAxis}
      transform={`translate(0 ${bottomOffset})`} // set the X position
    />
  )
}

export default XAxis
