import getDevicesMulti from "./utils/devices/getDevices";

getDevicesMulti(['192.168.0.30','192.168.0.31','192.168.0.32']).then(x=>{
    console.log(x);
    
})
