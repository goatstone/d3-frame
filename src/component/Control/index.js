import React from 'react'
import { StoreContext } from '../../StoreContext'
import getStyle, { styleTypes } from '../../get-style'
import 'material-icons/iconfont/material-icons.css'

const iconList = ['bar_chart', 'show_chart', 'pie_chart', 'face']
function Control() {
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <section className={getStyle(state.theme, styleTypes.CONTROL).main()}>
            <label>
              {Object.values(state.chartTypes)
                .map((chartType, i) => (
                  <button
                    value={chartType}
                    key={chartType}
                    type="button"
                    className="material-icons"
                    onClick={() => actions.setChartType(chartType)}
                    disabled={state.chartType === chartType}
                  >
                    {iconList[i]}
                  </button>
                ))}
            </label>
            <label className={getStyle(state.theme, styleTypes.GENERIC).background()}>
              {Object.values(state.themes)
                .map(theme => (
                  <button
                    value={theme}
                    key={theme}
                    type="button"
                    style={{
                      background: theme,
                      width: '25px',
                    }}
                    onClick={() => actions.setTheme(theme)}
                    disabled={state.theme === theme}
                  >
                    &nbsp;
                  </button>
                ))
              }
            </label>
            {(state.chartType === state.chartTypes.LINE)
              && (
                <label key="symbol">
                  Symbol
                  <select
                    name="chart-symbol"
                    onChange={(e) => actions.setChartSymbolType(e.target.value)}
                    value={state.chartSymbolType}
                  >
                    {Object.values(state.chartSymbolTypes)
                      .map(symbol => (
                        <option
                          value={symbol}
                          key={symbol}
                        >
                          {`${symbol.slice(0, 1)}${symbol.slice(1).toLowerCase()}`}
                        </option>
                      ))
                    }
                  </select>
                </label>
              )
            }
          </section>
        )
      }}
    </StoreContext.Consumer>
  )
}
export default Control
