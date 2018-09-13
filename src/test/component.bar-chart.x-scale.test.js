import xScaleBarChart from '../component/BarChart/x-scale'

const data = [1, 0.1]
describe('xScaleBarChart', () => {
    test('should return a function', () => {
        const xScale = xScaleBarChart(data)
        expect(typeof xScale).toBe('function')
    })
})
