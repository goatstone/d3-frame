import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PieChart from '../component/PieChart'
import data from '../data'
import { ThemeContext } from '../theme/ThemeContext'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('../StoreContext', () => {
  return {
    StoreContext: {
      Consumer: props => {
        return props.children({
          state: {
            data: { bar: [] },
            chartSize: { w: 0, h: 0 },
          },
        })
      },
    },
  }
})

describe('Pie Chart', () => {
  it(' should  mount', () => {
    const wrapper = Enzyme.mount(
      <ThemeContext.Provider value={{
        cssSheet: { classes: {} },
      }}
      >
        <PieChart data={data.bar} />
      </ThemeContext.Provider>,
    )
    expect(wrapper.find('svg').length).toBe(1)
  })
})
