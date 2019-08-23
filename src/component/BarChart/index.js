import React, { useContext } from 'react'
import Bars from './Bars'
import ChartFrame from '../ChartFrame'
import XAxis from './XAxis'
import YAxis from './YAxis'
import { StoreContext } from '../../StoreContext'
import { ThemeContext } from '../../ThemeContext'
import config from '../../config'

const {
  height,
  width,
  margin,
  barHeightMax,
  containerWidth,
} = config.chart

const BarChart = () => {
  const { cssSheet } = useContext(ThemeContext)
  return (
    <StoreContext.Consumer>
      {
        ({ state }) => (
          <React.Fragment>
            <ChartFrame
              width={containerWidth}
              height={height}
              dataComponentType="chart"
              margin={margin}
              containerWidth={containerWidth}
            >
              <XAxis
                data={state.data.bar}
                width={width}
                height={300}
              />
              <YAxis
                data={state.data.bar}
                width={width}
                height={barHeightMax}
              />
              <Bars
                data={state.data.bar}
                width={width}
                height={height}
                barHeightMax={barHeightMax}
                className={cssSheet.classes.mainContainer}
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
