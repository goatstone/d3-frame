import React from 'react'
import ReactDOM from 'react-dom'
import Chart from '../component/Info'

describe('Chart', () => {
  it(' should  mount', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Chart onClick={() => 1} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
