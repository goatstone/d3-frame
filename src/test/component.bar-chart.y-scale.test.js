import yScaleBarChart from '../component/BarChart/y-scale-bar-chart'

describe('yScaleBarChart', () => {
  test('should return a function', () => {
    const yScale = yScaleBarChart(1, 2)
    expect(typeof yScale).toBe('function')
  })
})
