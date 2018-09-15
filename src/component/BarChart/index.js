import React from 'react'
import Bars from './Bars'
import ChartFrame from '../ChartFrame'
import XAxis from './XAxis'
import YAxis from './YAxis'
import './style.scss'

const BarChart = ({ data = [], config }) => {
    const {
        width,
        height,
        barHeightMax,
        margin,
        containerWidth,
        color: { background: backgroundColor },
        color: { foreground: foregroundColor },
        color: { axis: axisColor },
        color: { label: labelColor },
        color: { theme: themeColor },
    } = config

    return (
        <div
            className="main">
            <ChartFrame
                width={containerWidth}
                height={height}
                dataId="bar-chart"
                dataComponentType="chart"
                background={backgroundColor}
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
                    foregroundColor={foregroundColor}
                    />
            </ChartFrame>
            <h3>The Frequency of Letters in the English Language</h3>
        </div>
    )
}

export default BarChart
