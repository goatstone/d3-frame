import React, { useContext } from 'react'
import ChartFrame from '../ChartFrame'
import Labels from './Labels'
import Pies from './Pies'
import { StoreContext } from '../../StoreContext'
import config from '../../config'
import { ThemeContext } from '../../ThemeContext'

const {
  width,
} = config.chart

function PieChart() {
  const { cssSheet } = useContext(ThemeContext)
  const chartLeft = Math.round(width / 2)
  const chartTop = 130
  return (
    <StoreContext.Consumer>
      {({ state }) => {
        return (
          <React.Fragment>
            <ChartFrame
              cssClasses={cssSheet}
            >
              <Labels
                data={state.data.bar}
                cssClasses={cssSheet}
              />
              <Pies
                data={state.data.bar}
                chartLeft={chartLeft}
                chartTop={chartTop}
              />
            </ChartFrame>
            <h3>The Frequency of Letters in the English Language</h3>
          </React.Fragment>
        )
      }}
    </StoreContext.Consumer>

  )
}
export default PieChart
