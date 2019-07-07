import React from 'react'
import Bars from './Bars'
import ChartFrame from '../ChartFrame'
import XAxis from './XAxis'
import YAxis from './YAxis'
import './style.scss'
import { StoreContext } from '../../StoreContext'

function getColors(theme) {
  const color = {
    foreground: 'lightgray',
    background: 'black',
  }
  if (theme === 'RED') {
    color.foreground = 'red'
    color.background = 'darkred'
  } else if (theme === 'GREEN') {
    color.foreground = 'green'
    color.background = 'darkgreen'
  } else if (theme === 'BLUE') {
    color.foreground = 'blue'
    color.background = 'darkblue'
  } else if (theme === 'GRAY') {
    color.foreground = 'lightgray'
    color.background = 'black'
  } else {
    throw new Error('No Color Theme found')
  }
  function background() {
    return color.background
  }
  function foreground() {
    return color.foreground
  }
  return {
    background,
    foreground,
  }
}

const BarChart = ({ config }) => {
  const {
    width,
    height,
    barHeightMax,
    margin,
    containerWidth,
  } = config

  return (
    <StoreContext.Consumer>
      {
        ({ state }) => (
          <div>
            <div
              data-id="bar-chart"
              data-component-type="chart"
            >
              <ChartFrame
                width={containerWidth}
                height={height}
                dataComponentType="chart"
                background={getColors(state.theme).background()}
                margin={margin}
                containerWidth={containerWidth}
              >
                <XAxis
                  data={state.data.bar}
                  width={width}
                  height={300}
                />
                <YAxis
                  data={state.data.bar}
                  width={width}
                  height={barHeightMax}
                />
                <Bars
                  data={state.data.bar}
                  width={width}
                  height={height}
                  barHeightMax={barHeightMax}
                  foregroundColor={getColors(state.theme).foreground()}
                />
              </ChartFrame>
              <h3>The Frequency of Letters in the English Language</h3>
            </div>

          </div>
        )
      }
    </StoreContext.Consumer>
  )
}

export default BarChart
