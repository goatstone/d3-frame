import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import elements from './elements'

Enzyme.configure({ adapter: new Adapter() })

describe('elements', () => {
    test('should return an array', () => {
        const returnValue = elements([])
        expect(Array.isArray(returnValue)).toBe(true)
    })
    test('should return an a array of React Objects', () => {
        const providedData = [{
            label: 'A',
            frequency: 1.0,
            x: 1,
            y: 2,
            w: 2,
            h: 2,
        }]
        const returnValue = elements(providedData)
        const A = returnValue[0]
        const w2 = Enzyme.shallow(A)

        expect(w2.find('g').length).toBe(1)
        expect(w2.find('text').length).toBe(2)
        expect(w2.find('rect').length).toBe(1)
    })
})
