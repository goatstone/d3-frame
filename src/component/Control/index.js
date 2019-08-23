import React, { useContext } from 'react'
import { StoreContext } from '../../StoreContext'
import 'material-icons/iconfont/material-icons.css'
import { ThemeContext, themeNames } from '../../ThemeContext'

const iconList = ['bar_chart', 'show_chart', 'pie_chart', 'face']
const symbolList = ['9711', '9723', '9651']
function Control() {
  const { themeName, setThemeName } = useContext(ThemeContext)

  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <section
            style={{
              position: 'fixed',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              bottom: 0,
            }}
          >
            {Object.values(themeNames).map(tN => {
              return (
                <button
                  type="button"
                  onClick={() => setThemeName(tN.keyValue)}
                  disabled={tN.keyValue === themeName}
                  style={{
                    background: tN.color,
                    width: '25px',
                  }}
                >
                  &nbsp;
                </button>
              )
            })}
            <button
              onClick={actions.showInfo}
              className="material-icons"
              type="button"
              disabled={state.isInfoVisible}
            >
              info
            </button>
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
            {(state.chartType === state.chartTypes.LINE)
              && (
                <label key="symbol">
                  {Object.values(state.chartSymbolTypes)
                    .map((symbol, i) => (
                      <button
                        value={symbol}
                        key={symbol}
                        type="button"
                        onClick={() => actions.setChartSymbolType(symbol)}
                      >
                        {String.fromCodePoint(symbolList[i])}
                      </button>
                    ))
                  }
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
