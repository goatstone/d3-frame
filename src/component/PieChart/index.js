import React from 'react'
import ChartFrame from '../ChartFrame'
import Labels from './Labels'
import Pies from './Pies'
import { StoreContext } from '../../StoreContext'
import config from '../../config'

const {
  height,
  width,
  margin,
  containerWidth,
  labelColor,
} = config.chart

function PieChart() {
  const chartLeft = Math.round(width / 2)
  const chartTop = 130
  const id = 'pie-chart'
  return (
    <StoreContext.Consumer>
      {({ state }) => {
        return (
          <ChartFrame
            width={containerWidth}
            height={height}
            margin={margin}
            containerWidth={containerWidth}
            chartId={id}
          >
            <Labels
              data={state.data.bar}
              chartLeft={chartLeft}
              chartTop={chartTop}
              color={labelColor}
            />
            <Pies
              data={state.data.bar}
              chartLeft={chartLeft}
              chartTop={chartTop}
            />
          </ChartFrame>
        )
      }}
    </StoreContext.Consumer>

  )
}
export default PieChart
