import React from 'react'
import * as d3 from 'd3'
import LScale from '../l-scale'

const Hello = ({ datum = {}, config }) => {
    const widthOffset = config.chart.size.width + 60
    const heightOffset = config.chart.size.height + 60

    const pathData = d3.path()
    pathData.moveTo(0, 0)
    pathData.lineTo(136, 12)
    pathData.closePath()

    const paths = <path key="path" d={pathData} />
    const width = 200
    const height = 200
    // date scale function
    const convertToEpochSec = date => new Date(date).setHours(0, 0, 0, 0)

    const els = datum.map(d => <text key={`x${d.day}`} >{d.day}</text>)
    const xScale = d3.scaleTime()
        .domain(d3.extent(datum, d => convertToEpochSec(d.day)))
        .range([0, width])

    // quality scale function
    const yScale = LScale(datum.map(d => d.quality), height, 0)

    const circleSVG = datum
        .map(data => ({
            x: xScale(convertToEpochSec(data.day)),
            y: yScale(data.quality),
        }))
        .map(circlePoint => (
            <circle
                onClick={x => `1 ${x}`}
                cx={circlePoint.x}
                cy={circlePoint.y}
                key={`${circlePoint.x},${circlePoint.y}`}
                r={4}
            />
        ))
    return (
        <svg
            width={widthOffset}
            height={heightOffset}
        >
            <rect
                fill="red"
                width={widthOffset}
                height={heightOffset}
            />
            <text>B</text>
            <g style={{ transform: 'translate(20px, 20px)' }}>
                {paths}
                {els}
                {circleSVG}
            </g>
        </svg>
    )
}

export default Hello
