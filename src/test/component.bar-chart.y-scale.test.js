import yScaleBarChart from '../component/bar-chart/y-scale'

const data = [1, 0.1]
describe('yScaleBarChart', () => {
    test('should return a function', () => {
        const yScale = yScaleBarChart(data)
        expect(typeof yScale).toBe('function')
    })
})
