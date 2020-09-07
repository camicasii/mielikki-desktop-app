import React from 'react'

import {useDispatch} from "react-redux";
import { scanAuto } from "../../redux/actions/ipsActions";
import GetMyip from "./GetMyip";
import { SearchOutlined } from '@material-ui/icons';

//@ts-ignore
function Search() {     

    const dispatch = useDispatch()
    function scan(e:React.MouseEvent) {                
        dispatch(scanAuto())        
    }   

    return (


<React.Fragment>
    <button className="btn btc-icon " onClick={(e)=>scan(e)}>scaner
    <i className=" material-icons right btc-item" ><SearchOutlined /></i>
  </button>  
  <GetMyip/>
</React.Fragment>

    





        
    )
}



  

export default Search