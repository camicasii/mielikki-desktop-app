import net from "net";

function ping(ip:string):Promise<string>{
return new Promise((rel,rej)=>{
const timeout = 150;
var timer = setTimeout(function () {  
  socket.destroy();    
  rej("")
}, timeout);

const socket = net.connect({ host: ip, port: 4028 }, function () {
  clearTimeout(timer);
  socket.end();
  rel(ip)
  
})
.on("error", ()=> {
  clearTimeout(timer);  
  rej("")
  
});

})
}

export default ping