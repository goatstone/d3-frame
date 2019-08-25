import React from 'react'
import ReactDOM from 'react-dom'
import D3Frame from './D3Frame'
import { StoreProvider } from './StoreContext'
import { ThemeProvider } from './theme/ThemeContext'

ReactDOM.render(
  <ThemeProvider>
    <StoreProvider>
      <D3Frame />
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('root'),
)
