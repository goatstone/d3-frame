import xScaleBarChart from '../component/BarChart/x-scale-bar-chart'

describe('xScaleBarChart', () => {
  test('should return a function', () => {
    const xScale = xScaleBarChart(1, 2)
    expect(typeof xScale).toBe('function')
  })
})
