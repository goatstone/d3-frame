import React from 'react'
import ChartFrame from '../ChartFrame'
import Labels from './Labels'
import Pies from './Pies'
import './pie-chart-style.scss'

function PieChart({
    data,
    config,
}) {
    const {
        width,
        height,
        margin,
        containerWidth,
        color: { background: backgroundColor },
        color: { foreground: foregroundColor },
        color: { label: labelColor },
    } = config
    const chartLeft = Math.round(width / 2)
    const chartTop = 130
    const id = 'pie-chart'

    return (
        <ChartFrame
            width={containerWidth}
            height={height}
            background={backgroundColor}
            margin={margin}
            containerWidth={containerWidth}
            chartId={id}
            >
            <Labels
                data={data}
                chartLeft={chartLeft}
                chartTop={chartTop}
                dataId="pie-chart-labels"
                color={labelColor}
                />
            <Pies
                data={data}
                chartLeft={chartLeft}
                chartTop={chartTop}
                dataId="pie-chart-pies"
                foregroundColor={foregroundColor}
                />
        </ChartFrame>
    )
}
export default PieChart
