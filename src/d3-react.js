import React from 'react'
import Control from './components/control'
import withEvents from './components/hoc/with-events'
import withConfig from './components/hoc/with-config'
import datum from './datum'
import config from './config'

class D3React extends React.Component {
    constructor({ charts, events }) {
        super(...Array.from(arguments))
        this.state = {
            data: datum,
            colors: {
                background: config.chart.colors[1].name,
            },
            chartSymbol: config.symbols[1].name,
            chartType: config.chart.types[0].name,
        }
        this.controlEvent = events
        this.chartComps = charts
        // TODO use an HOC
        const EventControl = withEvents(Control, events)
        this.EventControl = withConfig(EventControl, config)
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
    getCharts() {
        return {
            hello: <this.chartComps.hello
                datum={this.state.data.line}
            />,
            line: <this.chartComps.line
                datum={this.state.data.line}
                colors={this.state.colors}
                chartSymbol={this.state.chartSymbol}
            />,
            pie: <this.chartComps.pie
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
