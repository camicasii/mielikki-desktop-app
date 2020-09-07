import React, { useEffect, useState } from "react";
import {useDispatch } from "react-redux";
import { BuildRounded } from "@material-ui/icons";
import {openBuild} from '../../redux/actions/devicesActions'



//@ts-ignore
const  ipcRenderer = window.ipcRenderer
let error:any;
//@ts-ignore
export default function Device({ data, ip }) {
  const [speed, setspeed] = useState(0);
  const [RPM, setRPM] = useState("");
  const [summary, setsummary] = useState("");
  const [pool, setpool] = useState(false);
  const [temps, settemps] = useState("");  

  const [check, setcheck] = useState(false)
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    
    if(check && error===0)
    error=setTimeout(() => {
      ipcRenderer.send('notification',ip)
      error=0
    }, 10000);
    else if(error!==0 && !check) clearTimeout(error)

    return () => {
      clearTimeout(error)
      error=0
    }
  }, [check])
  
  
  
  useEffect(() => {
    try{    
    setcheck(false)    
    if(!data['error'])
    Object.keys(data).forEach((key) => {           
      if (key === "temps") {        
        let dummy: any = [];
        const temps_ = data[key];
        //@ts-ignore
        Object.keys(temps_).map((key_) =>{
          const _temps =temps_[key_]["Chip"].toFixed(2)          
          dummy.push(_temps.toString())
        }
        );
        //@ts-ignore
        dummy.map(x=>{
          if(x>95)
          setcheck(true)
        })
        //@ts-ignore
        settemps(dummy.join("/"));
      }

      if (key === "fans") {
        let dummy_Speed: any[] = [];
        let dummy_RPM: any[] = [];
        const fans = data[key];

        fans.map((fan: any) =>
          Object.keys(fan).map((key_) => {
            
            
            if (key_ === "RPM") {
              dummy_RPM.push(fan[key_]);              
            }
            if (key_ === "Speed") {
              dummy_Speed.push(fan[key_]);            
              if(fan[key_]>95 ||fan[key_]<10 )
              setcheck(true)
            }

            

          })
        );

        setRPM(dummy_RPM.filter((x) =>{ 
          if(x>0&&x<1500)
          setcheck(true)          
          if(x !== 0)
          return x
        
        }).join("/"));
        setspeed(dummy_Speed[0]);
      }

      if (key === "summary") {
        const summary_raw: number = data[key]["MHS 1m"];
        const summary_ = (summary_raw / 1e6).toFixed(2);
        
        
        setsummary(summary_.toString());
      }
      if (key === "pools") {
        const pool_State: [] = data[key];

        if (pool_State.filter((x) => x["Stratum Active"]).length > 0)
          setpool(true);
        else{
          setpool(false);
          setcheck(true)
        }
        
        
        
      }
    });
  }
  catch{
    /*
    setRPM("")
    setpool(false)
    settemps("")
    setspeed(0)
    setsummary("")*/
  }

  return ()=>{
    setRPM("")
    setpool(false)
    settemps("")
    setspeed(0)
    setsummary("")
  }
  
  
  }, [data]);

  return (
    <tr className={`${check?"red lighten-2":""} `}>
      <th className="center" >{ip}</th>
      <th className="center">{pool?"Active" : "Dead"}</th>
      <th className="center">{summary} Th/s</th>
      <th className="center">{temps}</th>
      <th className="center">{RPM}</th>
      <th className="center">{speed} %</th>
      <th className="center">
        <button className="btn-floating btn-small btc-icon "
        onClick={()=>dispatch(openBuild(ip))} >
          <BuildRounded className="btc-item"/>
        </button>
      </th>
    </tr>
  );
}
