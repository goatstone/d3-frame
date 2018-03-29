import React from 'react'
import A from './components/a'
import PieChart from './components/pie-chart'
import Control from './components/control'
import './App.css'

class App extends React.Component {
  constructor({
    colorOptions,
    controlEvent,
    datum,
    chartSize,
    chartTypeOptions,
    chartSymbolOptions
  }) {
    super(...Array.from(arguments))
    this.controlEvent = controlEvent
    this.colorOptions = colorOptions
    this.chartTypeOptions = chartTypeOptions
    this.chartSymbolOptions = chartSymbolOptions
    this.datum = datum
    this.chartSize = chartSize
    this.state = {
      colors: {
        background: colorOptions[0].name
      },
      chartSymbol: chartSymbolOptions[1].name,
      chartType: chartTypeOptions[1].name
    }
    this.setEvents()
  }
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
  setCharts() {

  }
  initEvents() {
    setTimeout(() => {
      this.controlEvent.emit('color', this.colorOptions[1].name)
    }, 2000)
  }
  componentDidMount() {
    this.initEvents()
  }
  getChart() {
    const charts = {
      line: <A
        datum={this.datum}
        controlEvent={this.controlEvent}
        width={this.chartSize.width}
        height={this.chartSize.height}
        colors={this.state.colors}
        chartSymbol={this.state.chartSymbol}
        chartType={this.state.chartType}
        colorOptions={this.colorOptions}
        />,
      pie: <PieChart
        datum={this.datum}
        controlEvent={this.controlEvent}
        width={this.chartSize.width}
        height={this.chartSize.height}
        colors={this.state.colors}
        chartSymbol={this.state.chartSymbol}
        chartType={this.state.chartType}
        colorOptions={this.colorOptions}
        />
    }
    return charts[this.state.chartType]
  }
  render() {
    return <section data-id="container">
      {this.getChart()}
      <Control
        controlEvent={this.controlEvent}
        colors={this.state.colors}
        chartSymbol={this.state.chartSymbol}
        chartType={this.state.chartType}
        colorOptions={this.colorOptions}
        chartTypeOptions={this.chartTypeOptions}
        chartSymbolOptions={this.chartSymbolOptions}
        />
    </section>
  }
}

export default App
