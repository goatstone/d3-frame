import React from 'react'
import ReactDOM from 'react-dom'
import D3React, { defaultState } from './d3-react'
import ContextA from './ContextA'

import state from './state'

ReactDOM.render(
  <ContextA.Provider value={defaultState}>
    <div>
      {state.isInfoVisible ? 'a' : 'b'}
    </div>
    <D3React />
  </ContextA.Provider>, document.getElementById('root'),
)
