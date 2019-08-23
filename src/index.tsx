import React from 'react'
import ReactDOM from 'react-dom'
import D3Frame from './D3Frame'
import { StoreProvider } from './StoreContext'
import ThemeContext from './ThemeContext'

ReactDOM.render(
  <ThemeContext.Provider value={{ a: 3 }}>
    <StoreProvider>
      <D3Frame />
    </StoreProvider>
  </ThemeContext.Provider>,
  document.getElementById('root'),
)
