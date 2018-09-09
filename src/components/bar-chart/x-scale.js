import * as d3 from 'd3'

const xScaleBarChart = data => d3
      .scaleBand()
      .rangeRound([0, 900])
      .padding(0.1)
      .domain(data.map(d => d[0]))

export default xScaleBarChart
