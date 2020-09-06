import { combineReducers } from 'redux'
import ips from './ipsReducer'
import devices from './devicesReducer'

export default combineReducers({
  ips,
  devices
})