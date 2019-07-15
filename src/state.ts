import data from './data'

const chartTypes = {
  BAR: 'BAR',
  LINE: 'LINE',
  PIE: 'PIE',
  FORCE_LAYOUT: 'FORCE_LAYOUT',
}
const chartSymbolTypes = {
  CIRCLE: 'CIRCLE',
  SQUARE: 'SQUARE',
  TRIANGLE: 'TRIANGLE',
}
const themes = {
  GRAY: 'GRAY',
  RED: 'RED',
  GREEN: 'GREEN',
  BLUE: 'BLUE',
}
export interface StateInterface {
  isInfoVisible: boolean;
  data: object;
  chartTypes: object;
  chartType: string;
  chartSymbolTypes: object;
  chartSymbolType: string;
  themes: object;
  theme: string;
  iconNodes: object;
}
const defaultState = {
  isInfoVisible: false,
  data,
  chartTypes,
  chartType: chartTypes.FORCE_LAYOUT,
  chartSymbolTypes,
  chartSymbolType: chartSymbolTypes.CIRCLE,
  themes,
  theme: themes.GRAY,
  iconNodes: {
    nodes: [
      { name: 'abc', position: [0, 0] },
      { name: 'def', position: [100, 100] },
      { name: 'gji', position: [200, 200] }],
    isDrawn: false,
  },
}

export default defaultState
