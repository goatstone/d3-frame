import React from 'react'
import Bars from './Bars'
import ChartFrame from '../ChartFrame'
import XAxis from './XAxis'
import YAxis from './YAxis'

const BarChart = ({ data = [], config }) => {
    const width = config.width
    const height = config.height
    const containerWidth = width + (config.margin[0] * 2)
    const barHeightMax = height - 120
    const background = config.background
    const margin = config.margin

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
            <XAxis
                data={data}
                width={width}
                height={300}
                />
            <YAxis
                data={data}
                width={width}
                height={barHeightMax}
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
