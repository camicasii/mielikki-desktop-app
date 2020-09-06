const  electron =require('electron')

window.addEventListener('load',()=>{    
    document.getElementById('camicasiiWeb').addEventListener('click',()=>{
        const url='https://camicasii.xyz/'
            electron.shell.openExternal(url)
        
    })
})