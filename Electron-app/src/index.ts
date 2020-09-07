import { app,BrowserWindow,ipcMain,Notification,NotificationConstructorOptions,nativeImage } from "electron";
import url, { UrlObject } from "url";
import { join } from "path";
import scanEvent from "./event/scanEvent";
import discoverEvent from "./event/discoverEvent";
import modal from "./utils/modal";
import modalDeveloper from "./utils/modalDeveloper";
//import addExtension from "./utils/addExtension";

//electron-prevent-multiple-instances
const gotTheLock = app.requestSingleInstanceLock()
if(!gotTheLock){
    app.quit()
}

//electron-prevent-multiple-instances-end

let MainWindows:BrowserWindow;
function createWindows() {    
    const mainWindows= new BrowserWindow({
        icon:nativeImage.createFromPath( join(__dirname, 'resource/icon.png')),
        width:800,
        height:600,        
        webPreferences:{
            nodeIntegration:true,
            preload:join(__dirname,'preload.js'),
            devTools:process.env.DEV=="DEV"?true:false
        }
    })
    mainWindows.setMenuBarVisibility(false)    
    
    const url_:string|UrlObject = process.env.DEV=="DEV"?'http://localhost:3000/':url.format({
        pathname:join(__dirname,'views/build/index.html'),
        protocol:'file',
        slashes:true,

    })
    console.log(url_);
    
    mainWindows.loadURL(url_)
    
        mainWindows.webContents.openDevTools()
    MainWindows=mainWindows
    
    
    
    
}

app.whenReady().then(async()=>{
scanEvent()
discoverEvent()




    
    
if(process.env.DEV=="DEV"){
  //await addExtension()
    createWindows()      
}
else
createWindows()  




    




event_ext()

try{   


    
    app.on('activate',()=>{
        if(BrowserWindow.getAllWindows().length===0)createWindows()        
    })
    app.on('window-all-closed',()=>{
        if(process.platform!=='darwin')app.quit()

        app.quit()
        
    })
    //electron-prevent-multiple-instances
    app.on('second-instance',(event,commandLine, workingDirectory)=>{
        
        if(MainWindows){
            if(MainWindows.isMinimized())MainWindows.restore()
            MainWindows.focus()
        }
    })
    //electron-prevent-multiple-instances-end
    


}catch (error){
    console.log('An error occurred: ', error)
}
})


function noty() {
    const opt:NotificationConstructorOptions={
        title:"Error",
        body:"Something is wrong",
        timeoutType:"never",
        urgency:"critical",
        sound:join(__dirname,'resource/ALERT_Error.wav'),
        icon:nativeImage.createFromPath( join(__dirname, 'resource/icon.png'))
    }
    return new Notification(opt)
    
}



function event_ext() {
    const notification =noty()


    ipcMain.on('notification',(event,arg)=>{
        notification.body =`Something is wrong, IP ${arg}`
        notification.show()
    })  
        
    ipcMain.on('modal',(event,arg)=>{
        modal(MainWindows,arg)
    })    
        
    ipcMain.on('modal-developer',(event,arg)=>{
        modalDeveloper(MainWindows)
    })  
 
}

