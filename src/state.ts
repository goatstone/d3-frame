import data from './data'

const chartTypes = {
  BAR: 'BAR',
  LINE: 'LINE',
  PIE: 'PIE',
}
const symbolTypes = {
  CIRCLE: 'CIRCLE',
  SQUARE: 'SQUARE',
  TRIANGLE: 'TRIANGLE',
}
export interface StateInterface {
  isInfoVisible: boolean;
  data: object;
  chartTypes: object;
  chartType: string;
  symbolTypes: object;
  symbolType: string;
}
const defaultState = {
  isInfoVisible: true,
  data,
  chartTypes,
  chartType: chartTypes.BAR,
  symbolTypes,
  symbolType: symbolTypes.CIRCLE,
}

export default defaultState
