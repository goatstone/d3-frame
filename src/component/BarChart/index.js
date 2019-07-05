import React from 'react'
import ContextA from '../../ContextA'
import Bars from './Bars'
import ChartFrame from '../ChartFrame'
import XAxis from './XAxis'
import YAxis from './YAxis'
import './style.scss'

const BarChart = ({ config }) => {
  const {
    width,
    height,
    barHeightMax,
    margin,
    containerWidth,
    color: { background: backgroundColor },
    color: { foreground: foregroundColor },
  } = config

  return (
    <ContextA.Consumer>
      {
        ({ data }) => (
          <div>
            <div
              data-id="bar-chart"
              data-component-type="chart"
            >
              <ChartFrame
                width={containerWidth}
                height={height}
                dataComponentType="chart"
                background={backgroundColor}
                margin={margin}
                containerWidth={containerWidth}
              >
                <XAxis
                  data={data.bar}
                  width={width}
                  height={300}
                />
                <YAxis
                  data={data.bar}
                  width={width}
                  height={barHeightMax}
                />
                <Bars
                  data={data.bar}
                  width={width}
                  height={height}
                  barHeightMax={barHeightMax}
                  foregroundColor={foregroundColor}
                />
              </ChartFrame>
              <h3>The Frequency of Letters in the English Language</h3>
            </div>

          </div>
        )
      }
    </ContextA.Consumer>
  )
}

export default BarChart
