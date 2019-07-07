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
export interface AppActionsInterface {
  showInfo: ShowInfoInterface
  hideInfo: HideInfoInterface
  setChartType: SetChartTypeInterface
  setChartSymbolType: SetChartSymbolTypeInterface
  setTheme: SetThemeInterface
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
  return {
    showInfo,
    hideInfo,
    setChartType,
    setChartSymbolType,
    setTheme,
  }
}

export default useAction
