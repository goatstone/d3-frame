import React, { useContext } from 'react'
import { StoreContext } from '../../StoreContext'
import 'material-icons/iconfont/material-icons.css'
// import { ThemeContext, themeNames } from '../../theme/ThemeContext'
const iconList = ['bar_chart', 'show_chart', 'pie_chart', 'face']
const symbolList = ['9711', '9723', '9651']
function Control() {
  // const { themeName, setThemeName, cssSheet } = useContext(ThemeContext)
  const themeName = 'X'
  const setThemeName = () => { }
  const cssSheet = { classes: { controlColor: '' } }
  const themeNames = []
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => { // { state, actions }
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
            <section className={cssSheet.classes.controlColor}>
              {Object.values(themeNames).map(tN => {
                return (
                  <button
                    type="button"
                    onClick={() => setThemeName(tN.keyValue)}
                    disabled={tN.keyValue === themeName}
                    key={tN.keyValue}
                    style={{
                      background: tN.color,
                      width: '25px',
                    }}
                  >
                    &nbsp;
                  </button>
                )
              })}
            </section>
            <section className={cssSheet.classes.controlChartType}>
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
                    {chartType}
                  </button>
                ))}
            </section>
            {(state.chartType === state.chartTypes.LINE)
              && (
                <section className={cssSheet.classes.controlSymbolType}>
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
                </section>
              )
            }
          </section>
        )
      }}
    </StoreContext.Consumer>
  )
}
export default Control
