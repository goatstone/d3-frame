import React from 'react'
import EventEmitter from 'events'
import LineChart from './components/line-chart'
import PieChart from './components/pie-chart'
import Hello from './components/hello'
import Control from './components/control'
import withEvents from './components/hoc/with-events'
import withConfig from './components/hoc/with-config'
import datum from './datum'
import config from './config'

const evntE = new EventEmitter()

let EventControl = withEvents(Control, evntE)
EventControl = withConfig(EventControl, config)

let EventPieChart = withEvents(PieChart, evntE)
EventPieChart = withConfig(EventPieChart, config)

let EventLineChart = withEvents(LineChart, evntE)
EventLineChart = withConfig(EventLineChart, config)

const EventHello = withConfig(Hello, config)

class D3React extends React.Component {
    constructor() {
        super(...Array.from(arguments))
        this.state = {
            data: datum,
            colors: {
                background: config.chart.colors[1].name,
            },
            chartSymbol: config.symbols[1].name,
            chartType: config.chart.types[0].name,
        }
        this.controlEvent = evntE
        this.setEvents()
    }
    componentDidMount() {
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
    getChart() {
        const charts = {
            line: <EventLineChart
                datum={this.state.data.line}
                colors={this.state.colors}
                chartSymbol={this.state.chartSymbol}
            />,
            pie: <EventPieChart
                datum={this.state.data.pie}
                colors={this.state.colors}
            />,
            hello: <EventHello datum={this.state.data.line} />,
        }
        return charts[this.state.chartType]
    }
    render() {
        return (
            <section data-id="container">
                {this.getChart()}
                <EventControl
                    colors={this.state.colors}
                    chartSymbol={this.state.chartSymbol}
                    chartType={this.state.chartType}
                />
            </section>)
    }
}

export default D3React
