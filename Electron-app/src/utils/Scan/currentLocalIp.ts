import os from "os";

export function currentLocalIp() {

    
    const ifaces = os.networkInterfaces()        
    
    const data= Object.keys(ifaces)
    .map((key)=>{
    const iface=ifaces[key]
    const ifdata =iface?.filter(y=>'IPv6'!==y.family && !y.internal)
    //@ts-ignore    
    //@ts-ignore
    if(ifdata.length>0)
    return ifdata 
})
    .filter(data_=>{
        return data_!==undefined})





    //data.map(x=>x[0])

//console.log(data.map(iface=>iface[0]))
  //@ts-ignore
    return data.map(iface=>iface[0])
}

currentLocalIp()