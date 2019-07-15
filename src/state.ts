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
}

export default defaultState
