import React,{useState,useEffect} from 'react'
import PoolItem from './PoolItem'

//@ts-ignore
export default function PoolTable({data}) {
    const [show, setShow] = useState(null)    
    
    useEffect(()=> {         
        
        //@ts-ignore        
        const show_ =  data.map((pool,ID)=><PoolItem  data={pool} id={ID} key={ID} />)
        //@ts-ignore
        setShow(show_)
    },[])    
    
    return (        
<table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">URL</th>
        <th scope="col">USER</th>      
        <th scope="col">STATUS</th>              
        <th scope="col">ACTIVE</th> 
      </tr>
    </thead>
    <tbody> 
        {show}   
    </tbody>
    </table>   

    )
}
