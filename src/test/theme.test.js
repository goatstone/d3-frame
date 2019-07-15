import { scheme, schemes, variations } from '../theme'

describe('Theme', () => {
  describe('scheme', () => {
    it('should be an object', () => {
      const isObject = (typeof scheme === 'object' && scheme !== null)
      expect(isObject).toBe(true)
    })
  })
  describe('schemes', () => {
    it('should be an array', () => {
      expect(Array.isArray(schemes)).toBe(true)
    })
  })
  describe('variations', () => {
    it('should be an object', () => {
      expect(Array.isArray(variations)).toBe(true)
    })
  })
})
