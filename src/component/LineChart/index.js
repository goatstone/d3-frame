import React, { useContext } from 'react'
import * as d3 from 'd3'
import ChartFrame from '../ChartFrame'
import YAxis from './YAxis'
import XAxis from './XAxis'
import Symbols from './Symbols'
import SparkLine from './SparkLine'
import LScale from './l-scale'
import { StoreContext } from '../../StoreContext'
import { ThemeContext } from '../../ThemeContext'

function LineChart() {
  const { cssSheet } = useContext(ThemeContext)
  // 650 x 300 target SVG size
  const width = 650
  const height = 300
  return (
    <StoreContext.Consumer>
      {
        ({ state }) => {
          // date scale function
          const xScale = d3.scaleTime()
            .domain(d3.extent(state.data.line, d => new Date(d.day).setHours(0, 0, 0, 0)))
            .range([0, width])
          // quality scale function
          const yScale = LScale(state.data.line.map(d => d.quality), height, 0)
          return (
            <ChartFrame
              cssClasses={cssSheet}
            >
              <XAxis
                xScale={xScale}
                ticks={state.data.line.length / 2}
                cssClasses={cssSheet}
              />
              <YAxis
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
              <text className={cssSheet.classes.chartText}>
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
