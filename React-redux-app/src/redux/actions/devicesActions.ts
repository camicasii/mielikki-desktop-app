import {  DEVICES_LOADER,DEVICES_DATA,DEVICES_GET_DATA,DEVICES_SET_DATA,
    DEVICES_ERROR,OPEN_BUILD} from "./types";


//@ts-ignore
const  ipcRenderer = window.ipcRenderer




let time_getData:any=0;

export const setLoader= (loader:boolean)=>{    

 return  {
        type:DEVICES_LOADER,
        payload:{isloader:loader}
    }  
}

export const getData= (ips:[string])=>{    
    clearTimeout(time_getData)    
     time_getData = setTimeout(()=>{ipcRenderer.send('discover-all', ips)    
    },400)           
return {
            type:DEVICES_GET_DATA            
        }    
    }



export const setData=(data:any)=>{        
    
        return {
                type:DEVICES_SET_DATA,
                payload:{data:data,
                    isloader:true}
            }
        }



let time_openBuild:any;
        
export const openBuild=(ip:string)=>{    
    clearTimeout(time_openBuild)    
     time_openBuild = setTimeout(()=>{ipcRenderer.send('modal', ip)    
    },100)           
            return {
                    type:OPEN_BUILD
                }
            }