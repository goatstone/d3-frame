import React from 'react'
import ReactDOM from 'react-dom'
import PieChart from '../component/PieChart'
import data from '../data'

describe('Pie Chart', () => {
  it(' should  mount', () => {
    const div = document.createElement('div')
    ReactDOM.render(<PieChart data={data.bar} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
