import React from 'react'
import * as d3 from 'd3'
import yScaleBarChart from './y-scale'

const YAxis = ({ data, cssClasses }) => {
  const height = parseInt(cssClasses.getRule('chartYAxis').prop('height'), 10)
  const yAxisD3Node = d3.axisLeft()
    .scale(yScaleBarChart(data, height))
    .ticks(3, '%')

  return (
    <g
      className={cssClasses.classes.chartYAxis}
      ref={node => d3.select(node).call(yAxisD3Node)}
    />
  )
}
export default YAxis
