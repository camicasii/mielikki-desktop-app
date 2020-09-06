import { GET_IPS, ADD_IPS, INIT_IPS,ADD_MYIPS,GET_LOCAL_IPS,SET_LOCAL_IPS ,RESET_MYIPS} from "../actions/types";
//@ts-ignore
const ips = (state = {}, action) => {
  switch (action.type) {
    case GET_IPS:      
      return {
        ...state,
      };
    case ADD_IPS:      
      return {
        ...state,
        ...action.payload,
      };
      case ADD_MYIPS:      
      return {
        ...state,
        ...action.payload,
      };

    case INIT_IPS:      
      return {
        ...state,
        ...action.payload,
      };
      case GET_LOCAL_IPS:                  

        return {
          ...state          
        }
        case SET_LOCAL_IPS:          
        return {
          ...state,          
          ...action.payload
        }
        
        case RESET_MYIPS:          
        return {
          ...state,          
          ...action.payload
        }
    default:
      return state;
  }
};

export default ips;
