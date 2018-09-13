import * as d3 from 'd3'

const yScaleBarChart = (data, barHeightMax) => d3
      .scaleLinear()
      .rangeRound([0, barHeightMax])
      .domain([0, d3.max(data, d => d[1])])

export default yScaleBarChart
