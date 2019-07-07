import React from 'react'
import * as d3 from 'd3'
import ChartFrame from '../ChartFrame'
import YAxis from './YAxis'
import XAxis from './XAxis'
import Symbols from './Symbols'
import SparkLine from './SparkLine'
import LScale from './l-scale'
// import './style.scss'
import { StoreContext } from '../../StoreContext'
// import getColors from '../../getColors'
import getStyle, { styleTypes } from '../../get-style'

function LineChart({
  config,
}) {
  const {
    width,
    height,
    barHeightMax,
    margin,
    containerWidth,
  } = config
  return (
    <StoreContext.Consumer>
      {
        ({ state }) => {
          // date scale function
          const xScale = d3.scaleTime()
            .domain(d3.extent(state.data.line, d => new Date(d.day).setHours(0, 0, 0, 0)))
            .range([0, width])
          // quality scale function
          const yScale = LScale(state.data.line.map(d => d.quality), barHeightMax, 0)
          return (
            <div
              data-id="line-chart"
              className={getStyle(state.theme, styleTypes.GENERIC).main()}
              data-component-type="chart"
            >
              <ChartFrame
                width={containerWidth}
                height={height}
                background={getStyle(state.theme, styleTypes.GENERIC).background(true)}
                margin={margin}
                containerWidth={containerWidth}
                data-component-type="chart"
              >
                <XAxis
                  xScale={xScale}
                  ticks={state.data.line.length / 2}
                  barHeightMax={barHeightMax}
                />
                <YAxis
                  yScale={yScale}
                />
                <SparkLine
                  data={state.data.line}
                  xScale={xScale}
                  yScale={yScale}
                />
                <Symbols
                  xScale={xScale}
                  yScale={yScale}
                  data={state.data.line}
                  symbol={state.chartSymbolType}
                />
              </ChartFrame>
              <h3>Quality Level Over Time</h3>
            </div>
          )
        }
      }
    </StoreContext.Consumer>
  )
}
export default LineChart
