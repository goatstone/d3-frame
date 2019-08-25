import React from 'react'
import { StoreConsumer } from '../../StoreContext'
import BarChart from '../BarChart'
import LineChart from '../LineChart'
import PieChart from '../PieChart'
import ForceLayoutChart from '../ForceLayoutChart'

function Chart() {
  return (
    <StoreConsumer>
      {({ state }) => {
        return (
          <React.Fragment>
            <BarChart />
            <LineChart
              events
            />
            <PieChart
              events
            />
            <ForceLayoutChart />
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
              <PieChart
                events
              />
            )
            }
            {state.chartType === state.chartTypes.FORCE_LAYOUT && (
              <ForceLayoutChart />
            )}
          </React.Fragment>
        )
      }}
    </StoreConsumer>
  )
}

export default Chart
