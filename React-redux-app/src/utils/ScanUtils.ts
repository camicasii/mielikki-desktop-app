//@ts-ignore
export const  ipcRenderer = window.ipcRenderer


export function scanIP() {        
    ipcRenderer.send('scan-ip-range', '192.168.0.1')
        }    

export function scanAuto() {        
            ipcRenderer.send('scan-ip-range', '192.168.0.1')
                }    


    