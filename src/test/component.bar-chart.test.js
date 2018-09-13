import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BarChart from '../component/BarChart/'
import withResources from '../component/hoc/with-resources'
import config from '../config'

Enzyme.configure({ adapter: new Adapter() })

describe('BarChart', () => {
    test('should mount and have a single SVG element', () => {
        const BarChartWrapper = withResources(BarChart, { config: config.chart })
        const data = [
            ['A', 1.0],
            ['B', 0.01492],
            ['C', 0.02782],
            ['D', 0.04253],
            ['E', 0.12702],
            ['F', 0.02288],
            ['G', 0.02015],
            ['H', 0.06094],
            ['I', 0.06966],
            ['J', 0.00153],
        ]
        const wrap = Enzyme.mount(<BarChartWrapper
                                  data={data}
                                  colors={{ background: 'red' }}
        />)
        expect(wrap.find('svg').length).toBe(1)
    })
})
