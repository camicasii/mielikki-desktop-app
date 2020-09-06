import { BrowserWindow} from "electron";




export default function modal(mainWindows:BrowserWindow,ip:string) {
    const child = new BrowserWindow(
        {parent:mainWindows,show:false,webPreferences:{devTools:false},
        x:+ 5,
    y:-5 })    
        child.setMenuBarVisibility(false)        
        child.loadURL(`http://${ip}`)
    
        child.on('ready-to-show',()=>{
            child.show()
        })
        
}
