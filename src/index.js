import React from 'react'
import ReactDOM from 'react-dom'
import EventEmitter from 'events'
import D3React from './d3-react'
import Hello from './components/hello'
import LineChart from './components/line-chart'
import PieChart from './components/pie-chart'
import withEvents from './components/hoc/with-events'
import withConfig from './components/hoc/with-config'
import config from './config'
import withCharts from './components/hoc/with-charts'

const evntE = new EventEmitter()

const HelloWrapper = withConfig(Hello, config)

let LineChartWrapper = withEvents(LineChart, evntE)
LineChartWrapper = withConfig(LineChartWrapper, config)

let PieChartWrapper = withEvents(PieChart, evntE)
PieChartWrapper = withConfig(PieChartWrapper, config)

const D3ReactWrap = withCharts(D3React, {
    hello: HelloWrapper,
    line: LineChartWrapper,
    pie: PieChartWrapper,
})

ReactDOM.render(<D3ReactWrap events={evntE} />, document.getElementById('root'))
