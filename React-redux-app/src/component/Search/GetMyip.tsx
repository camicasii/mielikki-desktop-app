import React from 'react'
import { useDispatch} from "react-redux";
import { resetMyIp,getLocalIP } from "../../redux/actions/ipsActions";

let time:any;
//@ts-ignore
function GetMyip() {
const dispatch = useDispatch()


//@ts-ignore
function setMyip(e:React.FormEvent) { 
  e.preventDefault()  
  dispatch(getLocalIP())       
  time =setTimeout(() => {
    dispatch(resetMyIp())    
    time=0
  }, 300);   
}
    return (
<div className="fixed-action-btn">  
  <button className="btn-floating btn-large red tooltipped" data-position="bottom" data-tooltip="Reset Ip" onClick={(e)=>setMyip(e)}>Set ip</button>
</div>



  

    )
}






export default GetMyip
