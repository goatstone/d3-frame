import * as d3 from "d3"

// dataQual, rangeStart, rangeEnd ::: selectScaledY 
function LScale(data, rangeStart, rangeEnd) {
    const yScale = d3.scaleLinear()
        .domain(d3.extent(data)) // what is the extent of the data?
        .range([rangeStart, rangeEnd])
    return yScale
}
export default LScale