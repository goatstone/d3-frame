import React from 'react'
import ChartFrame from '../ChartFrame'
import Labels from './Labels'
import Pies from './Pies'
import { StoreContext } from '../../StoreContext'
import getStyle, { styleTypes } from '../../get-style'

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
            background={getStyle(state.theme, styleTypes.GENERIC).background(true)}
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
              foregroundColor={getStyle(state.theme, styleTypes.GENERIC).foreground(true)}
            />
          </ChartFrame>
        )
      }}
    </StoreContext.Consumer>

  )
}
export default PieChart
