import React from 'react'
import Info from './component/Info'
import Control from './component/Control'
import Chart from './component/Chart'
import './container.scss'
import config from './config'

// import { scheme, schemes, variations } from './theme'
import { StoreContext } from './StoreContext'

function D3React() {
  return (
    <StoreContext.Consumer>
      {({ state, actions }) => {
        return (
          <React.Fragment>
            <Chart
              chartType="bar"
              chartConfig={config.chart}
            />
            <Control
              chartType="bar"
              options={config.options}
              chartConfig={config.chart}
            />
            {
              state.isInfoVisible && <Info onClick={actions.hideInfo} />
            }
          </React.Fragment>
        )
      }}
    </StoreContext.Consumer>
  )
}
// class D3React extends React.Component {
//   constructor() {
//     super(...Array.from(arguments))

//     this.state = {
//       chartConfig: config.chart,
//       chartType: config.options.types[2].name, // the selected chart
//       isInfoVissible: false,
//     }
//     this.controlEvent = events
//     this.options = config.options
//     this.hideInfo = this.hideInfo.bind(this)
//   }

//   componentDidMount() {
//     this.setEvents()
//     this.controlEvent.emit('theme', 'gray')
//   }

//   setEvents() {
//     this.controlEvent.on('theme', theme => this.setTheme(theme))
//     this.controlEvent.on('color', color => {
//       const chartConfig = Object.assign(
//         {},
//         this.state.chartConfig,
//       )
//       chartConfig.color.background = color
//       this.setState({ chartConfig })
//     })
//     this.controlEvent.on('chartSymbol', (e) => {
//       const chartConfig = Object.assign(
//         {},
//         this.state.chartConfig,
//         { symbol: e },
//       )
//       this.setState({ chartConfig })
//     })
//     this.controlEvent.on('chartType', (e) => {
//       this.setState({ chartType: e })
//     })
//     this.controlEvent.on('info', () => {
//       this.setState({ isInfoVissible: true })
//     })
//   }

//   setTheme(themeId) {
//     const selectedTheme = this.options.themes[themeId]
//     const grayThemeColors = ['#111', '#444', '#aaa', '#eee']
//     scheme
//       .from_hue(selectedTheme.hue)
//       .scheme(schemes[0])
//       .variation(variations[3])
//     let themeColors = scheme.colors().map(c => `#${c}`)
//     if (typeof selectedTheme.saturation !== 'undefined'
//       && selectedTheme.saturation === 0) {
//       themeColors = grayThemeColors
//     }
//     const newColorConfig = {
//       background: themeColors[1],
//       foreground: themeColors[0],
//       axis: themeColors[3],
//       label: themeColors[2],
//       theme: themeColors,
//     }
//     const chartConfig = Object.assign(
//       {},
//       this.state.chartConfig,
//     )
//     chartConfig.color = newColorConfig
//     chartConfig.theme = themeId
//     this.setState({ chartConfig })
//   }

//   hideInfo() {
//     this.setState({ isInfoVissible: false })
//   }

//   render() {
//     return (
//       <section data-id="container">
//         <Chart
//           chartType={this.state.chartType}
//           chartConfig={this.state.chartConfig}
//           events={events}
//         />
//         <Control
//           chartType={this.state.chartType}
//           options={this.options}
//           chartConfig={this.state.chartConfig}
//           events={events}
//         />
//         <section data-id="info-min">
//           <a href="https://github.com/goatstone/d3-frame" target="new">
//             D3 Framework
//           </a>
//           <a href="http://goatstone.com" target="new">
//             Goatstone &copy; 2018
//           </a>
//         </section>
//         <A />
//         {
//           this.state.isInfoVissible && <Info onClick={this.hideInfo} />
//         }
//       </section>
//     )
//   }
// }

export default D3React
