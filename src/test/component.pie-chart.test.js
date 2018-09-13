import React from 'react'
import ReactDOM from 'react-dom'
import EventEmitter from 'events'
import PieChart from '../component/pie-chart'
import withResources from '../component/hoc/with-resources'
import data from '../data'
import config from '../config'

const events = new EventEmitter()
const PieChartWrapper = withResources(PieChart, {
    events,
    options: config.options,
    datum: data.pie,
    config: config.chart,
})

describe('Pie Chart', () => {
    it(' should  mount', () => {
        const div = document.createElement('div')
        ReactDOM.render(<PieChartWrapper />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})

