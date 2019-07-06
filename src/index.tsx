import React from 'react'
import ReactDOM from 'react-dom'
import D3React from './d3-react'
import ContextA from './ContextA'
import { StoreProvider } from './StoreContext'
import defaultState from './state'

ReactDOM.render(
  <StoreProvider>
    <ContextA.Provider value={defaultState}>
      <D3React />
    </ContextA.Provider>
  </StoreProvider>, document.getElementById('root'),
)
