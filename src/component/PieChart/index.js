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
    const id = 'pie-chart'
    const type = 'chart'

    return (
        <ChartFrame
            width={containerWidth}
            height={height}
            background={backgroundColor}
            margin={margin}
            containerWidth={containerWidth}
            chartId={id}
            // componentType={type}
            >
            <Labels
                data={data}
                chartLeft={chartLeft}
                chartTop={chartTop}
                dataId="pie-chart-labels"
                />
            <Pies
                data={data}
                chartLeft={chartLeft}
                chartTop={chartTop}
                dataId="pie-chart-pies"
                />
        </ChartFrame>
    )
}
export default PieChart
