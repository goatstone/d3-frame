import React from 'react'
import elementData from './element-data'
import elements from './elements'
import xScaleBarChart from './x-scale'
import yScaleBarChart from './y-scale'

const BarChart = ({ data = [], config }) => {
    const width = 800
    const height = 300
    const barHeightMax = 200
    const background = config.chart.style.background
    const elementsConfig = elementData(
        data,
        xScaleBarChart(data),
        yScaleBarChart(data, barHeightMax),
        barHeightMax,
    )

    return (
            <svg
        width={width}
        height={height}
        data-id="bar-chart"
        data-component-type="chart"
            >
            <rect
        fill={background}
        width={width}
        height={height}
            />
            <g style={{ transform: 'translate(20px, 20px)' }}>
            {elements(elementsConfig)}
        </g>
            </svg>
    )
}

export default BarChart
