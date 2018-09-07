import React from 'react'
import * as d3 from 'd3'

const BarChart = ({ datum = [], config, colors = [] }) => {
    const widthOffset = config.chart.size.width + 60
    const heightOffset = config.chart.size.height + 60
    const width =  config.chart.size.width
    
    const x = d3.scaleBand().rangeRound([0, 900]).padding(0.1)

    // generate the data that will be used to generate the elements
    const data2 = [['A', 1.0], ...datum]

    x.domain(data2.map(function(d) { return d[0]; }));

    const elementData = data2.map(function(d) {

        const barMax = 200
        const barHeight = d[1] * barMax
        this.x += 50
        this.y = barMax - barHeight
        console.log(d[0], x(d[0]))
        const r = {
            label:d[0],
            frequency: d,
            x: x(d[0]),
            y: this.y,
            w: 30,
            h: barHeight
        }
        return r
    }, { x: 0, y: 0 })
    // generate the elements
    const elements = elementData
          .map((d, i) => {
              return (
                      <g
                  key={`x${d.label}`}
                      >
                      <rect
                  key={`xx${d.y}`}
                  x={ d.x }
                  y={ d.y }
                  width={d.w}
                  height={ d.h }
                      >
                  </rect>
                  <text
                  key={`xxx${d.x}`}
                  x={d.x}
                  y={d.y - 10}
                      >{d.label} :  {d.frequency} 
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
                fill={'red'}
                width={width}
                height={300}
            />
            <g style={{ transform: 'translate(0px, 20px)' }}>
                {elements}
            </g>
        </svg>
    )
}

export default BarChart
