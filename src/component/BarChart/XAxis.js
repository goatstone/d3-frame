import React from 'react'
import * as d3 from 'd3'
import xScaleBarChart from './x-scale'

const XAxis = ({ data, width, height }) => {
    const xAxisD3Node = d3.axisBottom()
        .scale(xScaleBarChart(data, width))
        .ticks(data.length / 2)

    return (<g
        ref={node => d3.select(node).call(xAxisD3Node)}
        style={{
            transform: `translate(0, ${height - 110}px)`,
        }}
        />)
}
export default XAxis
