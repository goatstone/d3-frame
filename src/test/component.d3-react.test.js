import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'

import D3Frame from '../D3Frame'
import { StoreProvider } from '../StoreContext'
import { ThemeProvider } from '../theme/ThemeContext'
import jss from 'jss'

jest.mock("jss", () => {
  return {
    setup: () => 1,
    createStyleSheet: () => {
      return {
        attach: () => { },
        classes: {mainContainer: {}}
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
      </ThemeProvider>
    )
  })
})
