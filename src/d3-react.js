import React from 'react'
import Info from './component/Info'
import Control from './component/Control'
import Chart from './component/Chart'
import config from './config'
import { StoreContext } from './StoreContext'
import getStyle, { styleTypes } from './get-style'

function D3React() {
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <div className={getStyle(state.theme, styleTypes.GENERIC).main()}>
            <section>
              <Chart
                chartConfig={config.chart}
              />
              <Control />
              <section>
                <a href="https://github.com/goatstone/d3-frame" target="new">
                  D3 Framework
                </a>
                &nbsp;
                <a href="http://goatstone.com" target="new">
                  Goatstone &copy; 2018
                </a>
              </section>
              {
                state.isInfoVisible && <Info onClick={actions.hideInfo} />
              }
            </section>
          </div>
        )
      }}
    </StoreContext.Consumer>
  )
}

export default D3React
