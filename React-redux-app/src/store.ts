import { createStore,compose,applyMiddleware,Store  } from "redux";
import rootReducer from './redux/reducers'
import  thunk from "redux-thunk";

const initialState={
    ips:{ips:[],
        currentIp:[],
        myip:"",
        isMyipLocal:false},  
    devices:{isloader:false
    }  
}

const middleware=[thunk]
let store:Store

if(process.env.NODE_ENV==="development"){
//@ts-ignore
store = createStore(rootReducer,initialState,compose(applyMiddleware(...middleware),(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())))
}
else{
store = createStore(rootReducer,initialState,compose(applyMiddleware(...middleware)))


}
export default store