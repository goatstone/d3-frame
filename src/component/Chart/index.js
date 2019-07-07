import React from 'react'
import { StoreConsumer } from '../../StoreContext'
import BarChart from '../BarChart'
import LineChart from '../LineChart'
import PieChart from '../PieChart'

function Chart({
  chartConfig,
}) {
  return (
    <StoreConsumer>
      {({ state }) => {
        return (
          <div>
            {state.chartType === state.chartTypes.BAR && (
              <BarChart
                config={chartConfig}
              />
            )
            }
            {state.chartType === state.chartTypes.LINE && (
              <LineChart
                config={chartConfig}
                events
              />
            )
            }
            {state.chartType === state.chartTypes.PIE && (
              <div>
                <PieChart
                  config={chartConfig}
                  events
                  options={chartConfig.options}
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
