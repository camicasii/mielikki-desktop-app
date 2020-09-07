import React,{useState, useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { resetMyIp } from "../redux/actions/ipsActions";
import Swal from 'sweetalert2'
//@ts-ignore
let time:any
function LoaderDevices() {
  //@ts-ignore
  const ips = useSelector(state => state.ips.ips)
const dispatch = useDispatch()
  const [error, seterror] = useState(false)
  

  useEffect(() => {   
    time=setTimeout(()=>{ seterror(true)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      showConfirmButton: false,
      timer:4000  
    })
   },90000)    
   return ()=>clearTimeout(time)
  }, [])

  useEffect(()=>{
    if(ips.length>0)    
    clearTimeout(time)
  },[ips])
    

    return (   
      <React.Fragment>      
    {!error?
    <div>
      <div className="row">
    <div className="preloader-wrapper big active">
       <div className="spinner-layer spinner-blue-only">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>    
  </div>
  </div>
  <div className="row">
  <div className="col s2 offset-s5">
    <div className="card-panel teal" onClick={()=>resetMyIp()}>
      <span className="white-text">Search devices</span>
    </div>
  </div>
  </div>
  </div>
  :
  <div className="col s4 offset-s4">

<div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Devices not found</span>          
        <div className="card-action">
          <button className="btn btn-large " onClick={()=>dispatch(resetMyIp())}>Reset</button>         
        </div>
      </div>
    
    </div>
  </div>
}
</React.Fragment>



    )
}

//@ts-ignore

export default LoaderDevices
