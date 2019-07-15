import React from 'react'
import ReactDOM from 'react-dom'
import config from '../config'
import Control from '../component/Control'

describe('Control', () => {
  it(' should  mount', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Control
      chartConfig={config.chart}
      chartType="pie"
      options={config.options}
    />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
