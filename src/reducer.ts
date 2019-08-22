/* eslint indent: "off" */
import { StateInterface } from './state'

enum actionTypes {
  SHOW_INFO = 'SHOW_INFO',
  HIDE_INFO = 'HIDE_INFO',
  SET_CHART_TYPE = 'SET_CHART_TYPE',
  SET_CHART_SYMBOL_TYPE = 'SET_CHART_SYMBOL_TYPE',
  SET_THEME = 'SET_THEME',
  SET_ICON_NODES = 'SET_ICON_NODES',
  SET_IS_DRAWN = 'SET_IS_DRAWN',
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
  chartType: string
}
export interface setChartSymbolType {
  type: actionTypes.SET_CHART_SYMBOL_TYPE
  symbol: string
}
export interface setThemeInterface {
  type: actionTypes.SET_THEME
  theme: string
}
export interface setIconNodes {
  type: actionTypes.SET_ICON_NODES
  iconNodes: object[]
}
export interface SetIsDrawnInterface {
  type: actionTypes.SET_IS_DRAWN
  isDrawn: boolean
}
export type AppActionsUnionInterface =
  | ShowInfoInterface
  | HideInfoInterface
  | SetChartTypeInterface
  | setChartSymbolType
  | setThemeInterface
  | setIconNodes
  | SetIsDrawnInterface

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
      return Object.assign({}, state, { chartSymbolType: action.symbol })
    case actionTypes.SET_THEME:
      return Object.assign({}, state, { theme: action.theme })
    case actionTypes.SET_ICON_NODES:
      return Object.assign({}, state, {
        iconNodes: {
          nodes: action.iconNodes, isDrawn: false,
        },
      })
    case actionTypes.SET_IS_DRAWN:
      return Object.assign({}, state, {
        iconNodes: {
          isDrawn: action.isDrawn,
          nodes: state.iconNodes,
        },
      })
    default:
      throw new Error('Error: Action type does not exist')
  }
}
export default reducer
