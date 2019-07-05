import React from 'react'
import * as d3 from 'd3'

const XAxis = ({ xScale, ticks, barHeightMax }) => {
    const xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(ticks)

    return (
        <g
            ref={node => d3.select(node).call(xAxis)}
            style={{
                transform: `translateY(${barHeightMax}px)`,
            }}
            />
    )
}

export default XAxis
