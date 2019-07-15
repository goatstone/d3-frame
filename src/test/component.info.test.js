import React from 'react'
import ReactDOM from 'react-dom'
import Info from '../component/Info'

describe('Info', () => {
  it(' should  mount', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Info onClick={() => 1} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
