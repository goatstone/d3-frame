import React from 'react'
import * as d3 from 'd3'
import numeral from 'numeral'
import xScaleBarChart from './x-scale-bar-chart'
import yScaleBarChart from './y-scale-bar-chart'

const Bars = ({
  data, cssClasses, chartSize,
}) => {
  const xScale = xScaleBarChart(
    data.map(d => d[0]),
    [0, chartSize.w],
  )
  const yScale = yScaleBarChart(
    [0, d3.max(data, d => d[1])],
    [chartSize.h, 0],
  )

  const Bar = data
    .map(d => { // set up the data for the elements
      const yValue = yScale(d[1])
      return {
        label: d[0],
        frequency: d[1],
        x: xScale(d[0]),
        y: yValue,
        w: xScale.bandwidth(),
        h: chartSize.h - yValue,
      }
    })
    .map(elementData => { // generate the elements for Bar
      return (
        <g
          className={cssClasses.classes.chartBars}
          key={`x${elementData.label}`}
        >
          <rect
            key={`xx${elementData.y}`}
            x={elementData.x}
            y={elementData.y}
            width={elementData.w}
            height={elementData.h}
          />
          <text
            key={`-${elementData.frequency}`}
            x={elementData.x + 2}
            y={elementData.y - 5}
          >
            {
              numeral(elementData.frequency * 100).format('0.0')
            }
          </text>
        </g>
      )
    })
  return Bar
}
export default Bars
