import React,{useState,useEffect} from 'react'
import ResumenItem from './ResumenItem'

//@ts-ignore
export default function ResumenTable({data, pools}) {
    const [show, setShow] = useState(null)    
    
    useEffect(()=> {         
        
        

        let pools_={};
        //@ts-ignore
        pools.map(pool=>Object.keys(pool).map(key=>{
            if("Stratum Active"==key && pool[key]==true)
            pools_=pool
        }))       
                
        //@ts-ignore        
        const show_ =  data.map((pool,ID)=><ResumenItem  data={pool} pool={pools_} id={ID} key={ID} />)
        //@ts-ignore
        setShow(show_)
    },[]) 
    
    return (
        <div>
            <table className="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">HASH RATE 1M</th>
        <th scope="col">HASH RATE 15M</th>
        <th scope="col">HASH RATE 24H</th>      
        <th scope="col">ACCEPTED</th>     
        <th scope="col">LAST DIFFICULTY</th>              
        <th scope="col">REJECTION RATIO</th>                                 
      </tr>
    </thead>
    <tbody> 
        {show}  
    </tbody>
    </table>   


        </div>
    )
}
