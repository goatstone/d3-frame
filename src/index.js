import React from 'react'
import ReactDOM from 'react-dom'
import EventEmitter from 'events'
import D3React from './d3-react'
import Hello from './components/hello'
import LineChart from './components/line-chart'
import PieChart from './components/pie-chart'
import Control from './components/control'
import withEvents from './components/hoc/with-events'
import withConfig from './components/hoc/with-config'
import config from './config'
import withCharts from './components/hoc/with-charts'
import withComponent from './components/hoc/with-component'

const evntE = new EventEmitter()

const HelloWrapper = withConfig(Hello, config)

let LineChartWrapper = withEvents(LineChart, evntE)
LineChartWrapper = withConfig(LineChartWrapper, config)

let PieChartWrapper = withEvents(PieChart, evntE)
PieChartWrapper = withConfig(PieChartWrapper, config)

let D3ReactWrap = withCharts(D3React, {
    hello: HelloWrapper,
    line: LineChartWrapper,
    pie: PieChartWrapper,
})
D3ReactWrap = withComponent(D3ReactWrap, HelloWrapper, 'Hello')
D3ReactWrap = withComponent(D3ReactWrap, LineChartWrapper, 'LineChart')
D3ReactWrap = withComponent(D3ReactWrap, PieChartWrapper, 'PieChart')
D3ReactWrap = withComponent(D3ReactWrap, Control, 'Control')

ReactDOM.render(<D3ReactWrap events={evntE} />, document.getElementById('root'))
