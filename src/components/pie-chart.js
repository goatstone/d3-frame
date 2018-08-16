import React from 'react'
import * as d3 from 'd3'

// just use config as, reduce args

function PieChart({
    datum,
    events,
    config,
    colors,
}) {
    const pieArcs = d3.pie()(datum)
    const arcGenerator = d3.arc()
    const widthOffset = config.chart.size.width + 60
    const heightOffset = config.chart.size.height + 60
    function chartClick() {
        events.emit(
            'color',
            config.chart.colors[
                Math.floor(config.chart.colors.length * Math.random())
            ].name,
        )
    }
    const piePaths = pieArcs
        .map((d) => {
            const newValues = {
                innerRadius: 0,
                outerRadius: 100,
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
            width={widthOffset}
            height={heightOffset}
            onClick={chartClick}
            data-id="pie-chart"
            data-component-type="chart"
        >
            <g>
                <rect fill={colors.background} width={widthOffset} height={heightOffset} />
            </g>
            <g style={{ transform: 'translate(225px, 130px)' }}>
                {piePaths.map(da => <path d={da} key={`k-${da}`} />)}
            </g>
        </svg>
    )
}
export default PieChart
