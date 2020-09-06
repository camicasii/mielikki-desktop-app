import React,{useState,useEffect} from 'react'
import {useSelector } from 'react-redux'
import { CodeOutlined } from '@material-ui/icons';

//@ts-ignore
const ipcRenderer = window.ipcRenderer;
export default function () {
    const [count, setcount] = useState(0)
    //@ts-ignore
    const data = useSelector(state => state.devices.data)

    useEffect(()=>{
        
    },[])

    let timer=0;

    function developer() {        
        if(timer==0)
        setTimeout(() => {
            ipcRenderer.send('modal-developer')            
            timer=0
        }, 500);
        else
        clearTimeout(timer)


        
    }

    
    



    return (
    
        <nav >
          
    
        <div className="nav-wrapper purple darken-4 tooltipped" data-position="bottom" data-tooltip="Developer for camicasii.xyz">
        <div className="container">
        <a className="brand-logo center">Mielikki</a>     
        <ul className="right ">
        <li><a onClick={()=>developer()}><CodeOutlined/></a></li>
        
      </ul>
      </div>  
    
    </div>
  </nav>
  
  
    )
}
