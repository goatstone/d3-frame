import React from 'react'
import ReactDOM from 'react-dom'
import D3React, { ContextA, defaultState } from './d3-react'
import data from './data'

ReactDOM.render(<ContextA.Provider value={defaultState}>
    <D3React
        data={data}
    />
</ContextA.Provider>, document.getElementById('root'))
