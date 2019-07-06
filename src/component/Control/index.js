/* eslint jsx-a11y/label-has-associated-control: [0] */
/* eslint react/jsx-wrap-multilines: [0] */
import React from 'react'
import './control-style.scss'
import { StoreContext } from '../../StoreContext'

function Control({
  chartConfig,
  chartType,
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
                <select name="chartType" onChange={noOp} value={chartType}>
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
              {chartType === 'line' && (
                <label key="symbol" data-id="control.symbol">
                  Symbol
                  <select
                    name="chartSymbol"
                    onChange={noOp}
                    value={chartConfig.symbol}
                  >
                    {options.symbols
                      .map(cso => <option value={cso.name} key={cso.name}>{cso.display}</option>)
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
