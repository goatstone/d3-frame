import React from 'react'
import { StoreContext } from '../../StoreContext'
import getStyle, { styleTypes } from '../../get-style'

function Control() {
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <section className={getStyle(state.theme, styleTypes.CONTROL).main()}>
            <img src="d3-frame-logo.png" alt="D3 Frame Art" width="65" height="65" />
            <form>
              <label>
                <button
                  onClick={actions.showInfo}
                  type="button"
                  disabled={state.isInfoVisible}
                >
                  ?
                </button>
              </label>
              <label>
                Chart Type
                <select name="chart-type" onChange={(event) => actions.setChartType(event.target.value)} value={state.chartType}>
                  {Object.values(state.chartTypes)
                    .map(chartType => (
                      <option
                        value={chartType}
                        key={chartType}
                      >
                        {`${chartType.slice(0, 1)}${chartType.slice(1).toLowerCase()}`}
                      </option>
                    ))}
                </select>
              </label>
              <label className={getStyle(state.theme, styleTypes.GENERIC).background()}>
                Theme
                <select
                  name="theme"
                  onChange={(e) => actions.setTheme(e.target.value)}
                  value={state.theme}
                >
                  {Object.values(state.themes)
                    .map(theme => (
                      <option
                        value={theme}
                        key={theme}
                      >
                        {`${theme.slice(0, 1)}${theme.slice(1).toLowerCase()}`}
                      </option>
                    ))
                  }
                </select>
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
                        .map(symbol => <option value={symbol} key={symbol}>{`${symbol.slice(0, 1)}${symbol[0].slice(1).toLowerCase()}`}</option>)
                      }
                    </select>
                  </label>
                )
              }
            </form>
            <section>
              <a href="https://github.com/goatstone/d3-frame" target="new">
                D3 Framework
              </a>
              &nbsp;
              <a href="http://goatstone.com" target="new">
              Goatstone &copy; 2018
              </a>
            </section>
          </section>
        )
      }}
    </StoreContext.Consumer>
  )
}
export default Control
