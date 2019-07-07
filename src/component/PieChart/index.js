import React from 'react'
import ChartFrame from '../ChartFrame'
import Labels from './Labels'
import Pies from './Pies'
import './pie-chart-style.scss'
import { StoreContext } from '../../StoreContext'
import getColors from '../../getColors'

function PieChart({
  config,
}) {
  const {
    width,
    height,
    margin,
    containerWidth,
    color: { label: labelColor },
  } = config
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
            background={getColors(state.theme).background()}
            margin={margin}
            containerWidth={containerWidth}
            chartId={id}
          >
            <Labels
              data={state.data.bar}
              chartLeft={chartLeft}
              chartTop={chartTop}
              dataId="pie-chart-labels"
              color={labelColor}
            />
            <Pies
              data={state.data.bar}
              chartLeft={chartLeft}
              chartTop={chartTop}
              dataId="pie-chart-pies"
              foregroundColor={getColors(state.theme).foreground()}
            />
          </ChartFrame>
        )
      }}
    </StoreContext.Consumer>

  )
}
export default PieChart
