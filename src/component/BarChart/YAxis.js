import React from 'react'
import * as d3 from 'd3'
import yScaleBarChart from './y-scale'

const YAxis = ({ data, height }) => {
  const yAxisD3Node = d3.axisLeft()
    .scale(yScaleBarChart(data, height))
    .ticks(3, '%')

  return (
    <g
      ref={node => d3.select(node).call(yAxisD3Node)}
      style={{
        transform: `translate(0, ${0}px)`,
      }}
    />
  )
}
export default YAxis
