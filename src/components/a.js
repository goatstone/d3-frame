import React from 'react'
import * as d3 from "d3"
import './a.css'

function A(props) {
    const width = props.width
    const height = props.height
    const datum = props.datum
    const wOff = width + 60
    const hOff = height + 60

    const selectX = data => new Date(data.day).setHours(0, 0, 0, 0)
    const selectY = data => data.quality

    const xScale = d3.scaleTime()
        .domain(d3.extent(datum, selectX))
        .range([0, width])
    const yScale = d3.scaleLinear()
        .domain(d3.extent(datum, selectY))
        .range([height, 0])

    const xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(datum.length / 2)
    const yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(3)

    const selectScaledX = datum => xScale(selectX(datum))
    const selectScaledY = datum => yScale(selectY(datum))

    const sparkLine = d3.line()
        .x(selectScaledX)
        .y(selectScaledY)

    const linePath = sparkLine(datum)
    const circlePoints = datum.map(datum => ({
        x: selectScaledX(datum),
        y: selectScaledY(datum),
    }))

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
                    {circlePoints.map(circlePoint => (
                        <circle
                            cx={circlePoint.x}
                            cy={circlePoint.y}
                            key={`${circlePoint.x},${circlePoint.y}`}
                            r={4}
                            />
                    ))}
                </g>
            </g>
        </svg>
    )
}
export default A