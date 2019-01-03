import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import D3React from '../d3-react'
import data from '../data'

Enzyme.configure({ adapter: new Adapter() })

describe('D3 Framework', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<D3React
            data
            />, div)
        ReactDOM.unmountComponentAtNode(div)
    })
    it('has certain DOM elements', () => {
        const mounted = Enzyme.mount(<D3React
            data
            />)
        expect(mounted.find('section[data-id="container"]').length).toBe(1)
        expect(mounted.find('button[name="info"]').length).toBe(1)
    })
    it('shows the Info element', () => {
        const component = renderer.create(<D3React
            data
            />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
