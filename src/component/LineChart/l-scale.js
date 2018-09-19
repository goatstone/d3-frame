import * as d3 from 'd3'

function LScale(data, rangeStart, rangeEnd) {
    const yScale = d3.scaleLinear()
        .domain(d3.extent(data)) // what is the extent of the data?
        .range([rangeStart, rangeEnd])
    return yScale
}
export default LScale
