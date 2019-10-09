import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Control from '../component/Control'
import { ThemeContext } from '../theme/ThemeContext'

Enzyme.configure({ adapter: new Adapter() })

const mockSetChartType = jest.fn()
const mockSetChartSymbolType = jest.fn()
jest.mock('../StoreContext', () => {
  return {
    StoreContext: {
      Consumer: props => {
        return props.children({
          actions: {
            setChartType: mockSetChartType,
            setChartSymbolType: mockSetChartSymbolType,
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
  // <ThemeContext.Provider value={{ themeName, setThemeName, cssSheet }}>
  it('should use ThemeContext and call function setThemeName on click', () => {
    const mockFn = jest.fn()
    const wrapper = Enzyme.mount(
      <ThemeContext.Provider value={{
        themeName: 'XXX',
        setThemeName: mockFn,
        cssSheet: { classes: { controlColor: 'XXX' } },
      }}
      >
        <Control />
      </ThemeContext.Provider>
      ,
    )
    wrapper.find('[value="red"]').at(0).simulate('click')
    expect(mockFn.mock.calls.length).toBe(1)
  })
  it(' should  mount and have certain text', () => {
    const el = Enzyme.mount(
      <ThemeContext.Provider value={{
        themeName: 'XXX',
        setThemeName: () => (1),
        cssSheet: { classes: { controlColor: 'XXX' } },
      }}
      >
        <Control />
      </ThemeContext.Provider>,
    )
    expect(el.text(/bar/)).toBeTruthy()
  })
  it(' should  call actions provided', () => {
    const wrapper = Enzyme.mount(
      <ThemeContext.Provider value={{
        themeName: 'XXX',
        setThemeName: () => (1),
        cssSheet: { classes: { controlColor: 'XXX' } },
      }}
      >
        <Control />
      </ThemeContext.Provider>,
    )
    wrapper.find('button[value="BAR"]').at(0).simulate('click') // select a chart type button
    expect(mockSetChartType.mock.calls.length).toBe(1)
  })
})
