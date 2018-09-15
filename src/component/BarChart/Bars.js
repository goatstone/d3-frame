import React from 'react'
import numeral from 'numeral'
import barsData from './bars-data'
import xScaleBarChart from './x-scale'
import yScaleBarChart from './y-scale'

const elements = ({
    data, width, height, barHeightMax, foregroundColor,
}) => {
    const elementData = barsData(
        data,
        xScaleBarChart(data, width),
        yScaleBarChart(data, barHeightMax),
        barHeightMax,
    )
    const newData = elementData
        .map((d) => {
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
                        fill="#fff"
                        key={`xxxx${d.frequency}`}
                        x={d.x + 2}
                        y={d.y - 5}
                        >
                        {numeral(d.frequency).format('0%')}
                    </text>
                </g>
            )
        })
    return newData
}
export default elements
