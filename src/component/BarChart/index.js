import React, { useContext } from 'react'
import Bars from './Bars'
import ChartFrame from '../ChartFrame'
import XAxis from './XAxis'
import YAxis from './YAxis'
import { StoreContext } from '../../StoreContext'
import { ThemeContext } from '../../ThemeContext'

const BarChart = () => {
  const { cssSheet } = useContext(ThemeContext)
  const width = 500
  const height = 200
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
                width={width}
                height={height}
                className={cssSheet.classes.BarChart}
              />
            </ChartFrame>
            <h3>The Frequency of Letters in the English Language</h3>
          </React.Fragment>
        )
      }
    </StoreContext.Consumer>
  )
}

export default BarChart
