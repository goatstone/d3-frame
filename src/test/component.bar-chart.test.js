import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import BarChart from '../component/BarChart'
import { StoreContext } from '../StoreContext'
//     <StoreContext.Provider value={{ state, actions }}>
import { ThemeContext } from '../theme/ThemeContext'

Enzyme.configure({ adapter: new Adapter() })

describe('BarChart', () => {
  test('should mount and have a single SVG element', () => {
    const state = {
      data: { bar: [] },
      chartSize: { w: 0, h: 0 },
    }
    const wrap = Enzyme.mount(
      <ThemeContext.Provider value={{
        cssSheet: { classes: {} },
      }}
      >
        <StoreContext.Provider value={{ state }}>
          <BarChart />
        </StoreContext.Provider>
      </ThemeContext.Provider>,
    )
    expect(wrap.find('svg').length).toBe(1)
  })
})
