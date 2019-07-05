import React from 'react'
import ReactDOM from 'react-dom'
import D3React, { ContextA, defaultState } from './d3-react'
import state from './state'

ReactDOM.render(<ContextA.Provider value={defaultState}>
    <div>
        abc
        {state.isInfoVisible ? 'a' : 'b'}
    </div>
    <D3React />
</ContextA.Provider>, document.getElementById('root'))
