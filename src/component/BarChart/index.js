import React from 'react'
import * as d3 from 'd3'
import Bars from './Bars'
import ChartFrame from '../ChartFrame'
import xScaleBarChart from './x-scale'
// import yScale from './y-scale'

const BarChart = ({ data = [], config }) => {
    const width = config.width
    const height = config.height
    const containerWidth = width + (config.margin[0] * 2)
    const barHeightMax = height - 120
    const background = config.background
    const margin = config.margin
    
    const xAxis = d3.axisBottom()
        .scale(xScaleBarChart(data, width))
        .ticks(data.length / 2)

    return (
        <ChartFrame
            width={containerWidth}
            height={height}
            dataId="bar-chart"
            dataComponentType="chart"
            background={background}
            margin={margin}
            containerWidth={containerWidth}
            >
            <g
                ref={node => d3.select(node).call(xAxis)}
                style={{
                    transform: `translateY(${config.height - 110}px)`,
                }}
            />

            <Bars
                data={data}
                width={width}
                height={height}
                barHeightMax={barHeightMax}
                />
        </ChartFrame>
    )
}

export default BarChart
