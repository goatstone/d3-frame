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
/* eslint-disable object-curly-newline */
const menuOptions = [
  { label: 'Red', color: 'red', colors: ['red', 'white'], keyValue: 'red' },
  { label: 'Blue', color: 'blue', colors: ['blue', 'white'], keyValue: 'blue' },
  { label: 'Green', color: 'green', colors: ['green', 'white'], keyValue: 'green' },
  { label: 'Gray', color: 'gray', colors: ['gray', 'white'], keyValue: 'gray' },
  { label: 'interpolateBrBG', color: 'blue', colors: ['gray', 'green'], keyValue: 'a' },
  { label: 'interpolatePRGn', color: 'gray', colors: ['purple', 'green'], keyValue: 'b' },
  { label: 'interpolatePiYG', color: 'blue', colors: ['purple', 'green'], keyValue: 'c' },
  { label: 'interpolateMagma', color: 'gray', colors: ['red', 'blue'], keyValue: 'd' },
  { label: 'interpolatePlasma', color: 'blue', colors: ['green', 'red'], keyValue: 'e' },
  { label: 'interpolateCool', color: 'blue', colors: ['lightblue', 'blue'], keyValue: 'f' },
  { label: 'interpolateWarm', color: 'blue', colors: ['orange', 'white'], keyValue: 'g' },
  { label: 'interpolateRainbow', color: 'gray', colors: ['red', 'green'], keyValue: 'h' },
]
const styles = {
  red: { label: 'Red', interpolatorName: 'interpolateReds' },
  gray: { label: 'Gray', interpolatorName: 'interpolateGreys' },
  green: { label: 'Green', interpolatorName: 'interpolateGreens' },
  blue: { label: 'Blue', interpolatorName: 'interpolateBlues' },
  a: { label: 'A', interpolatorName: 'interpolateBrBG' },
  b: { label: 'B', interpolatorName: 'interpolatePRGn' },
  c: { label: 'C', interpolatorName: 'interpolatePiYG' },
  d: { label: 'C', interpolatorName: 'interpolateMagma' },
  e: { label: 'C', interpolatorName: 'interpolatePlasma' },
  f: { label: 'C', interpolatorName: 'interpolateCool' },
  g: { label: 'C', interpolatorName: 'interpolateWarm' },
  h: { label: 'C', interpolatorName: 'interpolateRainbow' },
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
let prevThemeKey
let newStyleObject = defaultStyle
function themeFactory(themeKey = 'default') {
  // bypass repeat calls with the same themeKey
  if (prevThemeKey === themeKey) return newStyleObject
  prevThemeKey = themeKey
  if (themeKey === 'default') return defaultStyle
  newStyleObject = JSON.parse(JSON.stringify(defaultStyle))
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
