import React from 'react'
import ReactDOM from 'react-dom'
import EventEmitter from 'events'
import './index.css'
import App from './App'
import datum from './datum'
import config from './config'

const controlEvent = new EventEmitter()

ReactDOM.render(<App
    colorOptions={config.chart.colors}
    controlConfig={config.control}
    controlEvent={controlEvent}
    datum={{ line: datum.line, pie: datum.pie }}
    chartSize={config.chart.size}
    chartTypeOptions={config.chart.types}
    chartSymbolOptions={config.symbols}
/>, document.getElementById('root'))
