import React from 'react'
import './chart-frame-style.scss'

const ChartFrame = ({
    children,
    width,
    height,
    background,
    margin,
    containerWidth,
    chartId,
}) => {
    const chartLeft = margin[3]
    const chartTop = margin[0]
    return (<svg
        className="main"
        width={containerWidth}
        height={height}
        data-id="chart-frame"
        data-component-type="container"
        data-chart-id={chartId}
    >
        <rect
            fill={background}
            width="100%"
            height={height}
            data-id="chart-frame-background"
        />
        <g style={{ transform: `translate(${chartLeft}px, ${chartTop}px)` }}>
            {children}
        </g>
            </svg>)
}

export default ChartFrame
