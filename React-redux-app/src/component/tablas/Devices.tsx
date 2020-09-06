import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'

import Device from "./Device";
import Table from "./Table";


//@ts-ignore
function Devices() {    
    const [device, setdevice] = useState([])    
    //@ts-ignore
    const data = useSelector(state=>state.devices.data)

  useEffect(()=>{          
    if(data==undefined)
    return    
    const device_ = Object.keys(data).map(ip=>{      
      return <Device data={data[ip]} ip={ip} key={ip} />            
    })
    
    
    //@ts-ignore
    setdevice(device_)

    

  },[data])
  


  return (
<div className="container">
<Table>{device.map(x=>x)}</Table>
</div>
    )
}


export default Devices
