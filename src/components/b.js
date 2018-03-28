import React from 'react'
import * as d3 from 'd3'
import LScale from '../l-scale'

const B = props => {

  const datum = props.datum

  const pathData = d3.path()
  pathData.moveTo(12, 12)
  pathData.lineTo(136, 12)
  pathData.closePath()

  let paths = <path key={`path`} d={pathData} />
  const width = 200
  const height = 200
  // date scale function
  const convertToEpochSec = date => new Date(date).setHours(0, 0, 0, 0)

  let els = Object.entries(datum).map((d, i) => <text key={`els${i}`} >{d[0]}</text>)
  const xScale = d3.scaleTime()
    .domain(d3.extent(datum, d => convertToEpochSec(d.day)))
    .range([0, width])

  // quality scale function
  const yScale = LScale(datum.map(d => d.quality), height, 0)

  const circleSVG = datum
    .map(data => ({
      x: xScale(convertToEpochSec(data.day)),
      y: yScale(data.quality),
    }))
    .map(circlePoint => (
      <circle
        onClick={x => console.log(x)}
        cx={circlePoint.x}
        cy={circlePoint.y}
        key={`${circlePoint.x},${circlePoint.y}`}
        r={4}
        />
    ))
  return (
    <svg>
      <text>B</text>
      <g style={{ transform: "translate(100px, 100px)" }}>
        {paths}
        {els}
        {circleSVG}
      </g>
    </svg>
  )
}

export default B