import React from 'react'

class D3React extends React.Component {
    constructor({
        PieChart, LineChart, BarChart, Control, events, config, data,
    }) {
        super(...Array.from(arguments))
        this.state = {
            data,
            chartConfig: config.chart,
            chartType: config.options.types[1].name, // the selected chart
        }
        this.controlEvent = events
        this.PieChart = PieChart
        this.LineChart = LineChart
        this.BarChart = BarChart
        this.EventControl = Control
        this.options = config.options
        this.setEvents()
   }
    componentDidMount() {
        // animate the pie chart on init
        this.engine()
    }
    getCharts() {
        return {
            bar: <this.BarChart
            data={this.state.data.bar}
            config={this.state.chartConfig}
            />,
            line: <this.LineChart
            datum={this.state.data.line}
            config={this.state.chartConfig}
            />,
            pie: <this.PieChart
            datum={this.state.data.pie}
            config={this.state.chartConfig}
            />,
        }
    }
    // setEvents : set state as a result of the events being created: map events to application state
    setEvents() {
        this.controlEvent.on('color', (color) => {
            const chartConfig = Object.assign(
                {},
                this.state.chartConfig,
                { background: color },
            )
            this.setState({ chartConfig })
        })
        this.controlEvent.on('chartSymbol', (e) => {
            const chartConfig = Object.assign(
                {},
                this.state.chartConfig,
                { symbol: e },
            )
            this.setState({ chartConfig })
        })
        this.controlEvent.on('chartType', (e) => {
            this.setState({ chartType: e })
        })
    }
    setColor() {
        const colors = ['red', 'yellow', 'gray', 'blue']
        const rn = Math.round(Math.random() * (colors.length - 1))
        const newColor = colors[rn]
        const chartConfig = Object.assign(
            {},
            this.state.chartConfig,
            { background: newColor },
        )
        this.setState({ chartConfig })
    }
    engine() {
        const interval = setInterval(() => {
            this.setColor()
        }, 2000)
        setTimeout(() => clearInterval(interval), 30000)
    }
    render() {
        return (
                <section data-id="container">
                {this.getCharts()[this.state.chartType]}
                <this.EventControl
            chartConfig={this.state.chartConfig}
            chartType={this.state.chartType}
            options={this.options}
                />
                </section>)
    }
}

export default D3React
