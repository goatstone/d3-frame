/* eslint jsx-a11y/label-has-associated-control: [0] */
/* eslint react/jsx-wrap-multilines: [0] */
import React from 'react'
import './control-style.scss'
import { StoreContext } from '../../StoreContext'

function Control({
  chartConfig,
  // chartType,
  options,
}) {
  function noOp(e) {
    console.log('no op', e)
  }
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <section data-id="control">
            <form>
              <label key="info" data-id="control.info">
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
              <label key="type" data-id="control.type">
                Chart Type
                <select name="chartType" onChange={(event) => actions.setChartType(event.target.value)} value={state.chartType}>
                  {options.types
                    .map(cto => <option value={cto.name} key={cto.name}>{cto.display}</option>)
                  }
                </select>
              </label>
              <label key="color" data-id="control.color">
                Theme
                <select
                  name="theme"
                  onChange={noOp}
                  value={chartConfig.theme}
                >
                  {Object.entries(options.themes)
                    .map(co => (
                      <option
                        value={co[0]}
                        key={co[0]}
                      >
                        {co[1].name}
                      </option>
                    ))
                  }
                </select>
              </label>
              {state.chartType === state.chartTypes.LINE && (
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
                </label>)
              }
            </form>
          </section>
        )
      }}
    </StoreContext.Consumer>
  )
}
export default Control
