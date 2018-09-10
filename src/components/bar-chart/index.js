import React from 'react'
import elementData from './element-data'
import elements from './elements'
import xScaleBarChart from './x-scale'
import yScaleBarChart from './y-scale'

const BarChart = ({ data = [], config }) => {
    const width = config.chart.size.width
    const containerWidth = width + 60
    const height = 300
    const chartLeft = 20
    const chartTop = 30
    const barHeightMax = 200
    const background = config.chart.style.background
    const elementsConfig = elementData(
        data,
        xScaleBarChart(data, width),
        yScaleBarChart(data, barHeightMax),
        barHeightMax,
    )

    return (
            <svg
        width={containerWidth}
        height={height}
        data-id="bar-chart"
        data-component-type="chart"
            >
            <rect
        fill={background}
        width="100%"
        height={height}
            />
            <g style={{ transform: `translate(${chartLeft}px, ${chartTop}px)` }}>
            {elements(elementsConfig)}
        </g>
            </svg>
    )
}

export default BarChart
