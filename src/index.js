import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import D3React from './d3-react'
import datum from './datum'
import config from './config'

ReactDOM.render(<D3React
    colorOptions={config.chart.colors}
    controlConfig={config.control}
    datum={{ line: datum.line, pie: datum.pie }}
    chartSize={config.chart.size}
    chartTypeOptions={config.chart.types}
    chartSymbolOptions={config.symbols}
/>, document.getElementById('root'))
