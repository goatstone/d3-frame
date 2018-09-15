import React from 'react'
import * as d3 from 'd3'
import './pie-chart-style.scss'

function PieChart({
    datum,
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
    const chartLeft = Math.round(containerWidth / 2)
    const chartTop = 130
    const pieArcs = d3.pie()(datum)
    const arcGenerator = d3.arc()
    const chartRadius = 100

    function chartClick() {
        const rn = Math.round(Math.random() * (options.colors.length - 1))
        events.emit(
            'color',
            options.colors[rn].name,
        )
    }
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
            <svg
        width={containerWidth}
        height={height}
        onClick={chartClick}
        data-id="pie-chart"
        data-component-type="chart"
        className="main"
            >
            <g>
            <rect
        fill={backgroundColor}
        width={containerWidth}
        height={heightOffset}
            />
            </g>
            <g
        style={{ transform: `translate(${chartLeft}px, ${chartTop}px)` }}
            >
            {piePaths.map(da => <path d={da} key={`k-${da}`} />)}
            </g>
            </svg>
    )
}
export default PieChart
