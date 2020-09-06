import { getDeviceSingle } from "./getDevices";


export interface temp {
			Board:number
			Chip:number
			ID:number
			TEMPS:number
 }

 export interface pool {
 	"Stratum Active":boolean
 	
 }

 export interface summary {
 	"MHS 1m":number

 }
 export interface fans {
 	FAN:number
 	IP:number
 	RPM:number
 	Speed:number	

 }
 
 getDeviceSingle('192.168.0.30').then(x=>{
	 console.log(x);
	 
 })