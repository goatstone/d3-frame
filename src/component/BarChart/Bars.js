import React from 'react'
import numeral from 'numeral'
import xScaleBarChart from './x-scale'
import yScaleBarChart from './y-scale'

const Bars = ({
  data, cssClasses,
}) => {
  const width = 500
  const height = 200
  const xScale = xScaleBarChart(data, width)
  const yScale = yScaleBarChart(data, height)

  const Bar = data
    .map(d => { // set up the data for the elements
      const yValue = yScale(d[1])
      return {
        label: d[0],
        frequency: d[1],
        x: xScale(d[0]),
        y: yValue,
        w: xScale.bandwidth(),
        h: 300 - yValue,
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
