import data from './data'

const chartTypes = {
  BAR: 'BAR',
  LINE: 'LINE',
  PIE: 'PIE',
}
export interface StateInterface {
  isInfoVisible: boolean;
  data: object;
  chartTypes: object;
  chartType: string;
}
const defaultState = {
  isInfoVisible: true,
  data,
  chartTypes,
  chartType: chartTypes.BAR,
}

export default defaultState
