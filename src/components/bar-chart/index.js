import React from 'react'
import * as d3 from 'd3'
import elementData from './element-data'
import elements from './elements'

const BarChart = ({ data = [], config, colors = [] }) => {
    const heightOffset = config.chart.size.height + 60
    const width = config.chart.size.width
    const barHeightMax = 200

    // bar-chart-x-scale barChartXScale()
    // const xScale = barChartXScale()
    const xScale = d3
          .scaleBand()
          .rangeRound([0, 900])
          .padding(0.1)
          .domain(data.map(d => d[0]))

    const yScale = d3
          .scaleLinear()
          .rangeRound([0, barHeightMax])
          .domain([0, d3.max(data, d => d[1])])

    const elData = elementData(data, xScale, yScale, barHeightMax)

    return (
        <svg
            width={width}
            height={heightOffset}
            data-id="bar-chart"
            data-component-type="chart"
        >
            <rect
        fill={colors.background}
                width={width}
                height={300}
            />
            <g style={{ transform: 'translate(20px, 20px)' }}>
                {elements(elData)}
            </g>
        </svg>
    )
}

export default BarChart
