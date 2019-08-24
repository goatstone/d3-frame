import React from 'react'
import * as d3 from 'd3'

const Pies = ({
  data, cssClasses,
}) => {
  const pieArcs = d3.pie()(data.map(d => d[1]))
  const arcGenerator = d3.arc()
  const chartRadius = 100
  const piePaths = pieArcs
    .map((d) => {
      const newValues = {
        innerRadius: 0,
        outerRadius: chartRadius,
      }
      const newD = Object.assign({}, d, newValues)
      return newD
    })
    .map((d) => {
      const ac = arcGenerator(d)
      return ac
    })
  /* react/jsx-wrap-multilines: "off"  */
  return (
    <g
      className={cssClasses.classes.chartPies}
    >
      {piePaths.map(da => (
        <path
          d={da}
          key={`k-${da}`}
        />
      ))}
    </g>
  )
}

export default Pies
