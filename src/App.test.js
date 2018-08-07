import React from 'react'
import ReactDOM from 'react-dom'
import D3React from './d3-react'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<D3React />, div)
    ReactDOM.unmountComponentAtNode(div)
})
