import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import D3React from './d3-react'
import config from './config'

ReactDOM.render(<D3React
    config={config}
/>, document.getElementById('root'))
