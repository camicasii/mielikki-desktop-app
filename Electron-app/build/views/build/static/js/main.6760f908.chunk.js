(this["webpackJsonpreact-electron"]=this["webpackJsonpreact-electron"]||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),l=a(11),i=a.n(l),o=(a(25),a(2)),s=window.ipcRenderer,u=function(){return localStorage.setItem("myip",""),window.location.reload(),{type:"ADD_MYIPS",payload:{myip:"",isMyipLocal:!1}}},m=function(){var e=localStorage.getItem("myip");return s.send("scan-ip-subnet",e),{type:"GET_IPS"}},d=function(){return s.send("current-local-ip",null),{type:"GET_LOCAL_IPS"}},p=window.ipcRenderer,f=0,E=a(3),v=a(43),b=window.ipcRenderer;function O(e){var t,a=e.data,l=e.ip,i=Object(c.useState)(0),s=Object(E.a)(i,2),u=s[0],m=s[1],d=Object(c.useState)(""),f=Object(E.a)(d,2),O=f[0],j=f[1],y=Object(c.useState)(""),N=Object(E.a)(y,2),h=N[0],S=N[1],g=Object(c.useState)(!1),w=Object(E.a)(g,2),T=w[0],I=w[1],D=Object(c.useState)(""),_=Object(E.a)(D,2),k=_[0],A=_[1],P=Object(c.useState)(!1),C=Object(E.a)(P,2),L=C[0],M=C[1],R=Object(o.b)();return Object(c.useEffect)((function(){return L&&0===t?t=setTimeout((function(){b.send("notification","192.168.0.30"),t=0}),5e3):0===t||L||clearTimeout(t),function(){clearTimeout(t),t=0}}),[L]),Object(c.useEffect)((function(){try{M(!1),Object.keys(a).map((function(e){if("temps"===e){var t=[],n=a[e];Object.keys(n).map((function(e){var a=n[e].Chip.toFixed(2);t.push(a.toString())})),t.map((function(e){e>95&&M(!0)})),A(t.join("/"))}if("fans"===e){var c=[],r=[];a[e].map((function(e){return Object.keys(e).map((function(t){"RPM"===t&&r.push(e[t]),"Speed"===t&&(c.push(e[t]),(e[t]>95||e[t]<10)&&M(!0))}))})),j(r.filter((function(e){if(e>0&&e<1500&&M(!0),0!==e)return e})).join("/")),m(c[0])}if("summary"===e){var l=(a[e]["MHS 1m"]/1e6).toFixed(2);S(l.toString())}"pools"===e&&(a[e].filter((function(e){return e["Stratum Active"]})).length>0?I(!0):(I(!1),M(!0)))}))}catch(e){j(""),I(!1),A(""),m(0),S("")}return function(){j(""),I(!1),A(""),m(0),S("")}}),[a]),r.a.createElement("tr",{className:"".concat(L?"red lighten-2":""," ")},r.a.createElement("th",{className:"center"},l),r.a.createElement("th",{className:"center"},T?"Active":"Dead"),r.a.createElement("th",{className:"center"},h," Th/s"),r.a.createElement("th",{className:"center"},k),r.a.createElement("th",{className:"center"},O),r.a.createElement("th",{className:"center"},u," %"),r.a.createElement("th",{className:"center"},r.a.createElement("button",{className:"btn-floating btn-small btc-icon ",onClick:function(){return R(function(e){return clearTimeout(n),n=setTimeout((function(){p.send("modal",e)}),100),{type:"OPEN_BUILD"}}(l))}},r.a.createElement(v.a,{className:"btc-item"}))))}var j=a(12),y=a.n(j);var N=function(e){return Object(c.useEffect)((function(){return y.a.fire({position:"top-end",icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:2e3}),function(){}}),[]),r.a.createElement("table",{className:"centered "},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"IP"),r.a.createElement("th",null,"Pool State"),r.a.createElement("th",null,"Hast Rate"),r.a.createElement("th",null,"Temp \xbaC"),r.a.createElement("th",null,"Fan Speed RPM"),r.a.createElement("th",null,"Fan %"),r.a.createElement("th",null,"Build"))),r.a.createElement("tbody",null,e.children))};var h=function(){var e=Object(c.useState)([]),t=Object(E.a)(e,2),a=t[0],n=t[1],l=Object(o.c)((function(e){return e.devices.data}));return Object(c.useEffect)((function(){if(void 0!=l){var e=Object.keys(l).map((function(e){return r.a.createElement(O,{data:l[e],ip:e,key:e})}));n(e)}}),[l]),r.a.createElement("div",{className:"container"},r.a.createElement(N,null,a.map((function(e){return e}))))},S=a(44),g=window.ipcRenderer,w=function(){var e=Object(c.useState)(0),t=Object(E.a)(e,2);t[0],t[1],Object(o.c)((function(e){return e.devices.data}));Object(c.useEffect)((function(){}),[]);var a=0;return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper purple darken-4 tooltipped","data-position":"bottom","data-tooltip":"Developer for camicasii.xyz"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"brand-logo center"},"Mielikki"),r.a.createElement("ul",{className:"right "},r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){0==a?setTimeout((function(){g.send("modal-developer"),a=0}),500):clearTimeout(a)}},r.a.createElement(S.a,null)))))))};function T(){var e=Object(c.useState)(0),t=Object(E.a)(e,2),a=t[0],n=t[1],l=Object(o.c)((function(e){return e.devices.data}));return Object(c.useEffect)((function(){try{if(void 0!==l){var e=Object.keys(l).length;n(e)}}catch(t){n(0)}}),[l]),r.a.createElement("div",{className:"card center tooltipped","data-position":"left","data-tooltip":"Total of devices"},r.a.createElement("span",{className:"card-title"},"Devices"),r.a.createElement("div",{className:"card-content"},a))}function I(){var e=Object(c.useState)(0),t=Object(E.a)(e,2),a=t[0],n=t[1],l=Object(o.c)((function(e){return e.devices.data}));return Object(c.useEffect)((function(){if(void 0!=l){var e=0;Object.keys(l).map((function(t){try{void 0!==l[t].summary["MHS 1m"]&&(e+=l[t].summary["MHS 1m"])}catch(a){return}})),n(e/1e6)}}),[l]),r.a.createElement("div",{className:"card center tooltipped","data-position":"right","data-tooltip":"Power of miner"},r.a.createElement("span",{className:"card-title"},"POM"),r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{id:"Thtotal"},a.toFixed(2).toString()," Th")))}window.ipcRenderer;function D(){var e=Object(c.useState)(""),t=Object(E.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(!0),i=Object(E.a)(l,2),u=i[0],m=i[1],d=Object(o.c)((function(e){return e.ips.currentIp})),p=Object(c.useRef)(null),f=Object(o.b)(),v=0;function b(e){e.preventDefault(),""===a&&0!==v||(v=setTimeout((function(){var e;f((e=a,localStorage.setItem("myip",e),s.send("scan-ip-subnet",e),{type:"ADD_MYIPS",payload:{myip:e,isMyipLocal:!0}})),v=0,clearTimeout(v)}),100))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row center"},r.a.createElement("div",{className:" card col s12 "},r.a.createElement("div",{className:"card-title"},"Select your ip"),r.a.createElement("form",{onSubmit:function(e){return b(e)},className:"card-content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12",ref:p},d.length>0?d.map((function(e){return r.a.createElement("p",{key:e.address},r.a.createElement("label",null,r.a.createElement("input",{name:"group1",type:"radio",value:e.address,onChange:function(e){return function(e){e.preventDefault(),!0===e.currentTarget.checked&&(n(e.currentTarget.value),m(!1))}(e)}}),r.a.createElement("span",null,e.address)))})):"Local Ip not found")),r.a.createElement("div",{className:"card-action"},r.a.createElement("button",{className:"waves-effect waves-light btn-small",type:"submit",disabled:u},"set Ip"))))))}var _=function(){var e,t=Object(o.c)((function(e){return e.ips.ips})),a=Object(o.b)(),n=Object(c.useState)(!1),l=Object(E.a)(n,2),i=l[0],s=l[1];return Object(c.useEffect)((function(){return e=setTimeout((function(){s(!0),y.a.fire({icon:"error",title:"Oops...",text:"Something went wrong!",showConfirmButton:!1,timer:4e3})}),9e4),function(){return clearTimeout(e)}}),[]),Object(c.useEffect)((function(){t.length>0&&clearTimeout(e)}),[t]),r.a.createElement(r.a.Fragment,null,i?r.a.createElement("div",{className:"col s4 offset-s4"},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"Devices not found"),r.a.createElement("div",{className:"card-action"},r.a.createElement("button",{className:"btn btn-large ",onClick:function(){return a(u())}},"Reset"))))):r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"preloader-wrapper big active"},r.a.createElement("div",{className:"spinner-layer spinner-blue-only"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s2 offset-s5"},r.a.createElement("div",{className:"card-panel teal",onClick:function(){return u()}},r.a.createElement("span",{className:"white-text"},"Search devices"))))))};var k=function(){var e=Object(o.b)();return Object(o.c)((function(e){return e.ips})),r.a.createElement("div",{className:"fixed-action-btn"},r.a.createElement("button",{className:"btn-floating btn-large red tooltipped","data-position":"bottom","data-tooltip":"Reset Ip",onClick:function(t){return function(t){t.preventDefault(),e(d()),setTimeout((function(){e(u()),0}),300)}(t)}},"Set ip"))},A=a(45);var P=function(){var e=Object(o.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btc-icon ",onClick:function(t){e(m())}},"scaner",r.a.createElement("i",{className:" material-icons right btc-item"},r.a.createElement(A.a,null))),r.a.createElement(k,null))},C=window.ipcRenderer;var L=function(){var e=Object(o.c)((function(e){return e.ips})),t=e.ips,a=Object(o.c)((function(e){return e.devices})),n=a.data,l=Object(o.b)();return Object(c.useEffect)((function(){var e=setTimeout((function(){C.on("discover-all-reply",(function(e,t){return l(function(e){return{type:"DEVICES_SET_DATA",payload:{data:e,isloader:!0}}}(t))})),C.on("scan-subnet-reply",(function(e,t){return l(function(e){return localStorage.setItem("ips",e),{type:"ADD_IPS",payload:{ips:e}}}(t))})),C.on("current-local-ip-reply",(function(e,t){return l(function(e){return console.log(e),{type:"SET_LOCAL_IPS",payload:{currentIp:e}}}(t))})),l(function(){var e=localStorage.getItem("ips"),t=localStorage.getItem("myip"),a="",n=[],c=!1;return""!==e&&(n=null===e||void 0===e?void 0:e.split(",")),""!==t&&(a=t,c=!0),{type:"INIT_IPS",payload:{ips:n,myip:a,isMyipLocal:c}}}()),l(d())}),100);return function(){return clearTimeout(e)}}),[]),Object(c.useEffect)((function(){var e;return""!==t.myip&&(e=setTimeout((function(){return m()}),100)),function(){return clearTimeout(e)}}),[e.myip]),Object(c.useEffect)((function(){var e;return t.length>0&&""!==t.myip&&(e=setTimeout((function(){return function(e){return clearTimeout(f),f=setTimeout((function(){p.send("discover-all",e)}),400),{type:"DEVICES_GET_DATA"}}(t)}),600)),function(){return clearTimeout(e)}}),[e.ips,n,e.myip]),r.a.createElement("div",{className:"App "},r.a.createElement(w,null),r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"camicasii-panel "},r.a.createElement("div",{className:"camicasii-show"},r.a.createElement(I,null)),r.a.createElement("div",{className:"camicasii-scanner"},r.a.createElement("div",{className:"scanner"},e.isMyipLocal?r.a.createElement(P,null):null)),r.a.createElement("div",{className:"camicasii-show "},r.a.createElement(T,null)))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center"},e.isMyipLocal?null:r.a.createElement(D,null),r.a.createElement("div",{className:"col s12 center"},a.isloader&&e.isMyipLocal?r.a.createElement(h,null):r.a.createElement(_,null)))))},M=a(7),R=a(4),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_IPS":return Object(R.a)({},e);case"ADD_IPS":case"ADD_MYIPS":case"INIT_IPS":return Object(R.a)(Object(R.a)({},e),t.payload);case"GET_LOCAL_IPS":return Object(R.a)({},e);case"SET_LOCAL_IPS":case"ADD_MYIPS":return Object(R.a)(Object(R.a)({},e),t.payload);default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DEVICES_LOADER":case"DEVICES_SET_DATA":return Object(R.a)(Object(R.a)({},e),t.payload);case"DEVICES_GET_DATA":case"OPEN_BUILD":return Object(R.a)({},e);default:return e}},F=Object(M.c)({ips:x,devices:B}),G=[a(18).a];console.log("production","env");var V=Object(M.e)(F,{ips:{ips:[],currentIp:[],myip:"",isMyipLocal:!1},devices:{isloader:!1}},Object(M.d)(M.a.apply(void 0,G)));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:V},r.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.6760f908.chunk.js.map