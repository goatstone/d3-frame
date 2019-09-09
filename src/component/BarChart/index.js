import React, { useContext } from 'react'
import * as d3 from 'd3'
import Bars from './Bars'
import ChartFrame from '../ChartFrame'
import XAxis from './XAxis'
import YAxis from './YAxis'
import { StoreContext } from '../../StoreContext'
import { ThemeContext } from '../../theme/ThemeContext'
import xScaleBarChart from './x-scale-bar-chart'
import yScaleBarChart from './y-scale-bar-chart'

const BarChart = () => {
  const { cssSheet } = useContext(ThemeContext)
  const { state } = useContext(StoreContext)
  // reuse this scale, pass it down to children
  const topOffset = 30
  const leftOffset = 40 // pixel value that the scales will use
  const bottomOffset = 30
  const rightOffset = 30
  const xScale = xScaleBarChart(
    state.data.bar.map(d => d[0]),
    [leftOffset, state.chartSize.w - rightOffset],
  )
  const yScale = yScaleBarChart(
    [0, d3.max(state.data.bar, d => d[1])],
    [state.chartSize.h - bottomOffset, topOffset],
  )
  return (
    <React.Fragment>
      <ChartFrame
        cssClasses={cssSheet}
      >
        <XAxis
          cssClasses={cssSheet}
          xScale={xScale}
          bottomOffset={yScale(0)}
        />
        <YAxis
          data={state.data.bar}
          cssClasses={cssSheet}
          yScale={yScale}
          leftOffset={leftOffset}
        />
        <Bars
          data={state.data.bar}
          cssClasses={cssSheet}
          xScale={xScale}
          yScale={yScale}
        />
        <text
          transform="translate(40 320)"
          className={cssSheet.classes.chartText}
        >
          The Frequency of Letters in the English Language
        </text>
      </ChartFrame>
    </React.Fragment>
  )
}

export default BarChart
