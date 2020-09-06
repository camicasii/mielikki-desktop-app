import React,{useState,useEffect}  from 'react'
import {useSelector } from 'react-redux'

export default function CountDevices() {
    
    const [count, setcount] = useState(0)
    //@ts-ignore
    const data = useSelector(state => state.devices.data)

    useEffect(()=>{
        try {
            if(data!==undefined)
            {const count_ = Object.keys(data).length
                setcount(count_)
            }
        } catch{
            setcount(0)
        }

    },[data])
    
    return (

      <div className="card center tooltipped" data-position="left" data-tooltip="Total of devices">
        <span className="card-title">Devices</span>
        <div className="card-content">
            {count}
        </div>
      </div>
    



        
    )
}
