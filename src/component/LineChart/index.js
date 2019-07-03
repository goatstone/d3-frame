import React from 'react'
import * as d3 from 'd3'
import { ContextA } from '../../d3-react'
import ChartFrame from '../ChartFrame'
import YAxis from './YAxis'
import XAxis from './XAxis'
import Symbols from './Symbols'
import SparkLine from './SparkLine'
import LScale from './l-scale'
import './style.scss'

function LineChart({
    config,
}) {
    const {
        width,
        height,
        barHeightMax,
        margin,
        containerWidth,
        color: { background: backgroundColor },
        chartSymbol = config.symbol,
    } = config
    return (
        <ContextA.Consumer>{
            ({ data }) => {
                // date scale function
                const xScale = d3.scaleTime()
                    .domain(d3.extent(data, d => new Date(d.day).setHours(0, 0, 0, 0)))
                    .range([0, width])
                // quality scale function
                const yScale = LScale(data.line.map(d => d.quality), barHeightMax, 0)
                return (
                    <div
                        data-id="line-chart"
                        className="line-chart"
                        data-component-type="chart"
                    >
                        xxxx
                    <ChartFrame
                            width={containerWidth}
                            height={height}
                            background={backgroundColor}
                            margin={margin}
                            containerWidth={containerWidth}
                            data-component-type="chart"
                        >
                            <XAxis
                                xScale={xScale}
                                ticks={data.length / 2}
                                barHeightMax={barHeightMax}
                            />
                            <YAxis
                                yScale={yScale}
                            />
                            <SparkLine
                                data={data}
                                xScale={xScale}
                                yScale={yScale}
                            />
                            <Symbols
                                xScale={xScale}
                                yScale={yScale}
                                data={data}
                                symbol={chartSymbol}
                            />
                        </ChartFrame>
                        <h3>Quality Level Over Time</h3>
                    </div>
                )
            }
        }
        </ContextA.Consumer>
    )
}
export default LineChart
