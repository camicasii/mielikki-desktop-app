import { ipcMain } from "electron";
import Scan from "../utils/Scan/Scan";
import { currentLocalIp } from "../utils/Scan/currentLocalIp";


function scanEvent() {       
    //console.log('scanEvent init')
    ipcMain.on('scan-ip-subnet',async(event,arg)=>{ 
        //console.log('scan-ip-subnet',arg);        
        const ips =await Scan.subnet(arg)
        event.reply('scan-subnet-reply',ips)
    })   
    
    ipcMain.on('scan-ip-range',async(event,arg)=>{ 
        //console.log(arg);        
        const ips =await Scan.range(arg,1,254)
        event.reply('scan-range-reply',ips)
    })   

    ipcMain.on('scan-ip',async(event,arg)=>{ 
        //console.log(arg);        
        const ips =await Scan.silgle(arg)
        event.reply('scan-ip-reply',ips)
    })   

    ipcMain.on('current-local-ip',async(event,arg)=>{ 
        const current_LocalIp = currentLocalIp()
        //console.log(current_LocalIp);
        
        event.reply('current-local-ip-reply',current_LocalIp)
    }) 










}

export default scanEvent