import React from 'react'
import Info from './component/Info'
import Control from './component/Control'
import Chart from './component/Chart'
import config from './config'
import { StoreContext } from './StoreContext'
import getStyle, { styleTypes } from './get-style'

function D3Frame() {
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <div className={getStyle(state.theme, styleTypes.GENERIC).main()}>
            <section>
              <Chart
                chartConfig={config.chart}
              />
              {
                state.isInfoVisible && <Info onClick={actions.hideInfo} />
              }
            </section>
            <div className="title-area">
              <img src="d3-frame-logo.png" alt="D3 Frame Art" width="45" height="45" />
              <h1>
                <a href="https://github.com/goatstone/d3-frame" target="new">
                  D3Frame
                </a>
              </h1>
              <button
                onClick={actions.showInfo}
                className="material-icons"
                type="button"
                disabled={state.isInfoVisible}
              >
                info
              </button>
            </div>
            <Control />
            <section className="copy-credit">
              <a href="http://goatstone.com" target="new">
                Goatstone &copy; 2019
              </a>
            </section>
          </div>
        )
      }}
    </StoreContext.Consumer>
  )
}

export default D3Frame
