import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider } from '../StoreContext'
import { ThemeProvider } from '../theme/ThemeContext'
import LineChart from '../component/LineChart'

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

describe('Line Chart', () => {
  it(' should  mount', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ThemeProvider>
        <StoreProvider>
          <LineChart />
        </StoreProvider>
      </ThemeProvider>,
      div,
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
