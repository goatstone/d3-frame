import React from 'react'
import ReactDOM from 'react-dom'
import D3React from './d3-react'
import { StoreProvider } from './StoreContext'

ReactDOM.render(
  <StoreProvider>
    <D3React />
  </StoreProvider>, document.getElementById('root'),
)
