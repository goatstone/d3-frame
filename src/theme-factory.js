import {
  interpolateBlues,
  interpolateGreens,
  interpolateGreys,
  interpolateReds,
} from 'd3'

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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  chartFrame: {
    color: 'red',
    fill: 'blue',
    stroke: 'green',
    width: '650px',
    height: '300px',
    padding: '40px',
  },
  chartXAxis: {
    color: 'black',
    fill: 'transparent',
    stroke: 'black',
    strokeWidth: '2px',
    width: '500px',
    height: '200px',
    transform: 'translate(0, 200px)',
  },
  chartYAxis: {
    color: 'green',
    fill: 'blue',
    stroke: 'green',
    width: '650px',
    height: '300px',
  },
  chartBars: {
    color: 'orange',
    fill: 'blue',
    stroke: 'green',
    width: '650px',
    height: '300px',
  },
  chartText: {
    color: 'orange',
    fill: 'blue',
    stroke: 'green',
  },
}
const colorStyle = {
  backgroundA: {
    fill: 'white',
  },
  backgroundB: {
    fill: '#111',
  },
  foregroundA: {
    fill: '#fff',
  },
  foregroundB: {
    fill: '#eee',
  },
  accent: {
    fill: 'red',
    stroke: 'orange',
  },
}
function colorize(interpolator) {
  defaultStyle.mainContainer.background = interpolator(0.2)
  defaultStyle.mainContainer.fill = interpolator(0.5)
  defaultStyle.mainContainer.stroke = interpolator(0.7)
  const steps = 9
  let i = 0
  let j = 1
  const cSCopy = JSON.parse(JSON.stringify(colorStyle))
  Object.keys(cSCopy).forEach(k => {
    cSCopy[k].stroke = interpolator(i)
    cSCopy[k].fill = interpolator(j)
    i += 1 / steps
    j -= 1 / steps
  })
  Object.assign(defaultStyle, cSCopy)
  const newStyleObject = JSON.parse(JSON.stringify(defaultStyle))
  return newStyleObject
}
function themeFactory(themeName = 'defaultStyle') {
  return colorize(interpolators[themeName])
}
export { menuOptions }
export default themeFactory
