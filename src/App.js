import React from 'react'
import EventEmitter from 'events'
import A from './components/a' // line chart
import PieChart from './components/pie-chart'
import Control from './components/control'
import './App.css'
import withEvents from './components/hoc/with-events'

// evntE : single event emitter
const evntE = new EventEmitter()
const EventControl = withEvents(Control, evntE)

class App extends React.Component {
    constructor({
        colorOptions,
        controlConfig,
        datum,
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
            colors: {
                background: colorOptions[0].name,
            },
            chartSymbol: chartSymbolOptions[1].name,
            chartType: chartTypeOptions[1].name,
        }
        this.controlEvent = evntE
        this.setEvents()

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
            line: <A
                datum={this.datum.line}
                controlEvent={this.controlEvent}
                width={this.chartSize.width}
                height={this.chartSize.height}
                colors={this.state.colors}
                chartSymbol={this.state.chartSymbol}
                colorOptions={this.colorOptions}
                />,
            pie: <PieChart
                datum={this.datum.pie}
                controlEvent={this.controlEvent}
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

export default App
