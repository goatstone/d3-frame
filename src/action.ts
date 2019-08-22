import { StateInterface } from './state'
import { actionTypes, dispatchInterface } from './reducer'

interface ShowInfoInterface {
  (): void
}
interface HideInfoInterface {
  (): void
}
interface SetChartTypeInterface {
  (chartType: string) : void
}
interface SetChartSymbolTypeInterface {
  (symbol: string): void
}
interface SetThemeInterface {
  (theme: string): void
}
interface SetIconNodesInterface {
  (node: object[]): void
}
interface SetIsDrawnInterface {
  (isDrawn: boolean): void
}
export interface AppActionsInterface {
  showInfo: ShowInfoInterface
  hideInfo: HideInfoInterface
  setChartType: SetChartTypeInterface
  setChartSymbolType: SetChartSymbolTypeInterface
  setTheme: SetThemeInterface
  setIconNodes: SetIconNodesInterface
  setIsDrawn: SetIsDrawnInterface
}

function useAction(state: StateInterface, dispatch: dispatchInterface)
  : AppActionsInterface {
  function showInfo(): void {
    dispatch({
      type: actionTypes.SHOW_INFO,
    })
  }
  function hideInfo(): void {
    dispatch({ type: actionTypes.HIDE_INFO })
  }
  function setChartType(chartType: string) {
    dispatch({ type: actionTypes.SET_CHART_TYPE, chartType })
  }
  function setChartSymbolType(symbol: string) {
    dispatch({ type: actionTypes.SET_CHART_SYMBOL_TYPE, symbol })
  }
  function setTheme(theme: string) {
    dispatch({ type: actionTypes.SET_THEME, theme })
  }
  function setIconNodes(iconNodes: object[]) {
    dispatch({ type: actionTypes.SET_ICON_NODES, iconNodes })
  }
  function setIsDrawn(isDrawn: boolean) {
    dispatch({ type: actionTypes.SET_IS_DRAWN, isDrawn })
  }
  return {
    showInfo,
    hideInfo,
    setChartType,
    setChartSymbolType,
    setTheme,
    setIconNodes,
    setIsDrawn,
  }
}

export default useAction
