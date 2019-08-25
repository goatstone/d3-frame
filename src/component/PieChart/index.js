import React, { useContext } from 'react'
import ChartFrame from '../ChartFrame'
import Labels from './Labels'
import Pies from './Pies'
import { StoreContext } from '../../StoreContext'
import { ThemeContext } from '../../ThemeContext'

function PieChart() {
  const { cssSheet } = useContext(ThemeContext)

  return (
    <StoreContext.Consumer>
      {({ state }) => {
        return (
          <ChartFrame
            cssClasses={cssSheet}
          >
            <Labels
              data={state.data.bar}
              cssClasses={cssSheet}
            />
            <Pies
              data={state.data.bar}
              cssClasses={cssSheet}
            />
            <text className={cssSheet.classes.chartText}>
              The Frequency of Letters in the English Language
            </text>
          </ChartFrame>
        )
      }}
    </StoreContext.Consumer>

  )
}
export default PieChart
