import React from 'react'
import * as d3 from 'd3'

function PieChart({
    datum,
    controlEvent,
    height,
    width,
    colors,
    colorOptions,
}) {
    const pieArcs = d3.pie()(datum)
    const arcGenerator = d3.arc()
    const widthOffset = width + 60
    const heightOffset = height + 60
    function chartClick() {
        controlEvent.emit(
            'color',
            colorOptions[
                Math.floor(colorOptions.length * Math.random())
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
        >
            <g>
                <rect fill={colors.background} width={widthOffset} height={heightOffset} />
            </g>
            <g style={{ transform: 'translate(130px, 130px)' }}>
                {piePaths.map(da => <path d={da} key={`k-${da}`} />)}
            </g>
        </svg>
    )
}
export default PieChart
