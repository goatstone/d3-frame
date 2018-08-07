import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import datum from './datum'
import config from './config'

ReactDOM.render(<App
    colorOptions={config.chart.colors}
    controlConfig={config.control}
    datum={{ line: datum.line, pie: datum.pie }}
    chartSize={config.chart.size}
    chartTypeOptions={config.chart.types}
    chartSymbolOptions={config.symbols}
/>, document.getElementById('root'))
