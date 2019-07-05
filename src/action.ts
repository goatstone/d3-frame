import { StateInterface } from './state'
import { actionTypes, dispatchInterface } from './reducer'

interface ShowInfoInterface {
  (): void
}
interface HideInfoInterface {
  (): void
}
export interface AppActionsInterface {
  showInfo: ShowInfoInterface
  hideInfo: HideInfoInterface
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

  return {
    showInfo,
    hideInfo,
  }
}

export default useAction
