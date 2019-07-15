import React from 'react'
import { StoreContext } from '../../StoreContext'
import ChartFrame from '../ChartFrame'

function ForceLayoutChart() {
  return (
    <StoreContext.Consumer>
      {({ state }) => {
        return (
          <div>
            <ChartFrame>
              <text>
                XXXXXXXXX
                {state.chartType}
              </text>
            </ChartFrame>
          </div>
        )
      }}
    </StoreContext.Consumer>

  )
}
export default ForceLayoutChart
