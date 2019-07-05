import React from 'react'
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

export { StoreContext, StoreProvider }
