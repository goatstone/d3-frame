import React from 'react'
import { StoreContext } from '../../StoreContext'
import ChartFrame from '../ChartFrame'

const iconStyle = {
  fill: 'red',
  stroke: 'white',
  transform: 'translate(30px, 130px) scale(3)',
}

function ForceLayoutChart() {
  return (
    <StoreContext.Consumer>
      {({ state }) => {
        return (
          <div>
            <ChartFrame>
              <text
                className="material-icons"
                style={iconStyle}
              >
                face
              </text>
              <text style={{ transform: 'translate(5px, 5px)' }} stroke="red" fill="red">
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
