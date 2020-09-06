import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'

export default function PowerOfMiner() {
    const [Thtotal, setThtotal] = useState(0) 
    //@ts-ignore    
    const data = useSelector(state=>state.devices.data)


    useEffect(()=>{          
        if(data==undefined)
        return
        let thTotal=0
        
        Object.keys(data).map(ip=>{                       
          try{if(data[ip].summary['MHS 1m']!==undefined)
          thTotal += data[ip].summary['MHS 1m']                  
        }
          catch{
            return
          }
        })
        
        setThtotal((thTotal / 1E6))
        
    
      },[data])
    return (
        
    
      <div className="card center tooltipped" data-position="right" data-tooltip="Power of miner">
        <span className="card-title">POM</span>
        <div className="card-content">        
            <span id="Thtotal">{Thtotal.toFixed(2).toString()} Th</span>
        </div>
      </div>
    
    )
}
