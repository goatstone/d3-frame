import barsData from '../component/BarChart/bars-data'

describe('element data', () => {
    test('should return an array', () => {
        const returnValue = barsData([])

        expect(Array.isArray(returnValue)).toBe(true)
    })
    test('should contain elements', () => {
        const xScale = jest.fn()
        xScale.bandwidth = () => 2
        const returnValue = barsData([['A', 0.1]], xScale, () => 1, 100)

        expect(returnValue.length).toBeGreaterThan(0)
    })
    test('should contain elements of type Object', () => {
        const xScale = jest.fn()
        xScale.bandwidth = () => 2
        const returnValue = barsData([['A', 0.1]], xScale, () => 1, 100)

        expect(typeof returnValue[0]).toBe('object')
    })
    test('containing elements should have specific properties', () => {
        const expectedLabel = 'A'
        const expectedFrequency = 1.0
        const expectedX = 1
        const xScale = jest.fn().mockReturnValueOnce(expectedX)
        xScale.bandwidth = () => 2
        const returnValue = barsData([['A', 1.0]], xScale, () => 1, 100)

        expect(returnValue[0].label).toBe(expectedLabel)
        expect(returnValue[0].frequency).toBe(expectedFrequency)
        expect(returnValue[0].x).toBe(expectedX)
    })
})

