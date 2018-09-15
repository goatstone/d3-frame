import React from 'react'
import * as d3 from 'd3'
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
    const chartLeft = Math.round(containerWidth / 2)
    const chartTop = 150
    const pieArcs = d3.pie()(data.map(d => d[1]))
    const txtArcs = d3.pie()(data.map(d => [d[1]]))
    const arcGenerator = d3.arc()
    const chartRadius = 100

    function chartClick() {
        const rn = Math.round(Math.random() * (options.colors.length - 1))
        events.emit(
            'color',
            options.colors[rn].name,
        )
    }
    const radius = 165
    const label = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);
    const a3 = txtArcs.map((d, i) => {
        const r = { label: data[i][0], location: label.centroid(d), value: d.value }
        return r
    })

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
            className="main"
            data-id="pie-chart">
            <svg
                width={containerWidth}
                height={height}
                onClick={chartClick}
                data-component-type="chart"
                className="main"
                >
                <g>
                    <rect
                        fill={backgroundColor}
                        width={containerWidth}
                        height={heightOffset}
                        />
                </g>
                <g
                    style={{ transform: `translate(${chartLeft - 5}px, ${chartTop + 5}px)` }}
                    >
                    {
                        a3.map(tD => (<text x={tD.location[0]} y={tD.location[1]} key={`${tD.label}`} >
                            {tD.label}</text>))
                    }
                </g>

                <g
                    style={{ transform: `translate(${chartLeft}px, ${chartTop}px)` }}
                    >
                    {piePaths.map(da => <path d={da} key={`k-${da}`} />)}
                </g>
            </svg>
            <h3>The Frequency of Letters in the English Language</h3>
        </div>
    )
}
export default PieChart
