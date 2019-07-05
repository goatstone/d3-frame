import data from './data'

export interface StateInterface {
  isInfoVisible: boolean;
  data: object;
}
const defaultState = {
  isInfoVisible: true,
  data,
}

export default defaultState
