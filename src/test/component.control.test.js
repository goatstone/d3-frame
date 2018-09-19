import React from 'react'
import ReactDOM from 'react-dom'
import EventEmitter from 'events'
import config from '../config'
import withResources from '../component/hoc/with-resources'
import Control from '../component/Control'

const events = new EventEmitter()
const ControlWrapper = withResources(Control, { events, config })

describe('Control', () => {
    it(' should  mount', () => {
        const div = document.createElement('div')
        ReactDOM.render(<ControlWrapper
            chartConfig={config.chart}
            chartType="pie"
            options={config.options}
        />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})
