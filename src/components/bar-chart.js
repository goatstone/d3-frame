import React from 'react'
import * as d3 from 'd3'

const BarChart = ({ data = [], config, colors = [] }) => {
    const heightOffset = config.chart.size.height + 60
    const width = config.chart.size.width
    const barHeightMax = 200

    const x = d3
          .scaleBand()
          .rangeRound([0, 900])
          .padding(0.1)
          .domain(data.map(d => d[0]))

    const y = d3
          .scaleLinear()
          .rangeRound([0, barHeightMax])
          .domain([0, d3.max(data, d => d[1])])

    const elementData = data.map((d) => {
        const yValue = y(d[1])
        return {
            label: d[0],
            frequency: d[1],
            x: x(d[0]),
            y: barHeightMax - yValue,
            w: x.bandwidth(),
            h: yValue,
        }
    })
    // generate the elements
    const elements = elementData
          .map((d) => {
              return (
                      <g
                  key={`x${d.label}`}
                      >
                      <rect
                  key={`xx${d.y}`}
                  x={d.x}
                  y={d.y}
                  width={d.w}
                  height={d.h}
                      />
                      <text
                  key={`xxx${d.x}`}
                  x={d.x}
                  y={d.y + d.h + 20}
                      >{d.label}
                  </text>
                      <text
                  key={`xxxx${d.frequency}`}
                  x={d.x}
                  y={d.y + d.h + 35}
                      >
                      {d.frequency}
                  </text>
                      </g>
              )
          })
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
                {elements}
            </g>
        </svg>
    )
}

export default BarChart
