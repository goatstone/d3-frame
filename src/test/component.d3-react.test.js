import React from 'react'
import ReactDOM from 'react-dom'
import EventEmitter from 'events'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import D3React from '../d3-react'
import BarChart from '../component/bar-chart'
import LineChart from '../component/line-chart'
import PieChart from '../component/pie-chart'
import Control from '../component/control'
import withResources from '../component/hoc/with-resources'
import config from '../config'
import data from '../data'

Enzyme.configure({ adapter: new Adapter() })

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

describe('D3 Framework', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<D3ReactWrap />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
    it('has certain DOM elements', () => {
        const wrap = Enzyme.mount(<D3ReactWrap />)
        expect(wrap.find('section[data-id="container"]').length).toBe(1)
        expect(wrap.find('button[name="info"]').length).toBe(1)
    })
    it('shows the Info element', () => {
        const component = renderer.create(<D3ReactWrap />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
