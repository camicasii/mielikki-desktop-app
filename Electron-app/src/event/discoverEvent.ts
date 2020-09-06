import { ipcMain } from "electron";
import getDevicesMulti from "../utils/devices/getDevices";



function discoverEvent() { 
//console.log('discoverEvent init')      
    
    ipcMain.on('discover-subnet',async(event,arg)=>{         

    })   
    
    ipcMain.on('discover-range',async(event,arg)=>{ 
  //      console.log(arg);        
        const ips =await getDevicesMulti(arg)
        event.reply('discover-range-reply',ips)
    })   

    ipcMain.on('discover-ip',async(event,arg)=>{ 
    //    console.log(arg);
        const ips =await getDevicesMulti(arg)
        event.reply('discover-ip-reply',ips)
    })   
    
    ipcMain.on('discover-all',async(event,arg)=>{ 
        try{        
        const ips =await getDevicesMulti(arg)
        event.reply('discover-all-reply',ips)
    }
        catch{
            event.reply('discover-all-reply',{})}
        
    })   


}

export default discoverEvent