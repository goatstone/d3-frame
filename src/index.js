import React from 'react'
import ReactDOM from 'react-dom'
import D3React, { ContextA, defaultState } from './d3-react'

ReactDOM.render(<ContextA.Provider value={defaultState}>
    <D3React />
</ContextA.Provider>, document.getElementById('root'))
