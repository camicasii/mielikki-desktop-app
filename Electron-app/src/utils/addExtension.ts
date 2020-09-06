
import installExtension,{REDUX_DEVTOOLS,REACT_DEVELOPER_TOOLS  } from "electron-devtools-installer";

export default function addExtension () {

    return new Promise(async (rel,rej)=>{
        try {
            const redux_devtools = await installExtension(REDUX_DEVTOOLS)
            const react_developer_tools =await installExtension(REACT_DEVELOPER_TOOLS)
            if(redux_devtools && react_developer_tools)
            rel(true)
        } catch (error) {
            console.log('An error occurred: ', error)
            rej(false)            
            
        }

    })   
}