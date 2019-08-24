import React from 'react'
import * as d3 from 'd3'

let radius = 90
const Text = ({ data }) => {
  const labelData = data.map(function cb(c, i) {
    if (this[i].index > 20) {
      radius = 105 + (this[i].index - 20) * 14
    } else {
      radius = 110
    }
    const label2 = d3.arc()
      .outerRadius(radius)
      .innerRadius(radius)
    const centroid = label2.centroid(this[i])
    const r = { label: c[0], location: centroid, value: this[i].value }
    return r
  }, (d3.pie()(data.map(d => d[1]))))

  return labelData.map(tD => (
    <text
      x={tD.location[0]}
      y={tD.location[1]}
      key={`${tD.label}`}
    >
      {tD.label}
    </text>
  ))
}
const Labels = ({
  data, cssClasses,
}) => (
  <g
    className={cssClasses.classes.chartPiesText}
  >
    <Text
      data={data}
    />
  </g>
)

export default Labels
