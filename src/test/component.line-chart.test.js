import React from 'react'
import ReactDOM from 'react-dom'
import LineChart from '../component/LineChart'
import data from '../data'
import config from '../config'

describe('Line Chart', () => {
  it(' should  mount', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LineChart
      data={data.line}
      config={config.chart}
    />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
