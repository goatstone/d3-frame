import React from 'react'
import * as d3 from 'd3'

const B = props => {

  const datum = props.datum

  const pathData = d3.path()
  pathData.moveTo(12, 12)
  pathData.lineTo(136, 12)
  pathData.closePath()

  let paths = <path key={`path`} d={pathData} />

  let els = Object.entries(datum).map((d, i) => <text key={`els${i}`} >{d[0]}</text>)
  return (
    <svg>
      <text>B</text>
      <g style={{ transform: "translate(100px, 100px)" }}>
        {paths}
        {els}
      </g>
    </svg>
  )
}

export default B