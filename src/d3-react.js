import React from 'react'

class D3React extends React.Component {
    constructor({
        PieChart, LineChart, BarChart, Control, events, config, data,
    }) {
        super(...Array.from(arguments))

        this.state = {
            data,
            config,
            colors: {
                background: config.chart.colors[1].name,
            },
            chartSymbol: config.chart.symbols[1].name,
            chartType: config.chart.types[2].name, // the selected charte
        }
        this.controlEvent = events
        this.PieChart = PieChart
        this.LineChart = LineChart
        this.BarChart = BarChart
        this.EventControl = Control
        this.setEvents()
        this.config = config
    }
    componentDidMount() {
        // animate the pie chart on init
        this.engine()
    }
    getCharts() {
        return {
            bar: <this.BarChart
            data={this.state.data.bar}
            config={this.state.config}
            />,
            line: <this.LineChart
                datum={this.state.data.line}
                colors={this.state.colors}
                chartSymbol={this.state.chartSymbol}
            />,
            pie: <this.PieChart
                datum={this.state.data.pie}
                colors={this.state.colors}
            />,
        }
    }
    // setEvents : set state as a result of the events being created: map events to application state
    setEvents() {
        this.controlEvent.on('color', (color) => {
            this.setState({ colors: { background: color } })
        })
        this.controlEvent.on('chartSymbol', (e) => {
            this.setState({ chartSymbol: e })
        })
        this.controlEvent.on('chartType', (e) => {
            this.setState({ chartType: e })
        })
    }
    updateData() {
        const rand = Math.floor(Math.random() * 30)
        return Object.assign(
            {},
            this.state.data,
            { pie: [2, 3, 4, rand] },
        )
    }
    updateConfig() {
        const newConfig = Object.assign(
            {},
            this.state.config.chart,
            { style: { background: 'red' } },
        )
        return newConfig
    }
    engine() {
        const interval = setInterval(() => {
            const colors = ['red', 'yellow', 'gray', 'blue']
            const rn = Math.round(Math.random() * (colors.length - 1))
            const newColor = colors[rn]
            const s = Object.assign(
                {},
                this.state.config.chart.style,
                { background: newColor },
            )
            const c = Object.assign(
                {},
                this.state.config.chart,
                { style: s },
            )
            const config = Object.assign(
                {},
                this.state.config,
                { chart: c },
            )
            this.setState({ config })
        }, 2000)
        setTimeout(() => clearInterval(interval), 30000)
    }
    render() {
        return (
            <section data-id="container">
                {this.getCharts()[this.state.chartType]}
                <this.EventControl
                    colors={this.state.colors}
                    chartSymbol={this.state.chartSymbol}
                    chartType={this.state.chartType}
                />
  </section>)
    }
}

export default D3React
