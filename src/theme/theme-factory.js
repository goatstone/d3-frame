import {
  interpolateBlues,
  interpolateGreens,
  interpolateGreys,
  interpolateReds,
} from 'd3'
import chartStyle from './chart-style'
import controlStyle from './control-style'

const menuOptions = [
  { label: 'Red', color: 'red', keyValue: 'redStyle' },
  { label: 'Blue', color: 'blue', keyValue: 'blueStyle' },
  { label: 'Green', color: 'green', keyValue: 'greenStyle' },
  { label: 'Gray', color: 'gray', keyValue: 'grayStyle' },
]
const interpolators = {
  defaultStyle: interpolateGreys,
  grayStyle: interpolateGreys,
  redStyle: interpolateReds,
  greenStyle: interpolateGreens,
  blueStyle: interpolateBlues,
}
const defaultStyle = {
  mainContainer: {
    stroke: 'white',
    fill: 'black',
    color: 'white',
    background: 'black',
    width: '100%',
    height: '100%',
    fontFamily: 'Verdana, sans-serif',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
Object.assign(defaultStyle, chartStyle, controlStyle)

function colorize(interpolator) {
  defaultStyle.mainContainer.background = interpolator(0.2)
  defaultStyle.mainContainer.fill = interpolator(0.5)
  defaultStyle.mainContainer.stroke = interpolator(0.7)
  defaultStyle.chartFrame.fill = interpolator(0.3)
  defaultStyle.chartFrame.stroke = interpolator(0.8)
  defaultStyle.chartYAxis.stroke = interpolator(1)
  defaultStyle.chartXAxis.stroke = interpolator(1)
  defaultStyle.chartBars.fill = interpolator(0.3)
  defaultStyle.chartBars.stroke = interpolator(0.8)
  defaultStyle.chartIconForce.stroke = interpolator(0.3)
  defaultStyle.chartIconForce.fill = interpolator(0.9)
  defaultStyle.chartPies.fill = interpolator(0.2)
  defaultStyle.chartPies.stroke = interpolator(0.8)
  defaultStyle.chartPiesText.fill = interpolator(1)
  const newStyleObject = JSON.parse(JSON.stringify(defaultStyle))
  return newStyleObject
}
function themeFactory(themeName = 'defaultStyle') {
  return colorize(interpolators[themeName])
}
export { menuOptions }
export default themeFactory
