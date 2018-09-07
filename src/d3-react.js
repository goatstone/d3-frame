import React from 'react'

class D3React extends React.Component {
    constructor({
        PieChart, LineChart, BarChart, Control, events, config, data,
    }) {
        super(...Array.from(arguments))

        this.state = {
            data,
            colors: {
                background: config.chart.colors[1].name,
            },
            chartSymbol: config.symbols[1].name,
            chartType: config.chart.types[2].name, // the selected charte
        }
        this.controlEvent = events
        this.PieChart = PieChart
        this.LineChart = LineChart
        this.BarChart = BarChart
        this.EventControl = Control
        this.setEvents()
    }
    componentDidMount() {
        // animate the pie chart on init
        // this.engine()
    }
    getCharts() {
        return {
            bar: <this.BarChart
                data={this.state.data.bar}
                colors={this.state.colors}
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
    engine() {
        const interval = setInterval(() => {
            const rand = Math.floor(Math.random() * 30)
            const data = Object(
                { pie: [2, 3, 4, rand], line: this.state.data.line },
                this.state.data,
            )
            this.setState({ data })
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
