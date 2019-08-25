import React, { useContext } from 'react'
import Info from './component/Info'
import Control from './component/Control'
import Chart from './component/Chart'
import TitleArea from './component/TitleArea'
import { StoreContext } from './StoreContext'
import { ThemeContext } from './theme/ThemeContext'

function D3Frame() {
  const { cssSheet } = useContext(ThemeContext)
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <div className={cssSheet.classes.mainContainer}>
            <Chart />
            <TitleArea />
            <Control />
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
