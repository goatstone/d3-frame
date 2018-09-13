import config from '../config'

describe('Config', () => {
    it(' should  be of type object', () => {
       expect(typeof config).toBe('object')
    })
    it(' should have a property chart', () => {
       expect(config).toHaveProperty('chart')
    })
    it(' should have a property options', () => {
       expect(config).toHaveProperty('options')
    })
})
