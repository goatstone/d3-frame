import React from 'react'
import ReactDOM from 'react-dom'
import EventEmitter from 'events'
import LineChart from '../components/line-chart'
import withResources from '../components/hoc/with-resources'
import data from '../data'
import config from '../config'

const events = new EventEmitter()
const LineChartWrapper = withResources(LineChart, { events })

describe('Line Chart', () => {
    it(' should  mount', () => {
        const div = document.createElement('div')
        ReactDOM.render(<LineChartWrapper
            datum={data.line}
            config={config.chart}
        />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
