function getColors(theme) {
  const color = {
    foreground: 'lightgray',
    background: 'black',
  }
  if (theme === 'RED') {
    color.foreground = 'red'
    color.background = 'darkred'
  } else if (theme === 'GREEN') {
    color.foreground = 'green'
    color.background = 'darkgreen'
  } else if (theme === 'BLUE') {
    color.foreground = 'blue'
    color.background = 'darkblue'
  } else if (theme === 'GRAY') {
    color.foreground = 'lightgray'
    color.background = 'black'
  } else {
    throw new Error('No Color Theme found')
  }
  function background() {
    return color.background
  }
  function foreground() {
    return color.foreground
  }
  return {
    background,
    foreground,
  }
}
export default getColors

// import { scheme, schemes, variations } from './theme'
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
