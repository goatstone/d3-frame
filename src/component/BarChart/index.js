import React from 'react'
import Bars from './Bars'
import ChartFrame from '../ChartFrame'
import XAxis from './XAxis'
import YAxis from './YAxis'
import { StoreContext } from '../../StoreContext'
import config from '../../config'

const {
  height,
  width,
  margin,
  barHeightMax,
  containerWidth,
} = config.chart

const BarChart = () => {
  return (
    <StoreContext.Consumer>
      {
        ({ state }) => (
          <div>
            <div
              data-id="bar-chart"
              data-component-type="chart"
            >
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
                />
              </ChartFrame>
              <h3>The Frequency of Letters in the English Language</h3>
            </div>

          </div>
        )
      }
    </StoreContext.Consumer>
  )
}

export default BarChart
