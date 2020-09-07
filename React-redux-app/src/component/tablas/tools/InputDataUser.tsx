import React,{useState,useRef, FormEvent} from 'react'
import { useSelector,useDispatch } from "react-redux";
import {
  setMyIp
} from "./../../../redux/actions/ipsActions";
let timer:any =0
export default function InputDataUser() {
    const [localIP, setlocalIP] = useState("")
    const [isEnable, setisEnable] = useState(true)
    //@ts-ignore
    const localsip = useSelector(state => state.ips.currentIp)    
    const checkAutoRef = useRef(null)
    const dispatch = useDispatch()

       
    
    function onSubmit(e:FormEvent) {   
      e.preventDefault()          
      if(localIP!==""||timer===0)
      timer=setTimeout(() => {
        dispatch(setMyIp(localIP))  
        
        timer=0
        clearTimeout(timer)       
      },100);
      
    }


    function onChangecheck(e:FormEvent) {        
        e.preventDefault()        
        //@ts-ignore        
        if(e.currentTarget.checked !==true ) return
        //@ts-ignore
        setlocalIP(e.currentTarget.value);        
        setisEnable(false)
    }
    
    return (
      <div className="container">
        <div className="row center">
            <div className=" card col s12 ">                    
            
            <div className="card-title">
            Select your ip
            </div>
            
            <form onSubmit={(e)=>onSubmit(e)} className="card-content">
            
            <div className="row">
            <div className="input-field col s12" ref={checkAutoRef}>
            {localsip.length>0?          
            //@ts-ignore
              localsip.map((x:any)=>            
            {                
            return <p key={x['address']}>
               <label>
              <input name="group1" type="radio" 
               value={x['address']} 
               onChange={(e)=>onChangecheck(e)}  />
              <span>{x['address']}</span>
            </label>
          </p>
          }):"Local Ip not found"
          }          
          </div>
          </div>
          
            <div className="card-action">
          <button   className="waves-effect waves-light btn-small" type="submit" disabled={isEnable} >set Ip</button>          
          
          </div>
        </form>
        
            
            </div>
        </div>
        </div>
    )
}
