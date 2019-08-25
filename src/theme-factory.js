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
    // display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  chartFrame: {
    color: 'red',
    fill: 'blue',
    stroke: 'green',
    // 650 x 300 is the SVG target size
    width: '300px',
    height: '200px',
    padding: '10px',
    outline: '1px solid gray',
  },
  chartXAxis: {
    color: 'black',
    fill: 'transparent',
    stroke: 'black',
    strokeWidth: '1px',
    width: '500px',
    height: '300px',
    transform: 'translate(0, 300px)',
  },
  chartYAxis: {
    color: 'black',
    fill: 'transparent',
    stroke: 'black',
    strokeWidth: '1px',
    width: '650px',
    height: '300px',
    transform: 'translate(0, 0)',
  },
  chartBars: {
    fontSize: '12px',
    color: 'orange',
    fill: 'gray',
    stroke: 'green',
    strokeWidth: '1px',
    width: '500px',
    height: '300px',
    transform: 'translate(0, 0)',
  },
  chartText: {
    fill: 'black',
    stroke: 'green',
    strokeWidth: '0',
    fontSize: '22px',
    transform: 'translate(0, 340px)',
  },
  chartPies: {
    transform: 'translate(290px, 130px)',
    fill: 'lightgray',
    stroke: 'black',
  },
  chartPiesText: {
    transform: 'translate(285px, 135px)',
    fontSize: '10px',
    fill: 'white',
    stroke: 'transparent',
    strokeWidth: '0',
  },
  chartIconForce: {
    fill: 'green',
    stroke: 'black',
    width: '500px',
    height: '400px',
  },
  controlColor: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    right: 0,
  },
  controlChartType: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    bottom: 0,
    right: 0,
  },
  controlSymbolType: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    bottom: 0,
    right: '40px',
  },
  titleArea: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    bottom: 0,
    left: 0,
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
  defaultStyle.chartFrame.fill = interpolator(0.3)
  defaultStyle.chartFrame.stroke = interpolator(0.8)
  defaultStyle.chartBars.fill = interpolator(0.3)
  defaultStyle.chartBars.stroke = interpolator(0.8)
  defaultStyle.chartIconForce.stroke = interpolator(0.3)
  defaultStyle.chartIconForce.fill = interpolator(0.9)
  defaultStyle.chartPiesText.fill = interpolator(0.9)
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
