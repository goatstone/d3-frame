import * as d3 from 'd3'
import chartStyle from './chart-style'
import controlStyle from './control-style'

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
const menuOptions = [
  { label: 'Red', color: 'red', keyValue: 'red' },
  { label: 'Blue', color: 'blue', keyValue: 'blue' },
  { label: 'Green', color: 'green', keyValue: 'green' },
  { label: 'Gray', color: 'gray', keyValue: 'gray' },
]
const styles = {
  red: { label: 'Red', interpolatorName: 'interpolateReds' },
  gray: { label: 'Gray', interpolatorName: 'interpolateGreys' },
  green: { label: 'Green', interpolatorName: 'interpolateGreens' },
  blue: { label: 'Blue', interpolatorName: 'interpolateBlues' },
}
const iVs = [
  {
    styleName: 'chartIconForce',
    styleProps: [
      ['fill', 0.3],
      ['stroke', 0.8],
    ],
  },
  {
    styleName: 'mainContainer',
    styleProps: [
      ['background', 0.5],
    ],
  },
  {
    styleName: 'chartBars',
    styleProps: [
      ['fill', 0.7],
      ['stroke', 0.8],
    ],
  },
  {
    styleName: 'chartXAxis',
    styleProps: [
      ['stroke', 0.5],
    ],
  },
  {
    styleName: 'chartYAxis',
    styleProps: [
      ['stroke', 0.5],
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
  {
    styleName: 'chartPiesText',
    styleProps: [
      ['fill', 1],
    ],
  },
]
function themeFactory(themeKey = 'default') {
  if (themeKey === 'default') return defaultStyle
  const newStyleObject = JSON.parse(JSON.stringify(defaultStyle))
  for (let i = 0; i < iVs.length; i += 1) {
    for (let j = 0; j < iVs[i].styleProps.length; j += 1) {
      newStyleObject[iVs[i].styleName][iVs[i]
        .styleProps[j][0]] = d3[styles[themeKey].interpolatorName](iVs[i].styleProps[j][1])
    }
  }
  return newStyleObject
}
export { menuOptions }
export default themeFactory
