const elementData = (data, xScale, yScale, barHeightMax) => data.map((d) => {
    const yValue = yScale(d[1])
    return {
        label: d[0],
        frequency: d[1],
        x: xScale(d[0]),
        y: barHeightMax - yValue,
        w: xScale.bandwidth(),
        h: yValue,
    }
})
export default elementData
