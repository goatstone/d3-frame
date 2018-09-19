import React from 'react'
import * as d3 from 'd3'
import ChartFrame from '../ChartFrame'
import YAxis from './YAxis'
import LScale from './l-scale'
import './style.scss'

function LineChart({
    data,
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
    // date scale function
    const convertToEpochSec = date => new Date(date).setHours(0, 0, 0, 0)
    // xScale, yScale
    const xScale = d3.scaleTime()
        .domain(d3.extent(data, d => convertToEpochSec(d.day)))
        .range([0, width])
    // quality scale function
    const yScale = LScale(data.map(d => d.quality), barHeightMax, 0)
    // Elements of the chart
    // line pathD
    const sparkLine = d3.line()
        .x(d => xScale(convertToEpochSec(d.day)))
        .y(d => yScale(d.quality))
    const linePath = sparkLine(data)
    // symbols, data markers
    const arc = d3.symbol()
        .type(d3[chartSymbol])
        .size(100)
    const chartSymbols = data
        .map(sData => ({
            x: xScale(convertToEpochSec(sData.day)),
            y: yScale(sData.quality),
        }))
        .map(circlePoint => (
            <path
                data-id="line-chart-symbol"
                style={{ transform: `translate(${circlePoint.x}px, ${circlePoint.y}px)` }}
                key={`${circlePoint.x},${circlePoint.y}`}
                d={arc()}
                />
        ))
    // XAxis YAxis Sparkine Symbols
    // xAxis yAxis

    // XAxis
    const xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(data.length / 2)

    return (
        <div
            data-id="line-chart"
            className="line-chart"
            data-component-type="chart"
            >
            <ChartFrame
                width={containerWidth}
                height={height}
                background={backgroundColor}
                margin={margin}
                containerWidth={containerWidth}
                data-component-type="chart"
                >
                <g>
                    <g
                        ref={node => d3.select(node).call(xAxis)}
                        style={{
                            transform: `translateY(${barHeightMax}px)`,
                        }}
                        />
                    <g>
                        <YAxis
                            yScale={yScale} />
                        <path className="spark-line" d={linePath} />
                    </g>
                    <g>
                        {chartSymbols}
                    </g>
                </g>
            </ChartFrame>
            <h3>Quality Level Over Time</h3>
        </div>
    )
}
export default LineChart
