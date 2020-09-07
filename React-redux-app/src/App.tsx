import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {scanAuto,
  setIps,
  initIps,
  getLocalIP,
  setLocalIP,
} from "./redux/actions/ipsActions";
import { getData, setData } from "./redux/actions/devicesActions";
import "./App.css";
import Devices from "./component/tablas/Devices";
import Navbar from "./component/Navbar";
import CountDevices from "./component/tablas/tools/CountDevices";
import PowerOfMiner from "./component/tablas/tools/PowerOfMiner";
import InputDataUser from "./component/tablas/tools/InputDataUser";
import LoaderDevices from "./component/LoaderDevices";
import Search from "./component/Search/Search";

//@ts-ignore
const ipcRenderer = window.ipcRenderer;
//@ts-ignore
function App() {
  //@ts-ignore
  const ipsAll = useSelector((state) => state.ips);
  //@ts-ignore
  const ips = ipsAll.ips

  //const [ips, setips] = useState(initialState)
  //@ts-ignore
  const devices = useSelector((state) => state.devices);
  //@ts-ignore
  const data = devices.data;
  const dispatch = useDispatch();

  useEffect(() => {
    const time = setTimeout(() => {
      //@ts-ignore
      ipcRenderer.on("discover-all-reply", (event, arg) =>
        dispatch(setData(arg))
      );
      //@ts-ignore
      ipcRenderer.on("scan-subnet-reply", (event, arg) =>
        dispatch(setIps(arg))
      );
      //@ts-ignore
      ipcRenderer.on("current-local-ip-reply", (event, arg) =>
        dispatch(setLocalIP(arg))
      );
      dispatch(initIps());
      dispatch(getLocalIP());
    }, 100);
    
    return () => clearTimeout(time);
      
    
  }, []);


  useEffect(() => {    
    let time2:any
    if (ips.myip!=="")
    time2= setTimeout(() => dispatch(scanAuto()), 100);    
    return ()=> clearTimeout(time2);
  }, [ipsAll.myip]);


  useEffect(() => {
    
    let timer:any;
    
    if (ips.length > 0 && ips.myip!=="") 
    timer=setTimeout(() => dispatch(getData(ips)), 1000);    

    return ()=>clearTimeout(timer)
  }, [ipsAll.ips, data,ipsAll.myip]);
  

  return (
    <div className="App ">      
      <Navbar />
      <div className="row ">
      <div className="camicasii-panel ">
        <div className="camicasii-show">
          <PowerOfMiner />
        </div>
        <div className="camicasii-scanner">
          <div className="scanner">
          {ipsAll.isMyipLocal?<Search/>:null}
          </div>
          
        </div>
        <div className="camicasii-show ">
          <CountDevices />
        </div>
      </div>
      </div>
      <div className="row">
        <div className="col s12 center">
        {!ipsAll.isMyipLocal?<InputDataUser/>:null}
        <div className="col s12 center">
        {devices.isloader && ipsAll.isMyipLocal ? <Devices /> : <LoaderDevices />}          
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
