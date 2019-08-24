import React from 'react'
import numeral from 'numeral'
import barsData from './bars-data'
import xScaleBarChart from './x-scale'
import yScaleBarChart from './y-scale'

const elements = ({
  data, width, height, foregroundColor,
}) => {
  const elementData = barsData(
    data,
    xScaleBarChart(data, width),
    yScaleBarChart(data, height),
    height,
  )
  const newData = elementData
    .map(d => {
      return (
        <g
          key={`x${d.label}`}
        >
          <rect
            key={`xx${d.y}`}
            x={d.x}
            y={d.y}
            width={d.w}
            height={d.h}
            fill={foregroundColor}
          />
          <text
            fill={foregroundColor}
            key={`xxxx${d.frequency}`}
            x={d.x + 2}
            y={d.y - 5}
          >
            {
              numeral(d.frequency * 100).format('0.0')
            }
          </text>
        </g>
      )
    })
  return newData
}
export default elements
