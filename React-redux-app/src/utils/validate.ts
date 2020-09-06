// llamaría validateIp a una función que valide directamente la ip que se pasa
//@ts-ignore
export function validateIp(ip) {
    var patronIp = new RegExp("^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})$");
    var valores;
  
    // early return si la ip no tiene el formato correcto.
    if(ip.search(patronIp) !== 0) {
      return false
    }
  
    valores = ip.split("."); 
  
    return valores[0] <= 255 && valores[1] <= 255 && valores[2] <= 255 && valores[3] <= 255
  }
  