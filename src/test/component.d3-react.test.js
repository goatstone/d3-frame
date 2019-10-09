import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
/* eslint-disable-next-line */
import jss from 'jss'
import D3Frame from '../D3Frame'
import { StoreProvider } from '../StoreContext'
import { ThemeProvider } from '../theme/ThemeContext'

jest.mock('jss', () => {
  return {
    setup: () => 1,
    createStyleSheet: () => {
      return {
        attach: () => { },
        classes: { mainContainer: {} },
      }
    },
  }
})

Enzyme.configure({ adapter: new Adapter() })

describe('D3 Framework', () => {
  it('renders without crashing', () => {
    Enzyme.mount(
      <ThemeProvider>
        <StoreProvider>
          <D3Frame />
        </StoreProvider>
      </ThemeProvider>,
    )
  })
})
