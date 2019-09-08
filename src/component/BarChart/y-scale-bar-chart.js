import * as d3 from 'd3'

const yScaleBarChart = (domain, range) => d3
  .scaleLinear()
  .rangeRound(range)
  .domain(domain)

export default yScaleBarChart
