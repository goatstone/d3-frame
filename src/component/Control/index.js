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

function Control({
  options,
}) {
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <section className={sheet.classes.main}>
            <form>
              <label key="info" className={sheet.classes.formLabel}>
                <button
                  name="info"
                  value="show"
                  onClick={actions.showInfo}
                  type="button"
                  disabled={state.isInfoVisible}
                >
                  ?
                </button>
              </label>
              <label key="type" className={sheet.classes.formLabel}>
                Chart Type
                <select name="chartType" onChange={(event) => actions.setChartType(event.target.value)} value={state.chartType}>
                  {options.types
                    .map(cto => <option value={cto.name} key={cto.name}>{cto.display}</option>)
                  }
                </select>
              </label>
              <label key="color">
                Theme
                <select
                  name="theme"
                  onChange={(e) => actions.setTheme(e.target.value)}
                  value={state.theme}
                >
                  {Object.entries(state.themes)
                    .map(theme => (
                      <option
                        value={theme[0]}
                        key={theme[0]}
                      >
                        {`${theme[0].slice(0, 1)}${theme[0].slice(1).toLowerCase()}`}
                      </option>
                    ))
                  }
                </select>
              </label>
              {(state.chartType === state.chartTypes.LINE)
              && (
                <label key="symbol" data-id="control.symbol">
                  Symbol
                  <select
                    name="chartSymbol"
                    onChange={(e) => actions.setChartSymbolType(e.target.value)}
                    value={state.chartSymbolType}
                  >
                    {Object.entries(state.chartSymbolTypes)
                      .map(cso => <option value={cso[0]} key={cso[1]}>{`${cso[0].slice(0, 1)}${cso[0].slice(1).toLowerCase()}`}</option>)
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
