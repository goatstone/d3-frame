/* eslint indent: "off" */
import { StateInterface } from './state'

enum actionTypes {
  SHOW_INFO = 'SHOW_INFO',
  HIDE_INFO = 'HIDE_INFO',
  SET_CHART_TYPE = 'SET_CHART_TYPE',
  SET_CHART_SYMBOL_TYPE = 'SET_CHART_SYMBOL_TYPE'
}
export { actionTypes }

export interface ShowInfoInterface {
  type: typeof actionTypes.SHOW_INFO
}
export interface HideInfoInterface {
  type: typeof actionTypes.HIDE_INFO
}
export interface SetChartTypeInterface {
  type: actionTypes.SET_CHART_TYPE
  chartType: string;
}
export interface setChartSymbolType {
  type: actionTypes.SET_CHART_SYMBOL_TYPE
  symbol: string;
}

export type AppActionsUnionInterface =
  | ShowInfoInterface
  | HideInfoInterface
  | SetChartTypeInterface
  | setChartSymbolType

export interface dispatchInterface {
  (arg0: AppActionsUnionInterface): void
}
function reducer(state: StateInterface, action: AppActionsUnionInterface): StateInterface {
  switch (action.type) {
    case actionTypes.SHOW_INFO:
      return Object.assign({}, state, { isInfoVisible: true })
    case actionTypes.HIDE_INFO:
      return Object.assign({}, state, { isInfoVisible: false })
    case actionTypes.SET_CHART_TYPE:
      return Object.assign({}, state, { chartType: action.chartType })
    case actionTypes.SET_CHART_SYMBOL_TYPE:
      return Object.assign({}, state, { symbol: action.symbol })
    default:
      throw new Error('Error: Action type does not exist')
  }
}
export default reducer
