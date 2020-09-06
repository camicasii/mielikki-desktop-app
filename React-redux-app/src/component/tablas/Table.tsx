import React,{useEffect} from 'react'
import Swal from 'sweetalert2'
//@ts-ignore
function Table(props) {
  useEffect(() => {    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 2000
    })    
    return () => {
    
    }
  }, [])
    return (
        <table className="centered ">
    <thead>
      <tr>
          <th>IP</th>                    
          <th>Pool State</th>
          <th>Hast Rate</th>          
          <th>Temp ºC</th>
          <th>Fan Speed RPM</th>
          <th>Fan %</th>
          <th>Build</th>
      </tr>
    </thead>
    
    <tbody >
    {props.children}     
    </tbody>
  </table>
  )  
  
}

export default Table
