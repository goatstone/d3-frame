import React from 'react'
import datum from './datum'
import A from './components/a'
import B from './components/b'
import Control from './components/control'
import './App.css'
import EventEmitter from 'events'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.controlEvent = new EventEmitter()
    this.state = { h: 100, colors: { background: 'red' } }
    this.colorOptions = [
      { name: 'red', display: 'Red' },
      { name: 'blue', display: 'Blue' },
      { name: 'green', display: 'Green' },
      { name: 'white', display: 'White' },
      { name: 'gray', display: 'Gray' },
    ]
    this.datum = datum
    this.setEvents()
  }
  setEvents() {
    this.controlEvent.on('color', (color) => {
      console.log(color)
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
        height={this.state.h}
        width={400}
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
