import {
  interpolateBlues,
  interpolateGreens,
  interpolateGreys,
  interpolateRdYlGn,
} from 'd3'

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
    width: '600px',
    height: '600px',
    fontFamily: 'Verdana, sans-serif',
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
  // copy of colorStyle
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
const redStyle = colorize(interpolateRdYlGn)
const greenStyle = colorize(interpolateGreens)
const blueStyle = colorize(interpolateBlues)
const grayStyle = colorize(interpolateGreys)
const styles = {
  defaultStyle,
  redStyle,
  blueStyle,
  greenStyle,
  grayStyle,
}
function themeFactory(themeName = 'defaultStyle') {
  return styles[themeName]
}
export { menuOptions }
export default themeFactory
