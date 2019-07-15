import React from 'react'
import { StoreConsumer } from '../../StoreContext'
import BarChart from '../BarChart'
import LineChart from '../LineChart'
import PieChart from '../PieChart'

function Chart() {
  return (
    <StoreConsumer>
      {({ state }) => {
        return (
          <div>
            {state.chartType === state.chartTypes.BAR && (
              <BarChart />
            )
            }
            {state.chartType === state.chartTypes.LINE && (
              <LineChart
                events
              />
            )
            }
            {state.chartType === state.chartTypes.PIE && (
              <div>
                <PieChart
                  events
                />
                <h3>The Frequency of Letters in the English Language</h3>
              </div>
            )
            }
          </div>
        )
      }}
    </StoreConsumer>
  )
}

export default Chart
