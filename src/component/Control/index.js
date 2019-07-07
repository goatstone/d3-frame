import React from 'react'
import jss from 'jss'
import preset from 'jss-preset-default'
import { StoreContext } from '../../StoreContext'

jss.setup(preset())

const style = {
  main: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    display: 'flex',
    fontSize: '1rem',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '1px',
    margin: '3px',
    background: '#777',
    borderRadius: '0.5rem',
    '& label': {
      color: '#eee',
      display: 'inline-block',
      border: '1px solid #999',
      borderRadius: '6px',
      padding: '3px',
      margin: '3px',
    },
    '& button, select': {
      background: '#ccc',
      borderRadius: '3px',
      fontSize: '1rem',
      padding: '6px',
      margin: '6px',
      fontWeight: 900,
    },
  },
}
const sheet = jss.createStyleSheet(style).attach()

function Control() {
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <section className={sheet.classes.main}>
            <form>
              <label className={sheet.classes.formLabel}>
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
              <label>
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
          </section>
        )
      }}
    </StoreContext.Consumer>
  )
}
export default Control
