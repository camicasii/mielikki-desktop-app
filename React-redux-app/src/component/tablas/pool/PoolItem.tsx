import React from 'react'

//@ts-ignore
export default function PoolItem({data,id}) {
    
    console.log(String(data['Stratum Active']));
    
    
    return (        
             <tr key={id} >                          
             <td>{id} </td>
            <td>{data['Stratum URL']}</td>
            <td>{data.User} </td>
            <td>{data.Status}</td>
            <td>{String(data['Stratum Active']).toUpperCase()}</td>
            
        </tr>
        
    )
}
