import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Control from '../component/Control'

Enzyme.configure({ adapter: new Adapter() })

const mockCb = jest.fn()
jest.mock('../StoreContext', () => {
  return {
    StoreContext: {
      Consumer: props => {
        return props.children({
          actions: {
            setChartType: mockCb,
            setChartSymbolType: mockCb,
          },
          state: {
            chartType: 'LINE',
            chartTypes: {
              BAR: 'BAR',
              LINE: 'LINE',
              PIE: 'PIE',
              FORCE_LAYOUT: 'FORCE_LAYOUT',
            },
            chartSymbolType: 'CIRCLE',
            classes: { controlColor: '' },
            chartSymbolTypes: {
              CIRCLE: 'CIRCLE',
              SQUARE: 'SQUARE',
              TRIANGLE: 'TRIANGLE',
            },
          },
        })
      },
    },
  }
})

describe('Control', () => {
  it(' should  mount and have certain text', () => {
    const el = Enzyme.mount(
      <Control />,
    )
    expect(el.text(/bar/)).toBeTruthy()
  })
  it(' should  call actions provided', () => {
    const wrapper = Enzyme.mount(
      <Control />,
    )
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(0).simulate('click')
    expect(mockCb.mock.calls.length).toBe(2)
  })
})
