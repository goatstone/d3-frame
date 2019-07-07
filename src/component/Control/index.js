import React from 'react'
import jss from 'jss'
import preset from 'jss-preset-default'
import { StoreContext } from '../../StoreContext'

jss.setup(preset())

const backgroundColor = '#777'
const foregroundColor = '#111'
const styleTypes = { GENERIC: 'GENERIC', CONTROL: 'CONTROL' }
const style = {
  [styleTypes.GENERIC]: {
    main: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: '1px',
      margin: '1px',
      background: backgroundColor,
    },
  },
  [styleTypes.CONTROL]: {
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
      background: backgroundColor,
      borderRadius: '0.5rem',
      '& label': {
        color: foregroundColor,
        display: 'inline-block',
        border: '1px solid #999',
        borderRadius: '6px',
        padding: '3px',
        margin: '3px',
      },
      '& button, select': {
        color: foregroundColor,
        fontSize: '1rem',
        padding: '6px',
        margin: '6px',
        fontWeight: 900,
      },
    },
  },
}
function updateStyle(theme, styleTypeB) {
  /* eslint indent: "off" */
  switch (theme) {
    case 'RED':
      style[styleTypeB].main.background = 'red'
      break
    case 'GRAY':
      style[styleTypeB].main.background = 'gray'
      break
    case 'GREEN':
      style[styleTypeB].main.background = 'green'
      break
    case 'BLUE':
      style[styleTypeB].main.background = 'blue'
      break
    default:
      throw new Error('Theme does not exist')
  }
}
function getStyle(theme, styleType) {
  if (!style[styleType]) {
    throw new Error(`${styleType} : style type does not exist`)
  }
  if (styleType !== styleTypes.CONTROL) {
    updateStyle(theme, styleType)
  }
  const main = () => {
    const sheet = jss.createStyleSheet(style[styleType]).attach()
    return sheet.classes.main
  }
  const background = () => {
    const sheet = jss.createStyleSheet({
      main: {
        background: style[styleType].main.background,
      },
    }).attach()
    return sheet.classes.main
  }
  return {
    main,
    background,
  }
}
function Control() {
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <section className={getStyle(state.theme, styleTypes.CONTROL).main()}>
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
          </section>
        )
      }}
    </StoreContext.Consumer>
  )
}
export default Control
