import React from 'react'
import ReactDOM from 'react-dom'
import D3React from './d3-react'
import data from './data'

ReactDOM.render(<D3React
    data={data}
    />, document.getElementById('root'))
