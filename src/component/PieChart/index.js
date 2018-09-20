import React from 'react'
import * as d3 from 'd3'
import ChartFrame from '../ChartFrame'
import Labels from './Labels'
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
    const heightOffset = height + 60
    const chartLeft = Math.round(width / 2)
    const chartTop = 130
    const pieArcs = d3.pie()(data.map(d => d[1]))
    const arcGenerator = d3.arc()
    const chartRadius = 100

    const piePaths = pieArcs
        .map((d) => {
            const newValues = {
                innerRadius: 0,
                outerRadius: chartRadius,
            }
            const newD = Object.assign({}, d, newValues)
            return newD
        })
        .map((d) => {
            const ac = arcGenerator(d)
            return ac
        })
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
                <g style={{ transform: `translate(${chartLeft}px, ${chartTop}px)` }}>
                    {piePaths.map(da => <path d={da} key={`k-${da}`} />)}
                </g>
            </ChartFrame>
            <h3>The Frequency of Letters in the English Language</h3>
        </div>
    )
}
export default PieChart
