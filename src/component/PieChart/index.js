import React from 'react'
import ChartFrame from '../ChartFrame'
import Labels from './Labels'
import Pies from './Pies'
import './pie-chart-style.scss'
import { StoreContext } from '../../StoreContext'

function PieChart({
  config,
}) {
  const {
    width,
    height,
    margin,
    containerWidth,
    color: { background: backgroundColor },
    color: { foreground: foregroundColor },
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
            background={backgroundColor}
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
              foregroundColor={foregroundColor}
            />
          </ChartFrame>
        )
      }}
    </StoreContext.Consumer>

  )
}
export default PieChart
