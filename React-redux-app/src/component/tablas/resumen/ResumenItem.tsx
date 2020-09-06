import React from 'react'
//@ts-ignore
export default function ResumenItem({data, pool,id}) {
    
    
    return (
        
            <tr key={id} >                          
             <td>{id} </td>
            <td>{(data["MHS 1m"]/1E6).toFixed(2)}</td>
            <td>{(data["MHS 15m"]/1E6).toFixed(2)} </td>
            <td>{(data["MHS 24h"]/1E6).toFixed(2)}</td>
            <td>{data["Accepted"]}</td>
            <td>{pool["Last Share Difficulty"]}</td>
            <td>{(data["Pool Rejected%"]).toFixed(2)} %</td>            
            
            </tr>
        
    )
}
