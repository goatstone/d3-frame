import React from 'react'
import * as d3 from 'd3'
import LScale from '../l-scale'
import './line-chart-style.scss'

function LineChart({
    datum,
    events,
    config,
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

    function chartClick() {
        events.emit(
            'color',
            'green',
        )
    }
    // date scale function
    const convertToEpochSec = date => new Date(date).setHours(0, 0, 0, 0)
    // xScale, yScale
    const xScale = d3.scaleTime()
        .domain(d3.extent(datum, d => convertToEpochSec(d.day)))
        .range([0, width])
    // quality scale function
    const yScale = LScale(datum.map(d => d.quality), barHeightMax, 0)
    // Elements of the chart
    // line pathD
    const sparkLine = d3.line()
        .x(d => xScale(convertToEpochSec(d.day)))
        .y(d => yScale(d.quality))
    const linePath = sparkLine(datum)
    // symbols, data markers
    const arc = d3.symbol()
        .type(d3[chartSymbol])
        .size(100)
    const chartSymbols = datum
        .map(data => ({
            x: xScale(convertToEpochSec(data.day)),
            y: yScale(data.quality),
        }))
        .map(circlePoint => (
            <path
                onMouseOver={(e) => {
                    e.target.style.fill = 'red'
                    e.target.style.cursor = 'hand'
                }}
                onMouseOut={(e) => {
                    e.target.style.fill = 'none'
                }}
                onFocus={(e) => {
                    e.target.style.fill = 'none'
                }}
                onBlur={(e) => {
                    e.target.style.fill = 'none'
                }}
                style={{ transform: `translate(${circlePoint.x}px, ${circlePoint.y}px)` }}
                key={`${circlePoint.x},${circlePoint.y}`}
                d={arc()}
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
        <svg
            width={containerWidth}
            height={height}
            onClick={chartClick}
            data-id="line-chart"
            data-component-type="chart"
            className="main"
        >
            <g>
                <rect fill={backgroundColor} width={containerWidth} height={heightOffset} />
            </g>
            <g style={{ transform: `translate(${margin[3]}px, ${margin[0]}px)` }}>
                <g
                    ref={node => d3.select(node).call(xAxis)}
                    style={{
                        transform: `translateY(${barHeightMax}px)`,
                    }}
                />
                <g ref={node => d3.select(node).call(yAxis)} />
                <g>
                    <path d={linePath} />
                </g>
                <g>
                    {chartSymbols}
                </g>
            </g>
        </svg>
    )
}
export default LineChart
