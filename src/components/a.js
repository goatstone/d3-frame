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
    const selectX = data => new Date(data.day).setHours(0, 0, 0, 0)
    const xScale = d3.scaleTime()
        .domain(d3.extent(datum, selectX))
        .range([0, width])
    const selectScaledX = datum => xScale(selectX(datum))

    // quality scale function
    let dataQual = datum.map(d => d.quality)
    const yScale = LScale(dataQual, height, 0)
    const selectScaledY = data => yScale(data) // qualityLevel

    //          elements of the chart
    // line
    const sparkLine = d3.line()
        .x(selectScaledX)
        .y(d => selectScaledY(d.quality))
    const linePath = sparkLine(datum)

    // datum getSVGCircle    
    const circlePoints = datum.map(datum => ({
        x: selectScaledX(datum),
        y: selectScaledY(datum.quality),
    }))

    // circleSVG
    const circleSVG = circlePoints.map(circlePoint => (
        <circle
            cx={circlePoint.x}
            cy={circlePoint.y}
            key={`${circlePoint.x},${circlePoint.y}`}
            r={4}
            />
    ))

    // getAxis xScale datum     yScale datum
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