import React from 'react'
import * as d3 from 'd3'
import ChartFrame from '../ChartFrame'
import YAxis from './YAxis'
import XAxis from './XAxis'
import Symbols from './Symbols'
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
    const convertToEpochSec = date => new Date(date).setHours(0, 0, 0, 0)

    // date scale function
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

    // Sparkine
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
                    <XAxis
                        xScale={xScale}
                        ticks={data.length / 2}
                        barHeightMax={barHeightMax}
                        />
                    <YAxis
                        yScale={yScale} />
                    <g>
                        <path className="spark-line" d={linePath} />
                    </g>
                    <Symbols
                        xScale={xScale}
                        yScale={yScale}
                        data={data}
                        symbol={chartSymbol}
                        />
                </g>
            </ChartFrame>
            <h3>Quality Level Over Time</h3>
        </div>
    )
}
export default LineChart
