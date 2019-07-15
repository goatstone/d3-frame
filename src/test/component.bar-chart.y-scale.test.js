import yScaleBarChart from '../component/BarChart/y-scale'

const data = [1, 0.1]
describe('yScaleBarChart', () => {
  test('should return a function', () => {
    const yScale = yScaleBarChart(data)
    expect(typeof yScale).toBe('function')
  })
})
