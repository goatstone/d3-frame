import React from 'react'
import Info from './component/Info'
import Control from './component/Control'
import Chart from './component/Chart'
import TitleArea from './component/TitleArea'
import CopyCredit from './component/CopyCredit'
import { StoreContext } from './StoreContext'
import getStyle, { styleTypes } from './get-style'

function D3Frame() {
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <div className={getStyle(state.theme, styleTypes.GENERIC).main()}>
            <Chart />
            <TitleArea />
            <Control />
            <CopyCredit />
            {
              state.isInfoVisible && <Info onClick={actions.hideInfo} />
            }
          </div>
        )
      }}
    </StoreContext.Consumer>
  )
}

export default D3Frame
