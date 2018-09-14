import React from 'react'
import barsData from './bars-data'
import xScaleBarChart from './x-scale'
import yScaleBarChart from './y-scale'

const elements = ({
    data, width, height, barHeightMax,
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
                    />
                    <text 
                        fill="#fff"
                        key={`xxxx${d.frequency}`}
                        x={d.x + 2}
                        y={d.y - 5}
                    >
                        {d.frequency}
                    </text>
                </g>
            )
        })
    return newData
}
export default elements