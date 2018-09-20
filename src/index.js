import React from 'react'
import ReactDOM from 'react-dom'
import D3React from './d3-react'
import data from './data'
import withResources from './component/hoc/with-resources'

const D3ReactWrap = withResources(D3React, {
    data,
})
ReactDOM.render(<D3ReactWrap />, document.getElementById('root'))
