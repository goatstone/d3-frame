import React from 'react'
import Bars from './Bars'

const BarChart = ({ data = [], config }) => {
    const width = config.width
    const containerWidth = width + 60
    const height = 300
    const chartLeft = 20
    const chartTop = 30
    const barHeightMax = 200
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
