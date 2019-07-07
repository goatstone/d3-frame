import React from 'react'
import Info from './component/Info'
import Control from './component/Control'
import Chart from './component/Chart'
import './container.scss'
import config from './config'
import { StoreContext } from './StoreContext'

function D3React() {
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <React.Fragment>
            <section className="container">
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
          </React.Fragment>
        )
      }}
    </StoreContext.Consumer>
  )
}

export default D3React
