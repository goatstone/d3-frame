import React from 'react'
import elementData from './element-data'
import elements from './elements'
import xScaleBarChart from './x-scale'
import yScaleBarChart from './y-scale'

const BarChart = ({ data = [], config, colors = {} }) => {
    const heightOffset = config.chart.size.height + 60
    const width = config.chart.size.width
    const barHeightMax = 200

    const elementConfig = elementData(
        data,
        xScaleBarChart(data),
        yScaleBarChart(data, barHeightMax),
        barHeightMax,
    )

    return (
        <svg
            width={width}
            height={heightOffset}
            data-id="bar-chart"
            data-component-type="chart"
        >
            <rect
        fill={colors.background}
                width={width}
                height={300}
            />
            <g style={{ transform: 'translate(20px, 20px)' }}>
                {elements(elementConfig)}
            </g>
        </svg>
    )
}

export default BarChart
