import React from 'react'
import EventEmitter from 'events'
import LineChart from './components/line-chart'
import PieChart from './components/pie-chart'
import Control from './components/control'
import './App.css'
import withEvents from './components/hoc/with-events'
import datum from './datum'

const evntE = new EventEmitter()
const EventControl = withEvents(Control, evntE)
const EventPieChart = withEvents(PieChart, evntE)
const EventLineChart = withEvents(LineChart, evntE)

class D3React extends React.Component {
    constructor({
        colorOptions,
        controlConfig,
        chartSize,
        chartTypeOptions,
        chartSymbolOptions,
    }) {
        super(...Array.from(arguments))
        this.controlConfig = controlConfig
        this.colorOptions = colorOptions
        this.chartTypeOptions = chartTypeOptions
        this.chartSymbolOptions = chartSymbolOptions
        this.datum = datum
        this.chartSize = chartSize
        this.state = {
            data: datum,
            colors: {
                background: colorOptions[0].name,
            },
            chartSymbol: chartSymbolOptions[1].name,
            chartType: chartTypeOptions[1].name,
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
    // // setEvents : set state as a result of the events being created: map events to application state
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
                width={this.chartSize.width}
                height={this.chartSize.height}
                colors={this.state.colors}
                chartSymbol={this.state.chartSymbol}
                colorOptions={this.colorOptions}
            />,
            pie: <EventPieChart
                datum={this.state.data.pie}
                width={this.chartSize.width}
                height={this.chartSize.height}
                colors={this.state.colors}
                colorOptions={this.colorOptions}
            />,
        }
        return charts[this.state.chartType]
    }
    render() {
        return (
            <section data-id="container">
                {this.getChart()}
                <EventControl
                    config={this.controlConfig}
                    colors={this.state.colors}
                    chartSymbol={this.state.chartSymbol}
                    chartType={this.state.chartType}
                    colorOptions={this.colorOptions}
                    chartTypeOptions={this.chartTypeOptions}
                    chartSymbolOptions={this.chartSymbolOptions}
                />
            </section>)
    }
}

export default D3React
