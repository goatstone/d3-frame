import React from 'react'
import ChartFrame from '../ChartFrame'
import Labels from './Labels'
import Pies from './Pies'
import './pie-chart-style.scss'

function PieChart({
    data,
    events,
    config,
    options,
}) {
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
        chartSymbol = config.symbol,
    } = config
    const chartLeft = Math.round(width / 2)
    const chartTop = 130

    return (
        <div
            data-id="pie-chart"
            data-component-type="chart"
            >
            <ChartFrame
                width={containerWidth}
                height={height}
                background={backgroundColor}
                margin={margin}
                containerWidth={containerWidth}
                >
                <Labels
                    data={data}
                    chartLeft={chartLeft}
                    chartTop={chartTop}
                    />
                <Pies
                    data={data}
                    chartLeft={chartLeft}
                    chartTop={chartTop}
                    />
            </ChartFrame>
            <h3>The Frequency of Letters in the English Language</h3>
        </div>
    )
}
export default PieChart
