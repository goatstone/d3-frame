import React from 'react'
import A from './components/a'
import B from './components/b'
import Control from './components/control'
import './App.css'

class App extends React.Component {
  constructor({colorOptions, controlEvent, datum, chartSize}) {
    super(colorOptions, controlEvent, datum)
    this.controlEvent = controlEvent
    this.colorOptions = colorOptions
    this.datum = datum
    this.chartSize = chartSize
    this.state = {
      colors: {
        background: 'red'
      }
    }
    this.setEvents()
  }
  setEvents() {
    this.controlEvent.on('color', (color) => {
      this.setState({ colors: { background: color } })
    })
  }
  initEvents() {
    this.controlEvent.emit('color', this.colorOptions[0].name)
    setTimeout(() => {
      this.controlEvent.emit('color', this.colorOptions[1].name)
    }, 2000)
  }
  componentDidMount() {
    this.initEvents()
  }
  render() {
    return <section data-id="container">
      <A
        datum={this.datum}
        controlEvent={this.controlEvent}
        width={this.chartSize.width}
        height={this.chartSize.height}
        colors={this.state.colors}
        colorOptions={this.colorOptions}
        />
      <Control
        controlEvent={this.controlEvent}
        colors={this.state.colors}
        colorOptions={this.colorOptions}
        />
      <B datum={this.datum} />
    </section>
  }
}

export default App
