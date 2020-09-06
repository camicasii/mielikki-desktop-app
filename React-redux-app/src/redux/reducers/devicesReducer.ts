import {DEVICES_LOADER,DEVICES_SET_DATA,DEVICES_GET_DATA,OPEN_BUILD } from '../actions/types'
//@ts-ignore
const devices = (state ={}, action) => {
    switch (action.type) {
      case DEVICES_LOADER:
        
        return {
          ...state,          
          ...action.payload          
        }        
        case DEVICES_SET_DATA:
        return {
          ...state,          
          ...action.payload          
        }
        case DEVICES_GET_DATA:
        return {
          ...state                 
        }     
        
        case OPEN_BUILD:
        return {
          ...state                 
        }     
        
      default:
        return state
    }
  }
  
  export default devices