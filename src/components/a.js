import React from 'react'
import * as d3 from "d3"
import './a.css'
import LScale from '../l-scale'

function A(props) {
    const width = props.width
    const height = props.height
    const datum = props.datum
    const wOff = width + 60
    const hOff = height + 60

    // date scale function
    const convertToEpochSec = date => new Date(date).setHours(0, 0, 0, 0)

    // xScale, yScale
    const xScale = d3.scaleTime()
        .domain(d3.extent(datum, d => convertToEpochSec(d.day)))
        .range([0, width])

    // quality scale function
    const yScale = LScale(datum.map(d => d.quality), height, 0)

    //// Elements of the chart
    // line pathD
    const sparkLine = d3.line()
        .x(d => xScale(convertToEpochSec(d.day)))
        .y(d => yScale(d.quality))
    const linePath = sparkLine(datum)
    // circles chartPoints circleSVG
    const circlePoints = datum.map(data => ({
        x: xScale(convertToEpochSec(data.day)),
        y: yScale(data.quality),
    }))
    const circleSVG = circlePoints.map(circlePoint => (
        <circle
            cx={circlePoint.x}
            cy={circlePoint.y}
            key={`${circlePoint.x},${circlePoint.y}`}
            r={4}
            />
    ))
    // xAxis yAxis
    const xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(datum.length / 2)
    const yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(3)

    return (
        <svg width={wOff} height={hOff}>
            <g>
                <rect fill="gray" x="0" y="0" width={wOff} height={hOff} />
            </g>
            <g style={{ transform: "translate(30px, 30px)" }}>
                <g
                    ref={node => d3.select(node).call(xAxis)}
                    style={{
                        transform: `translateY(${height}px)`,
                    }}
                    />
                <g ref={node => d3.select(node).call(yAxis)} />
                <g>
                    <path d={linePath} />
                </g>
                <g>
                    {circleSVG}
                </g>
            </g>
        </svg>
    )
}
export default A