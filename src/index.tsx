import React from 'react'
import ReactDOM from 'react-dom'
import D3React from './d3-react'
import ContextA from './ContextA'
import defaultState, { StateInterface } from './state'
import reducer, { dispatchInterface } from './reducer'
import useAction, { AppActionsInterface } from './action'

const StoreContext = React.createContext<any>(defaultState)

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch]: [StateInterface, dispatchInterface] = React
    .useReducer(reducer, defaultState)
  const actions: AppActionsInterface = useAction(state, dispatch)
  console.log(actions)

  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  )
}

ReactDOM.render(
  <StoreProvider>
    <ContextA.Provider value={defaultState}>
      <div>
        {defaultState.isInfoVisible ? 'a' : 'b'}
      </div>
      <D3React />
    </ContextA.Provider>
  </StoreProvider>, document.getElementById('root'),
)
