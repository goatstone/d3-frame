import React from 'react'
import ReactDOM from 'react-dom'
import Control from '../component/Control'

describe('Control', () => {
  it(' should  mount', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Control />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
