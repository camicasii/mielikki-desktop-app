import net,{Socket} from "net";
import process from "process";

interface Bosminer{
    host:number|string
    port:number|string
    client:Socket
    //res:Array<string>
    res:Buffer
    response:any
    isTimeout:boolean
}

class Bosminer implements Bosminer {
    constructor(host:number|string) {        
        this.host =host;
        this.port=4028
        this.client = new net.Socket()
//        this.res=[]
        this.res=Buffer.from("")
        this.response=""
        this.isTimeout=false
        
    }
    run(command:string){
        
        return new Promise((res,rej)=>{
            
//cactura el error de ip no encontrada
process.on('uncaughtException',()=>rej(""))

//            let buffer=new Buffer("")
            //@ts-ignore
    this.client.connect({
        port:this.port,
    host:this.host
    })        
    
    setTimeout(()=>{        
        this.isTimeout=true
        this.client.end()        
        //rej({error:true})
    },300)

    this.client.on('connect',()=>{        
        this.client.write(command)    
    })

    this.client.on('data',(data)=>{        
        //const data_ =data.toString("utf-8")
        this.res=Buffer.concat([this.res,data])
        //this.res.push(data_)
    })


    this.client.on('end',()=>{                        
        
        if(!this.isTimeout)
        {//const res_ = this.res.join()               
        const res_ = this.res.toString('utf8')
        //this.response=JSON.parse(res_.slice(0,res.length-2))        
        res(JSON.parse(res_.slice(0,res.length-2)))
        } else
            rej({error:true}) 
           
    })   

    
    
    this.client.on('close',()=>{
        
        
    })
            
        }



              )       

}
}

export  default Bosminer