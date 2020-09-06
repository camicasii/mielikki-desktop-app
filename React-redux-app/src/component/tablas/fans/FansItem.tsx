import React from 'react'

//@ts-ignore
export default function FansItem({data}) {
    
    return (
        <tr key={data.ID}>                          
            <td>{data.ID}</td>
            <td>{data.Speed} %</td>
            <td>{data.RPM}</td>
        </tr>
    )
}
