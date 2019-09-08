import React from 'react'
import * as d3 from 'd3'

const XAxis = ({ cssClasses, xScale }) => {
  const xAxisD3Node = d3.axisBottom()
    .scale(xScale)

  return (
    <g
      className={cssClasses.classes.chartXAxis}
      ref={node => d3.select(node).call(xAxisD3Node)}
    />
  )
}
export default XAxis
