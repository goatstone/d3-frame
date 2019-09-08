import React, { useContext } from 'react'
import Bars from './Bars'
import ChartFrame from '../ChartFrame'
import XAxis from './XAxis'
import YAxis from './YAxis'
import { StoreContext } from '../../StoreContext'
import { ThemeContext } from '../../theme/ThemeContext'
import xScaleBarChart from './x-scale-bar-chart'

const BarChart = () => {
  const { cssSheet } = useContext(ThemeContext)
  const { state } = useContext(StoreContext)
  // reuse this scale, pass it down to children
  const xScale = xScaleBarChart(
    state.data.bar.map(d => d[0]),
    [0, state.chartSize.w],
  )
  return (
    <React.Fragment>
      <ChartFrame
        cssClasses={cssSheet}
      >
        <XAxis
          cssClasses={cssSheet}
          xScale={xScale}
        />
        <YAxis
          data={state.data.bar}
          cssClasses={cssSheet}
        />
        <Bars
          data={state.data.bar}
          cssClasses={cssSheet}
          chartSize={state.chartSize}
        />
        <text className={cssSheet.classes.chartText}>
          The Frequency of Letters in the English Language
        </text>
      </ChartFrame>
    </React.Fragment>
  )
}

export default BarChart
