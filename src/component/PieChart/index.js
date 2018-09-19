import React from 'react'
import * as d3 from 'd3'
import ChartFrame from '../ChartFrame'
import './pie-chart-style.scss'

function PieChart({
    data,
    events,
    config,
    options,
}) {
    const {
        width,
        height,
        barHeightMax,
        margin,
        containerWidth,
        color: { background: backgroundColor },
        color: { foreground: foregroundColor },
        color: { axis: axisColor },
        color: { label: labelColor },
        color: { theme: themeColor },
        chartSymbol = config.symbol,
    } = config
    const heightOffset = height + 60
    const chartLeft = Math.round(width / 2)
    const chartTop = 130
    const pieArcs = d3.pie()(data.map(d => d[1]))
    const arcGenerator = d3.arc()
    const chartRadius = 100

    function chartClick() {
        const rn = Math.round(Math.random() * (options.colors.length - 1))
        events.emit(
            'color',
            options.colors[rn].name,
        )
    }
    // Labels
    const Labels = ({ data }) => {
        let radius = 90
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
                key={`${tD.label}`} >
                {tD.label}
            </text>))
    }
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
    return (
        <div
            data-id="pie-chart"
            data-component-type="chart"
            >
            <ChartFrame
                width={containerWidth}
                height={height}
                background={backgroundColor}
                margin={margin}
                containerWidth={containerWidth}
                onClick={chartClick}
                >
                <g style={{ transform: `translate(${chartLeft - 5}px, ${chartTop + 7}px)` }}>
                    <Labels
                        data={data}
                        />
                </g>
                <g style={{ transform: `translate(${chartLeft}px, ${chartTop}px)` }}>
                    {piePaths.map(da => <path d={da} key={`k-${da}`} />)}
                </g>
            </ChartFrame>
            <h3>The Frequency of Letters in the English Language</h3>
        </div>
    )
}
export default PieChart
