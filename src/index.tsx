import React from 'react'
import ReactDOM from 'react-dom'
import D3Frame from './D3Frame'
import { StoreProvider } from './StoreContext'

ReactDOM.render(
  <StoreProvider>
    <D3Frame />
  </StoreProvider>, document.getElementById('root'),
)
