import * as d3 from 'd3'

const xScaleBarChart = (domain, range) => d3
  .scaleBand()
  .rangeRound(range)
  .padding(0.1)
  .domain(domain)

export default xScaleBarChart
