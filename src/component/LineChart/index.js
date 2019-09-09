import React, { useContext } from 'react'
import * as d3 from 'd3'
import ChartFrame from '../ChartFrame'
import YAxis from './YAxis'
import XAxis from './XAxis'
import Symbols from './Symbols'
import SparkLine from './SparkLine'
import { StoreContext } from '../../StoreContext'
import { ThemeContext } from '../../theme/ThemeContext'

function LineChart() {
  const { cssSheet } = useContext(ThemeContext)
  return (
    <StoreContext.Consumer>
      {
        ({ state }) => {
          // date scale function
          const leftOffset = 30
          const rightOffset = 30
          const xDomain = d3.extent(state.data.line, d => new Date(d.day).setHours(0, 0, 0, 0))
          const xRange = [leftOffset, state.chartSize.w - rightOffset]
          const xScale = d3.scaleTime()
            .domain(xDomain)
            .range(xRange)
          // quality scale function
          const topOffset = 30
          const bottomOffset = 30
          const yDomain = d3.extent(state.data.line.map(d => d.quality))
          const yRange = [state.chartSize.h - bottomOffset, topOffset]
          const yScale = d3.scaleLinear()
            .domain(yDomain)
            .range(yRange)
          return (
            <ChartFrame
              cssClasses={cssSheet}
            >
              <XAxis
                xScale={xScale}
                ticks={state.data.line.length / 2}
                cssClasses={cssSheet}
                bottomOffset={yScale(Math.min(...yDomain))}
              />
              <YAxis
                leftOffset={leftOffset}
                yScale={yScale}
                cssClasses={cssSheet}
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
              <text
                transform="translate(40 320)"
                className={cssSheet.classes.chartText}
              >
                Quality Level Over Time
              </text>
            </ChartFrame>
          )
        }
      }
    </StoreContext.Consumer>
  )
}
export default LineChart
