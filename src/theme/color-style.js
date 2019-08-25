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
export default colorStyle
// const steps = 9
// let i = 0
// let j = 1
// const cSCopy = JSON.parse(JSON.stringify(colorStyle))
// Object.keys(cSCopy).forEach(k => {
//   cSCopy[k].stroke = interpolator(i)
//   cSCopy[k].fill = interpolator(j)
//   i += 1 / steps
//   j -= 1 / steps
// })
// Object.assign(defaultStyle, cSCopy)
