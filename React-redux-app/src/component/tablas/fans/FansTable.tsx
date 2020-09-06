import React,{useEffect,useState} from 'react'
import FansItem from './FansItem'
//@ts-ignore
export default function FansTable({data}) {
    const [show, setShow] = useState(null)    
    
    useEffect(()=> {            
        //@ts-ignore        
        const show_ =  data.map(fan=><FansItem  data={fan} key={fan.ID} />)
        //@ts-ignore
        setShow(show_)
    },[])    
    
    return (
<table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">SPEED</th>
        <th scope="col">RPM</th>      
      </tr>
    </thead>
    <tbody>
    {show}
    </tbody>
    </table>        
    )
}
