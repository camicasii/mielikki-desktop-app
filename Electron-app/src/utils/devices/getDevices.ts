import Bosminer from "./Bosminer";
import Deviceshandle from "./Deviceshandle";


export function getDeviceSingle(ip: string) {
  const commands = [
    "temps",
    "pools",
    //"devs",
    "summary",
    //"config",
    //"devdetails",
    //"asccount",
    "fans",
  ];

  return new Promise(async (rel, rej) => {
    let properties = {};    
    try {       
    for (let command of commands) {
      
        
        let data:any;
        if(command=="temps")
        data = await Deviceshandle.simpleTemps(command,ip)        
        if(command=="pools")
        data = await Deviceshandle.simplePools(command,ip)        
        if(command=="summary")
        data = await Deviceshandle.simpleSummary(command,ip)        
        if(command=="fans")
        data = await Deviceshandle.simpleFans(command,ip)                


        //@ts-ignore
        properties[command] = data;
      
    }
  } catch {
    rel({error:true});
    //rej("devide not found");
  }
 //@ts-ignore
  properties["error"]=false
  rel(properties);
  });
}

export function getDeviceFullData(ip: string) {
    const commands = [
      "temps",
      "pools",
      //"devs",
      "summary",
      //"config",
      //"devdetails",
      //"asccount",
      "fans",
    ];
  
    return new Promise(async (rel, rej) => {
      let properties = {};
      for (let command of commands) {
        try {
          const get = new Bosminer(ip);
          //@ts-ignore
          const fulData = (await get.run(`{"command":"${command}"}`))[
            command.toUpperCase()
          ];
          //@ts-ignore
          properties[command] = fulData;
        } catch {
          //rej("devide not found");
          rej(false);
        }
      }
  
      rel(properties);
    });
  }



function getDevicesMulti(ips: Array<string>) {
  return new Promise(async (rel, rej) => {
    let devices = {};

    //@ts-ignore
    for (const ip of ips) {
      try {
        const device = await getDeviceSingle(ip);
        //@ts-ignore
        devices[ip] = device;
        
      } catch (e) {
        //@ts-ignore
        devices[ip] = { error: true, message: "device not found" };        
      }
    }    
    rel(devices);
  });
}

export default getDevicesMulti;
