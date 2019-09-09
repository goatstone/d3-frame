import React, { useContext } from 'react'
import ChartFrame from '../ChartFrame'
import Labels from './Labels'
import Pies from './Pies'
import { StoreContext } from '../../StoreContext'
import { ThemeContext } from '../../theme/ThemeContext'

function PieChart() {
  const { cssSheet } = useContext(ThemeContext)
  const topOffest = 40

  return (
    <StoreContext.Consumer>
      {({ state }) => {
        return (
          <ChartFrame
            cssClasses={cssSheet}
          >
            <g
              transform={
                `translate(${state.chartSize.w / 2} ${state.chartSize.h / 2 + topOffest})`
              }
            >
              <Labels
                data={state.data.bar}
                cssClasses={cssSheet}
              />
              <Pies
                data={state.data.bar}
                cssClasses={cssSheet}
              />
              <text
                className={cssSheet.classes.chartText}
                transform="translate(-170 130)"
              >
                The Frequency of Letters in the English Language
              </text>
            </g>
          </ChartFrame>
        )
      }}
    </StoreContext.Consumer>

  )
}
export default PieChart
