import React from 'react'
import * as d3 from 'd3'

// just use config as, reduce args

function PieChart({
    datum,
    events,
    config,
}) {
    const width = config.width
    const containerWidth = width + 60 
    const heightOffset = config.height + 60
    const chartLeft = Math.round(containerWidth / 2)
    const chartTop = 130
    const background = config.background
    const pieArcs = d3.pie()(datum)
    const arcGenerator = d3.arc()
    const chartRadius = 100

    function chartClick() {
        events.emit(
            'color',
            'purple'
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
        height={heightOffset}
        onClick={chartClick}
        data-id="pie-chart"
        data-component-type="chart"
            >
            <g>
            <rect
        fill={background}
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
