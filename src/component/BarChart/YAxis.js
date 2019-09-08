import React from 'react'
import * as d3 from 'd3'

const YAxis = ({ cssClasses, yScale, leftOffset }) => {
  const yAxisD3Node = d3.axisLeft()
    .scale(yScale)
    .ticks(3, '%')

  return (
    <g
      className={cssClasses.classes.chartYAxis}
      ref={node => d3.select(node).call(yAxisD3Node)}
      transform={`translate(${leftOffset} 0)`} // set the X position
    />
  )
}
export default YAxis
