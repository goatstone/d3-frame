import React from 'react'
import * as d3 from "d3"

function A({
    datum,
    controlEvent,
    height,
    width,
    colors,
    colorOptions
}) {
    const widthOffset = width + 60
    const heightOffset = height + 60
    function chartClick() {
        controlEvent.emit('color',
            colorOptions[
                Math.floor(colorOptions.length * Math.random())
            ].name)
    }
    var pieArcs = d3.pie()(datum)
    var arcGenerator = d3.arc()
    const piePaths = pieArcs
        .map(d => {
            const newValues = {
                innerRadius: 0,
                outerRadius: 100
            }
            const newD = Object.assign({}, d, newValues)
            return newD
        })
        .map(d => {
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
            <g style={{ transform: "translate(130px, 130px)" }}>
                <path d={piePaths[0]} />
                {piePaths.map((da, i) => <path d={da} key={i} />)}
            </g>
        </svg>
    )
}
export default A