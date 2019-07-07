import React from 'react'
import defaultState, { StateInterface } from './state'
import reducer, { dispatchInterface } from './reducer'
import useAction, { AppActionsInterface } from './action'

const StoreContext = React.createContext<any>(defaultState)

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch]: [StateInterface, dispatchInterface] = React
    .useReducer(reducer, defaultState)
  const actions: AppActionsInterface = useAction(state, dispatch)

  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  )
}
const StoreConsumer = StoreContext.Consumer

export { StoreContext, StoreProvider, StoreConsumer }
