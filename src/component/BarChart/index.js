import React, { useContext } from 'react'
import Bars from './Bars'
import ChartFrame from '../ChartFrame'
import XAxis from './XAxis'
import YAxis from './YAxis'
import { StoreContext } from '../../StoreContext'
import { ThemeContext } from '../../theme/ThemeContext'

const BarChart = () => {
  const { cssSheet } = useContext(ThemeContext)
  const chartSize = { w: 500, h: 300 } // get this from state
  return (
    <StoreContext.Consumer>
      {
        ({ state }) => (
          <React.Fragment>
            <ChartFrame
              cssClasses={cssSheet}
            >
              <XAxis
                data={state.data.bar}
                cssClasses={cssSheet}
              />
              <YAxis
                data={state.data.bar}
                cssClasses={cssSheet}
              />
              <Bars
                data={state.data.bar}
                cssClasses={cssSheet}
                chartSize={chartSize}
              />
              <text className={cssSheet.classes.chartText}>
                The Frequency of Letters in the English Language
              </text>
            </ChartFrame>
          </React.Fragment>
        )
      }
    </StoreContext.Consumer>
  )
}

export default BarChart
