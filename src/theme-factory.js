import {
  interpolateBlues,
  interpolateGreens,
  interpolateGreys,
  interpolateRdYlGn,
} from 'd3'

const menuOptions = [
  { label: 'Blue', color: 'blue', keyValue: 'blueStyle' },
  { label: 'Green', color: 'green', keyValue: 'greenStyle' },
  { label: 'Gray', color: 'gray', keyValue: 'grayStyle' },
  {
    label: 'Red Green',
    color: 'green',
    gradient: ['red', 'green'],
    keyValue: 'darkStyle',
  },
]
const defaultStyle = {
  mapContainer: {
    stroke: 'gray',
    fill: 'black',
    width: '600px',
    height: '600px',
  },
  graticule: {
    stroke: 'white',
    fill: 'transparent',
    strokeWidth: 3,
  },
  earth: {
    stroke: 'black',
    fill: 'gray',
    strokeWidth: 3,
  },
  state: {
    stroke: 'white',
    fill: 'transparent',
    strokeWidth: 3,
  },
  city: {
    stroke: 'red',
    fill: 'transparent',
    strokeWidth: 13,
  },
  accent: {
    fill: 'red',
    stroke: 'orange',
  },
}
const styleB = JSON.parse(JSON.stringify(defaultStyle))
Object.keys(styleB).forEach(k => {
  styleB[k].fill = 'red'
  styleB[k].stroke = 'blue'
})
// create the blueStyle option
function colorize(styleObject, interpolator) {
  const newStyleObject = JSON.parse(JSON.stringify(styleObject))
  const steps = 9
  let i = 0
  let j = 1
  Object.keys(newStyleObject).forEach(k => {
    if (k !== 'graticule') {
      newStyleObject[k].fill = interpolator(j)
    }
    if (k !== 'city') {
      newStyleObject[k].stroke = interpolator(i)
    }
    i += 1 / steps
    j -= 1 / steps
  })
  return newStyleObject
}
const blueStyle = colorize(defaultStyle, interpolateBlues)
const greenStyle = colorize(defaultStyle, interpolateGreens)
const grayStyle = colorize(defaultStyle, interpolateGreys)
const darkStyle = colorize(defaultStyle, interpolateRdYlGn)
const styles = {
  defaultStyle,
  styleB,
  blueStyle,
  greenStyle,
  grayStyle,
  darkStyle,
}
function themeFactory(themeName = 'defaultStyle') {
  return styles[themeName]
}
export { menuOptions }
export default themeFactory
