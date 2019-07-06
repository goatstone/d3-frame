/* eslint indent: "off" */
import { StateInterface } from './state'

enum actionTypes {
  SHOW_INFO = 'SHOW_INFO',
  HIDE_INFO = 'HIDE_INFO',
}
export { actionTypes }

export interface ShowInfoInterface {
  type: typeof actionTypes.SHOW_INFO
}
export interface HideInfoInterface {
  type: typeof actionTypes.HIDE_INFO
}
export type AppActionsUnionInterface =
  | ShowInfoInterface
  | HideInfoInterface

export interface dispatchInterface {
  (arg0: AppActionsUnionInterface): void
}
function reducer(state: StateInterface, action: AppActionsUnionInterface): StateInterface {
  switch (action.type) {
    case actionTypes.SHOW_INFO:
      return Object.assign({}, state, { isInfoVisible: true })
    case actionTypes.HIDE_INFO:
      return Object.assign({}, state, { isInfoVisible: false })
    default:
      throw new Error('Error: Action type does not exist')
  }
}
export default reducer
