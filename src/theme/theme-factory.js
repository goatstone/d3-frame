import {
  interpolateBlues,
  // interpolateGreens,
  // interpolateGreys,
  // interpolateReds,
} from 'd3'
import chartStyle from './chart-style'
import controlStyle from './control-style'

const menuOptions = [
  { label: 'Red', color: 'red', keyValue: 'redStyle' },
  { label: 'Blue', color: 'blue', keyValue: 'blueStyle' },
  { label: 'Green', color: 'green', keyValue: 'greenStyle' },
  { label: 'Gray', color: 'gray', keyValue: 'grayStyle' },
]
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

// function colorize(interpolator) {
//   defaultStyle.mainContainer.background = interpolator(0.2)
//   defaultStyle.mainContainer.fill = interpolator(0.5)
//   defaultStyle.mainContainer.stroke = interpolator(0.7)
//   defaultStyle.chartFrame.fill = interpolator(0.3)
//   defaultStyle.chartFrame.stroke = interpolator(0.8)
//   defaultStyle.chartYAxis.stroke = interpolator(1)
//   defaultStyle.chartXAxis.stroke = interpolator(1)
//   defaultStyle.chartBars.fill = interpolator(0.7)
//   defaultStyle.chartBars.stroke = interpolator(0.8)
//   defaultStyle.chartIconForce.stroke = interpolator(0.3)
//   defaultStyle.chartIconForce.fill = interpolator(0.9)
//   defaultStyle.chartPies.fill = interpolator(0.2)
//   defaultStyle.chartPies.stroke = interpolator(0.8)
//   defaultStyle.chartPiesText.fill = interpolator(1)
//   const newStyleObject = JSON.parse(JSON.stringify(defaultStyle))
//   return newStyleObject
// }
const styles = {
  red: { label: 'Red' },
  gray: { label: 'Gray' },
  green: { label: 'Green' },
  blue: { label: 'Blue' },
}
console.log(styles)
const iVs = [
  {
    styleName: 'mainContainer',
    styleProps: [
      ['fill', 0],
      ['background', 0.5],
    ],
  },
  {
    styleName: 'chartFrame',
    styleProps: [
      ['fill', 0.5],
      ['stroke', 0.8],
    ],
  },
  {
    styleName: 'chartPies',
    styleProps: [
      ['fill', 0.1],
      ['stroke', 0.7],
    ],
  },
]
function themeFactory(themeKey = 'default') {
  if (themeKey === 'default') return defaultStyle
  const newStyleObject = JSON.parse(JSON.stringify(defaultStyle))
  for (let i = 0; i < iVs.length; i += 1) {
    for (let j = 0; j < iVs[i].styleProps.length; j += 1) {
      newStyleObject[iVs[i].styleName][iVs[i]
        .styleProps[j][0]] = interpolateBlues(iVs[i].styleProps[j][1])
    }
  }
  return newStyleObject
}
export { menuOptions }
export default themeFactory
