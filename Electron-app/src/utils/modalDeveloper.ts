import { BrowserWindow,nativeImage} from "electron";
import { join } from "path";

export default function modalDeveloper(mainWindows:BrowserWindow) {
    
    const child = new BrowserWindow(
        
        {parent:mainWindows,show:false,webPreferences:{devTools:false,nodeIntegration:true},
        icon:nativeImage.createFromPath( join(__dirname, '../resource/icon.png')),        
        width:400,
        height:500        


})    
        child.setMenuBarVisibility(false)        
        child.loadFile(join(__dirname,'../views/developer.html'))
    
        child.on('ready-to-show',()=>{            
            child.show()
        })

        
}
