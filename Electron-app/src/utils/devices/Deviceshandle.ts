import Bosminer from "./Bosminer";

export default class Deviceshandle {

static simpleTemps(command: string, ip: string) {
      return new Promise(async (rel,rej)=>{
    try{
  //@ts-ignore
  const data =(await (new Bosminer(ip)).run(`{"command":"${command}"}`))[command.toUpperCase()];

  rel(data);
}
  catch{        
    rej("")
  }
})
}

static async  simpleFans(command: string, ip: string) {
  try{
  //@ts-ignore
  const data = (await new Bosminer(ip).run(`{"command":"${command}"}`))[
    command.toUpperCase()
  ];
  return data;
}
catch{
  return ""
}
}

static async  simpleSummary(command: string, ip: string) {
 try{
  //@ts-ignore
  const [data] = (await new Bosminer(ip).run(`{"command":"${command}"}`))[
    command.toUpperCase()
  ];
  return {
    //@ts-ignore
    "MHS 1m": data["MHS 1m"],
  };
}
catch{
  return ""
}
}
static async  simplePools(command: string, ip: string) {
 try{
  //@ts-ignore
  const data = (await new Bosminer(ip).run(`{"command":"${command}"}`))[
    command.toUpperCase()
  ];
  //@ts-ignore
  return data.map((poolData) =>{
	  const [data] =Object.keys(poolData).map((key) => {
      if ("Stratum Active" == key)
        return {
          "Stratum Active": poolData["Stratum Active"],
          Status: poolData["Status"],
		};		
	}).filter(x=>x!==undefined)

return data}
  );


}
catch{
  return ""
}

}

}