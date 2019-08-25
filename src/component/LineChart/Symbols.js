import React from 'react'
import * as d3 from 'd3'

const Symbols = ({
  data, xScale, yScale, symbol,
}) => {
  const symbolName = `symbol${symbol.slice(0, 1)}${symbol.slice(1).toLowerCase()}`
  const arc = d3.symbol()
    .type(d3[symbolName])
    .size(100)

  const chartSymbols = data
    .map(sData => ({
      x: xScale(new Date(sData.day).setHours(0, 0, 0, 0)),
      y: yScale(sData.quality),
    }))
    .map(circlePoint => (
      <path
        className="chart-symbols"
        style={{ transform: `translate(${circlePoint.x}px, ${circlePoint.y}px)` }}
        key={`${circlePoint.x},${circlePoint.y}`}
        d={arc()}
      />
    ))
  return (
    <g>
      {chartSymbols}
    </g>
  )
}
export default Symbols
