import ping from "./ping";

class Scan {
    
  static async subnet(net: string){
      let b = net.split(".");
      b.pop();
      b.push("");
      const subnet = b.join(".");
      let ips = [];
      for (let i = 30; i < 36; i++) {
        const ip = subnet + i;
        try {
          const element = await ping(ip);
          ips.push(element);
        } catch (error) {
          continue;
        }
      }

      return ips;
    };

    static async range(net: string,start:number,end:number){
      let b = net.split(".");
      b.pop();
      b.push("");
      const subnet = b.join(".");
      let ips = [];
      for (let i = start; i <= end; i++) {
        const ip = subnet + i;
        console.log(i);
        
        try {
          const element = await ping(ip);
          ips.push(element);
        } catch (error) {
          continue;
        }
      }

      return ips;

    }

   static async silgle(ip: string){            
        try {
          const element = await ping(ip);
          if(element!=="")
          return true
          else          
          return false
        } catch (error) {
          return false          
        }
      }
  
    } 



  


export default Scan;
