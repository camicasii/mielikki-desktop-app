import React from 'react'

import {Search as Search_, Menu,GetAppSharp} from '@material-ui/icons';
import { connect } from "react-redux";
import { scanAuto } from "../../redux/actions/ipsActions";
import GetMyip from "./GetMyip";
function ButtomFly() {




    return (
<div className="fixed-action-btn ">
  <a className="btn-floating btn-large red btn-floating-camicasii ">      
  <Menu style={{fontSize:'2rem'}} />  
  </a>
  <ul>
    <li><a className="btn-floating red tooltipped btn-floating-camicasii"  data-position="left"
    data-tooltip="Searh devices"

    >     
      <Search_ style={{fontSize:'2rem'}} /></a>    </li>    

    <li>
    <a className="btn-floating yellow darken-1 tooltipped btn-floating-camicasii
    modal-trigger" 
    href="#modal1" 
    data-position="left"
    data-tooltip="insert your Ip"    
    >
    <GetAppSharp style={{fontSize:'2rem'}} />
    
    </a></li>    
  </ul>
</div>

    )
}



//@ts-ignore
function mapStateToProps(state) {
    const { ips } = state    
    
    return { todoList: ips }
  }
  
  export default connect(mapStateToProps)(ButtomFly)