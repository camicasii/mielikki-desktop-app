import store from "../../store";
import { GET_IPS, ADD_IPS, INIT_IPS,ADD_MYIPS,GET_LOCAL_IPS,SET_LOCAL_IPS,IS_LOCAL_IPS ,RESET_MYIPS  } from "./types";

//@ts-ignore
const ipcRenderer = window.ipcRenderer;



export const resetMyIp =() => {    
  localStorage.setItem("myip","");
  
  
    window.location.reload()
  
  
  //@ts-ignore
  return {
    type: RESET_MYIPS,
    payload: { myip: "",
      isMyipLocal:false
     },
  };
};




export const initIps = () => {
  const ips_local = localStorage.getItem("ips");
  const myip_local = localStorage.getItem("myip");
  let myip = "";
  let ips = [];  
  let isMyipLocal=false



  if (ips_local !== "") {
    //@ts-ignore
    ips = ips_local?.split(",");
  }
  
  if (myip_local !== "") {
    //@ts-ignore
    myip = myip_local;    
    isMyipLocal=true
  } 

return {
    type: INIT_IPS,
    payload: { ips, myip, isMyipLocal},
  };
};

export const scanAuto = () => { 
  const ips_local = localStorage.getItem("myip");
  ipcRenderer.send("scan-ip-subnet", ips_local);
  //@ts-ignore
  return { type: GET_IPS };
};

export const setIps =(ips: any) => {  
  
  localStorage.setItem("ips", ips);
  //@ts-ignore
  return {
    type: ADD_IPS,
    payload: { ips: ips },
  };
};


export const setMyIp =(myip: any) => {    
  localStorage.setItem("myip", myip);
  ipcRenderer.send("scan-ip-subnet", myip);
  //@ts-ignore
  return {
    type: ADD_MYIPS,
    payload: { myip: myip,
      isMyipLocal:true
     },
  };
};









export const getLocalIP =() => {      
  ipcRenderer.send("current-local-ip",null);  
  //@ts-ignore
  return {
    type: GET_LOCAL_IPS
  };
};

export const setLocalIP =(arg:any) => {     
  console.log(arg);
  return {
    type: SET_LOCAL_IPS,
    payload:{currentIp:arg}
  };
};

