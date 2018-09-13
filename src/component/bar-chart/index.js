import React from 'react'
import Bars from './Bars'

const BarChart = ({ data = [], config }) => {
    const width = config.width
    const height = config.height
    const containerWidth = width + (config.margin[0] * 2)
    const chartLeft = config.margin[3]
    const chartTop = config.margin[0]
    const barHeightMax = height - 120
    const background = config.background

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
                <Bars
                    data={data}
                    width={width}
                    height={height}
                    barHeightMax={barHeightMax}
                />
            </g>
        </svg>
    )
}

export default BarChart
