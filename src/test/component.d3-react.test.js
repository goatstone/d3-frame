import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import D3Frame from '../D3Frame'

Enzyme.configure({ adapter: new Adapter() })

describe('D3 Framework', () => {
  it('renders without crashing', () => {
    Enzyme.mount(<D3Frame
      data
    />)
  })
  it('has certain DOM elements', () => {
    const mounted = Enzyme.mount(<D3Frame
      data
    />)
    expect(mounted.find('section[data-id="container"]').length).toBe(1)
    expect(mounted.find('button[name="info"]').length).toBe(1)
  })
  it('shows the Info element', () => {
    const component = renderer.create(<D3Frame
      data
    />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
