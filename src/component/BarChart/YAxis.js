import React from 'react'
import * as d3 from 'd3'
import yScaleBarChart from './y-scale-bar-chart'

const YAxis = ({ data, cssClasses }) => {
  const height = parseInt(cssClasses.getRule('chartYAxis').prop('height'), 10)
  const yAxisD3Node = d3.axisLeft()
    .scale(yScaleBarChart([0, d3.max(data, d => d[1])], [height, 0]))
    .ticks(3, '%')

  return (
    <g
      className={cssClasses.classes.chartYAxis}
      ref={node => d3.select(node).call(yAxisD3Node)}
    />
  )
}
export default YAxis
