import React from 'react'
import ReactDOM from 'react-dom'
import EventEmitter from 'events'
const R = require('ramda');
import D3React from './d3-react'

import Hello from './components/hello'
import LineChart from './components/line-chart'
import PieChart from './components/pie-chart'
import Control from './components/control'
import withEvents from './components/hoc/with-events'
import withConfig from './components/hoc/with-config'
import config from './config'
import data from './data'
import withComponent from './components/hoc/with-component'
function withResources(Component, resources) {
        return props => <Component {...resources} {...props}/>;
}

// the main event emitter
const events = new EventEmitter()
// charts
const HelloWrapper = withResources(Hello, {config})
/*
let LineChartWrapper = withEvents(LineChart, events)
LineChartWrapper = withConfig(LineChartWrapper, config)
let PieChartWrapper = withEvents(PieChart, events)
PieChartWrapper = withConfig(PieChartWrapper, config)
// control
let ControlWrapper = withEvents(Control, events)
ControlWrapper = withConfig(ControlWrapper, config)
// the application
let D3ReactWrap = withComponent(D3React, HelloWrapper, 'HelloChart')
D3ReactWrap = withComponent(D3ReactWrap, LineChartWrapper, 'LineChart')
D3ReactWrap = withComponent(D3ReactWrap, PieChartWrapper, 'PieChart')
D3ReactWrap = withComponent(D3ReactWrap, ControlWrapper, 'Control')
D3ReactWrap = withEvents(D3ReactWrap, events)
D3ReactWrap = withConfig(D3ReactWrap, config)
D3ReactWrap = withComponent(D3ReactWrap, data, 'data')
*/
let A = ({AR, BR, CR, height}) => {
    return <div >
        :: {AR} :: {BR} :: {CR} :: {height} ::
    </div>
}
let AWrapped  = withResources(A, {
    height: 3333333333,
    AR: 'ar',
    BR: 'br',
    CR:123,
});
//A = AWrapped
console.log('A', A)
console.log('x', AWrapped)
// WrappedC = A
ReactDOM.render(<div>
                <HelloWrapper />
                <A AR={44443333}></A>
                <AWrapped  />
                </div>, document.getElementById('root'))
// ReactDOM.render(<D3ReactWrap events={events} />, document.getElementById('root'))
