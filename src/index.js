import React from 'react'
import ReactDOM from 'react-dom'
import EventEmitter from 'events'

import D3React from './d3-react'
import BarChart from './component/BarChart/'
import LineChart from './component/LineChart'
import PieChart from './component/PieChart'
import Control from './component/control'
import config from './config'
import data from './data'
import withResources from './component/hoc/with-resources'

// the main event emitter
const events = new EventEmitter()
const LineChartWrapper = withResources(LineChart, { events })
const PieChartWrapper = withResources(PieChart, { events, options: config.options })
const ControlWrapper = withResources(Control, { events, config })
const D3ReactWrap = withResources(D3React, {
    config,
    events,
    data,
    BarChart,
    LineChart: LineChartWrapper,
    PieChart: PieChartWrapper,
    Control: ControlWrapper,
})
ReactDOM.render(<D3ReactWrap />, document.getElementById('root'))
