(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t){},26:function(e,t){},27:function(e,t){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s,i=a(0),n=a.n(i),l=a(9),c=a.n(l),r=a(3),o=a.n(r),h=a(2);!function(e){e.PreviousPage="previousPage",e.NextPage="nextPage",e.AddPage="addPage",e.Undo="undo",e.Redo="redo",e.Open="open",e.Save="save",e.Export="export",e.Cut="cut",e.Copy="copy",e.Paste="paste",e.Deselect="deselect",e.SelectAll="selectAll",e.Duplicate="duplicate",e.Move="move",e.Pen="pen",e.Eraser="eraser",e.Laser="laser",e.Line="line",e.Ellipse="ellipse",e.Rectangle="rectangle",e.Dotted="dotted",e.Dashed="dashed",e.Solid="solid",e.Black="black",e.Blue="blue",e.Green="green",e.Orange="orange",e.Yellow="yellow",e.Transparent="transparent",e.HalfFilled="halfFilled",e.Filled="filled",e.ResetStyles="resetStyles",e.FullScreen="fullScreen",e.EnterFullScreen="enterFullScreen",e.ExitFullScreen="exitFullScreen"}(s||(s={}));const d={previousPage:"–Page",nextPage:"+Page",addPage:"+Page",selectAll:"Select All",duplicate:"Clone",eraser:"Cut / Eraser",rectangle:"Rect.",transparent:"Unfilled",halfFilled:"Half Fill",resetStyles:"Reset Styles",fullScreen:"Full Screen",enterFullScreen:"Enter Full Screen",exitFullScreen:"Exit Full Screen"},u=e=>{const t=d[e]||e;return t&&t[0].toUpperCase()+t.slice(1)};class m{constructor(e,t,a,i,n,l,c){this.switchTool=e,this.currentStyle=t,this.pages=a,this.files=i,this.history=n,this.clipboard=l,this.setStyle=c,this.doAction=async e=>this.actionMap[e](),this.setDash=async e=>{e===this.currentStyle.dash?this.setStyle(0,null,null):this.setStyle(e,null,null)},this.setStroke=async e=>{e===this.currentStyle.stroke?this.setStyle(null,"#000000",null):this.setStyle(null,e,null)},this.setFill=async e=>{e===this.currentStyle.fill?this.setStyle(null,null,0):this.setStyle(null,null,e)},this.canvas=this.pages.canvas,this.actionMap={previousPage:a.previousPage,nextPage:a.nextOrNewPage,addPage:a.nextOrNewPage,undo:n.undo,redo:n.redo,open:i.openFile,save:a.saveFile,export:a.export,cut:l.cut,copy:l.copy,paste:l.paste,deselect:()=>{this.canvas.discardActiveObject(),this.canvas.requestRenderAll()},selectAll:()=>{this.canvas.discardActiveObject(),this.canvas.setActiveObject(new h.fabric.ActiveSelection(this.canvas.getObjects(),{canvas:this.canvas})),this.canvas.requestRenderAll()},duplicate:()=>this.clipboard.copy().then(()=>this.clipboard.paste()),move:()=>this.switchTool(0),pen:()=>this.switchTool(1),eraser:()=>this.switchTool(2),laser:()=>this.switchTool(3),line:()=>this.switchTool(4),ellipse:()=>this.switchTool(6),rectangle:()=>this.switchTool(5),dotted:()=>this.setDash(2),dashed:()=>this.setDash(1),solid:()=>this.setDash(0),blue:()=>this.setStroke("#0097f6"),green:()=>this.setStroke("#00b253"),yellow:()=>this.setStroke("#ffbf00"),orange:()=>this.setStroke("#ff2600"),black:()=>this.setStroke("#000000"),transparent:()=>this.setFill(0),halfFilled:()=>this.setFill(2),filled:()=>this.setFill(1),resetStyles:()=>this.setStyle(0,"#000000",0),fullScreen:()=>this.doAction(document.fullscreenElement?s.ExitFullScreen:s.EnterFullScreen),enterFullScreen:()=>document.documentElement.requestFullscreen(),exitFullScreen:()=>document.exitFullscreen()}}}const p={q:s.Laser,w:s.Copy,e:s.Blue,esc:s.Deselect,r:s.Green,a:s.PreviousPage,s:s.NextPage,d:s.Pen,f:s.Undo,g:s.Paste,z:s.ResetStyles,x:s.Eraser,c:s.Line,v:s.Move,"shift + q":s.Dotted,"shift + w":s.Transparent,"shift + e":s.Ellipse,"shift + r":s.Rectangle,"shift + a":s.Dashed,"shift + s":s.HalfFilled,"shift + d":s.Black,"shift + f":s.Redo,"shift + z":s.Solid,"shift + x":s.Filled,"shift + c":s.Yellow,"shift + v":s.Orange,"ctrl + a":s.SelectAll,"ctrl + s":s.Save,"ctrl + d":s.Duplicate,"ctrl + z":s.Undo,"ctrl + x":s.Cut,"ctrl + c":s.Copy},v={tab:"[",q:"p",w:"o",e:"i",r:"u",t:"y",esc:"'",a:";",s:"l",d:"k",f:"j",g:"h",shift:"shift",z:"/",x:".",c:",",v:"m",b:"n"},b=e=>v[e]||e.slice(0,-1)+v[e.slice(-1)];class y{constructor(e,t,a){this.doAction=e,this.setStrict=t,this.updateState=a,this.keyMap={},this.save=()=>{window.localStorage.setItem("keyMap",JSON.stringify(this.keyMap))},this.bindAll=()=>{for(const[e,t]of Object.entries(this.keyMap))this.bind(e,t);this.updateState()},this.unbind=e=>{delete this.keyMap[e],o.a.unbind(e),o.a.unbind(b(e)),this.updateState(),this.save()},this.bind=(e,t)=>{this.keyMap[e]=t,o.a.bind(e,()=>this.doAction(this.keyMap[e])),o.a.bind(b(e),()=>this.doAction(this.keyMap[e])),this.updateState(),this.save()},this.reset=()=>{for(const e of Object.keys(this.keyMap))o.a.unbind(e),o.a.unbind(b(e));this.keyMap={...p},this.bindAll(),this.save()},o.a.bind("shift",()=>{this.setStrict(!0)},()=>{this.setStrict(!1)}),window.localStorage.getItem("keyMap")?(this.keyMap=JSON.parse(window.localStorage.getItem("keyMap")),this.bindAll()):this.reset()}}var g=a(16);const f=(e,t)=>n.a.createElement("i",{className:"fas fa-"+e,style:t});var w={close:f("times-circle"),previousPage:f("caret-left"),nextPage:f("caret-right"),addPage:f("plus",{transform:"scale(0.7)"}),undo:f("undo"),redo:f("redo"),move:f("mouse-pointer"),pen:f("pen"),eraser:f("eraser"),laser:f("asterisk"),line:f("minus",{transform:"rotate(-45deg)"}),ellipse:f("circle"),rectangle:f("square"),file:f("file"),open:f("folder-open"),save:f("save"),export:f("file-export"),cut:f("cut"),copy:f("copy"),paste:f("paste"),duplicate:f("clone"),fullScreen:f("expand"),enterFullScreen:f("expand"),exitFullScreen:f("compress"),black:f("circle",{color:"#000000"}),blue:f("circle",{color:"#0097f6"}),green:f("circle",{color:"#00b253"}),orange:f("circle",{color:"#ff2600"}),yellow:f("circle",{color:"#ffbf00"}),dotted:n.a.createElement("svg",{viewBox:"0 0 21 21",style:{width:"1em",height:"1.1em"}},n.a.createElement("g",{transform:"translate(-90 -1158)"},n.a.createElement("g",null,n.a.createElement("path",{d:"M104.184,1164.401l1.43-1.43c-1.294-1.035-2.878-1.721-4.613-1.913v2.021    C102.184,1163.25,103.27,1163.716,104.184,1164.401z"}),n.a.createElement("path",{d:"M95.816,1175.599l-1.43,1.43c1.294,1.035,2.878,1.721,4.613,1.913v-2.021C97.816,1176.75,96.73,1176.284,95.816,1175.599z"}),n.a.createElement("path",{d:"M94.401,1165.815l-1.429-1.43c-1.036,1.295-1.723,2.879-1.914,4.614h2.021    C93.25,1167.817,93.716,1166.731,94.401,1165.815z"}),n.a.createElement("path",{d:"M106.92,1171c-0.17,1.183-0.636,2.269-1.322,3.185l1.43,1.43c1.036-1.295,1.723-2.879,1.914-4.614H106.92z"})))),dashed:n.a.createElement("svg",{viewBox:"0 0 21 21",style:{width:"1em",height:"1.1em"}},n.a.createElement("g",{transform:"translate(-90 -1158)"},n.a.createElement("g",null,n.a.createElement("path",{d:"M101,1176.92v2.021c1.735-0.192,3.319-0.878,4.613-1.913l-1.43-1.43C103.269,1176.284,102.183,1176.75,101,1176.92z"}),n.a.createElement("path",{d:"M93.08,1171h-2.021c0.191,1.735,0.879,3.319,1.914,4.614l1.43-1.43C93.716,1173.269,93.25,1172.183,93.08,1171z"}),n.a.createElement("path",{d:"M104.184,1164.401l1.43-1.43c-1.294-1.035-2.878-1.721-4.613-1.913v2.021    C102.184,1163.25,103.27,1163.716,104.184,1164.401z"}),n.a.createElement("path",{d:"M106.92,1169h2.021c-0.191-1.735-0.879-3.319-1.914-4.614l-1.43,1.43C106.284,1166.731,106.75,1167.817,106.92,1169z"}),n.a.createElement("path",{d:"M95.816,1175.599l-1.43,1.43c1.294,1.035,2.878,1.721,4.613,1.913v-2.021C97.816,1176.75,96.73,1176.284,95.816,1175.599z"}),n.a.createElement("path",{d:"M94.401,1165.815l-1.429-1.43c-1.036,1.295-1.723,2.879-1.914,4.614h2.021    C93.25,1167.817,93.716,1166.731,94.401,1165.815z"}),n.a.createElement("path",{d:"M99,1163.08v-2.021c-1.735,0.192-3.319,0.878-4.613,1.913l1.43,1.43C96.731,1163.716,97.817,1163.25,99,1163.08z"}),n.a.createElement("path",{d:"M106.92,1171c-0.17,1.183-0.636,2.269-1.322,3.185l1.43,1.43c1.036-1.295,1.723-2.879,1.914-4.614H106.92z"})))),solid:n.a.createElement("i",{className:"far fa-circle"}),transparent:n.a.createElement("i",{className:"far fa-circle"}),halfFilled:n.a.createElement("div",{style:{height:"0.7em",marginRight:"1em",position:"relative"}},n.a.createElement("i",{className:"fas fa-circle",style:{left:"50%",opacity:.3,position:"absolute",top:0}}),n.a.createElement("i",{className:"far fa-circle",style:{left:"50%",position:"absolute",top:0}})),filled:f("circle"),resetStyles:null};var S=e=>n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:e.className||void 0,"data-tip":!0,"data-for":e.action,onClick:()=>e.callback(e.action)},w[e.action]),n.a.createElement(g.a,{backgroundColor:"#ddd",effect:"solid",id:e.action,place:"right",textColor:"#262626"},u(e.action)));var E=e=>{const[t,a]=Object(i.useState)(0),[l,c]=Object(i.useState)("0.6em");Object(i.useEffect)(()=>{a(e.currentPage),c(.6*e.currentPage.toString().length+"em")},[e]);const r=async()=>{if(!t)return;const s=Number(t);!s||s>e.totalPages?a(e.currentPage):await e.loadPage(s-1)};Object(i.useEffect)(()=>{r()},[t]);return n.a.createElement("div",{className:"pagination visibility-"+e.visibility},n.a.createElement(S,{className:1===e.currentPage?"disabled":void 0,action:s.PreviousPage,callback:e.doAction}),n.a.createElement("form",{onSubmit:e=>(null==e||e.preventDefault(),r())},n.a.createElement("input",{onChange:e=>a(e.target.value),type:"text",value:t,style:{width:l},tabIndex:-1})),n.a.createElement("span",{className:"total-pages"}," / ",e.totalPages),e.currentPage===e.totalPages?n.a.createElement(S,{action:s.AddPage,callback:e.doAction}):n.a.createElement(S,{action:s.NextPage,callback:e.doAction}))};var k=e=>n.a.createElement("div",{className:"undoredo visibility-"+e.visibility},n.a.createElement(S,{action:s.Undo,callback:e.doAction,className:e.canUndo?void 0:"disabled"}),n.a.createElement(S,{action:s.Redo,callback:e.doAction,className:e.canRedo?void 0:"disabled"}));var O=e=>{const t=[s.Move,s.Pen,s.Eraser,s.Laser,s.Line,s.Rectangle,s.Ellipse];return n.a.createElement("div",{className:"toolbar visibility-"+e.visibility},t.map((t,a)=>n.a.createElement(S,{action:t,callback:e.doAction,className:a===e.currentTool?"active":void 0,key:t})))};var x=e=>n.a.createElement("div",{className:`button-row ${e.cName} ${e.outerButton?"button-row-hover":""}`},e.outerButton,n.a.createElement("div",{className:"button-row-inner"},e.actions.map((t,a)=>{var s;return n.a.createElement(S,{action:t,className:null===(s=e.className)||void 0===s?void 0:s.call(e,t,a),callback:e.callback,key:t})})));const A=e=>{const t=[s.Solid,s.Dashed,s.Dotted],a=n.a.createElement("button",{className:"inactive"},w[t[e.dashStyle]]);return n.a.createElement(x,{actions:t,className:(t,a)=>e.inContext&&e.dashStyle===a&&"active",callback:e.callback,outerButton:!e.inContext&&a})},C=e=>{const t=[s.Black,s.Blue,s.Green,s.Yellow,s.Orange],a=["#000000","#0097f6","#00b253","#ffbf00","#ff2600"],i=n.a.createElement("button",{className:"inactive"},n.a.createElement("i",{className:"fas fa-circle",style:{color:e.strokeStyle}}));return n.a.createElement(x,{actions:t,className:(t,s)=>e.inContext&&e.strokeStyle===a[s]&&"active",callback:e.callback,outerButton:!e.inContext&&i})},P=e=>{const t=[s.Transparent,s.Filled,s.HalfFilled],a=n.a.createElement("button",{className:"inactive"},w[t[e.fillStyle]]);return n.a.createElement(x,{actions:t,className:(t,a)=>e.inContext&&e.fillStyle===a&&"active",callback:e.callback,outerButton:!e.inContext&&a})};var N=e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(A,{dashStyle:e.currentStyle?e.currentStyle.dash:null,callback:e.doAction,inContext:e.inContext}),n.a.createElement(C,{strokeStyle:e.currentStyle?e.currentStyle.stroke:null,callback:e.doAction,inContext:e.inContext}),n.a.createElement(P,{fillStyle:e.currentStyle?e.currentStyle.fill:null,callback:e.doAction,inContext:e.inContext}));var j=e=>{const t=Object(i.useRef)(null),a=n.a.createElement("button",{className:"inactive"},w.file),l=[s.Open,s.Save,s.Export],c=[s.Copy,s.Paste],r=e.isMobile?[s.FullScreen]:[],[o,h]=Object(i.useState)(!1);return Object(i.useEffect)(()=>{h(Boolean(document.fullscreenElement)),document.addEventListener("fullscreenchange",()=>h(Boolean(document.fullscreenElement)))},[]),n.a.createElement("div",{className:"stylebar visibility-"+e.visibility},n.a.createElement("input",{accept:"",onChange:t=>e.acceptFile(t.target.files),multiple:!1,ref:t,type:"file"}),n.a.createElement(x,{actions:l,callback:async a=>{a===s.Open?t.current.click():await e.doAction(a)},cName:"file-actions",outerButton:a}),n.a.createElement(x,{actions:c,cName:"other-actions vertical",callback:e.doAction}),n.a.createElement(N,{currentStyle:e.currentStyle,doAction:e.doAction}),n.a.createElement(x,{actions:r.map(e=>e===s.FullScreen?o?s.ExitFullScreen:s.EnterFullScreen:e),callback:e.doAction,cName:"mobile-actions vertical"}))},F=a(4),M=a.n(F);M.a.setAppElement("#Overlay");const D=[s.AddPage,s.EnterFullScreen,s.ExitFullScreen];var R=e=>n.a.createElement(M.a,{className:"modal",overlayClassName:"modal-overlay binding-modal",isOpen:""!==e.letter},n.a.createElement("button",{className:"close",onClick:()=>e.close()},w.close),n.a.createElement("p",null,"Changing ",n.a.createElement("span",{className:"binding"},e.letter)," binding…"),n.a.createElement("div",{className:"tools"},n.a.createElement("button",{className:void 0===e.action?"active":void 0,onClick:()=>e.callback(null)},n.a.createElement("span",{style:{left:"0.25em"}},"none")),Object.values(s).map(t=>!D.includes(t)&&n.a.createElement("button",{key:t,className:e.action===t?"active":void 0,onClick:()=>e.callback(t)},w[t],n.a.createElement("span",{style:w[t]?{}:{left:"0.25em"}},u(t))))));M.a.setAppElement("#Overlay");const B=e=>n.a.createElement("div",{className:"key",style:{width:e.width}},n.a.createElement("span",{className:"letter"},e.leftHanded?b(e.letter):e.letter),n.a.createElement("div",{className:"action"},n.a.createElement("span",{className:"unassigned"},e.label||""))),I=e=>n.a.createElement("button",{className:"key",onClick:()=>e.callback(e.letter)},n.a.createElement("div",{className:"action"},e.action&&w[e.action],n.a.createElement("span",{className:e.action?void 0:"unassigned"},u(e.action)||"none")),n.a.createElement("span",{className:"letter"},e.leftHanded?b(e.letter):e.letter));var T=e=>{const[t,a]=Object(i.useState)(""),[s,l]=Object(i.useState)(void 0),c=[{header:n.a.createElement(B,{letter:"tab",label:"Hide Toolbar",width:"4.5em",leftHanded:e.leftHanded}),letters:"qwert".split("")},{header:n.a.createElement(B,{letter:"esc",label:"Deselect",width:"6em",leftHanded:e.leftHanded}),letters:"asdfg".split("")},{header:n.a.createElement(B,{letter:"shift",label:"Snap",width:"7.5em",leftHanded:e.leftHanded}),letters:"zxcvb".split("")}],r=t=>""===e.modifier?t:`${e.modifier} + ${t}`,o=t=>{a(r(t)),l(e.keyMap[r(t)])};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"bindings"},c.map(({header:t,letters:a},s)=>n.a.createElement("div",{className:"row "+(e.leftHanded?"left":""),key:s},!e.leftHanded&&t,(e.leftHanded?a.reverse():a).map(t=>n.a.createElement(I,{key:t,letter:t,action:e.keyMap[r(t)],callback:o,leftHanded:e.leftHanded})),e.leftHanded&&t))),n.a.createElement(R,{letter:t,action:s,close:()=>a(""),callback:s=>{e.unbind(t),s&&e.bind(t,s),a("")}}))};M.a.setAppElement("#Overlay");var H=e=>{const[t,a]=Object(i.useState)(""),[s,l]=Object(i.useState)(!1);return Object(i.useEffect)(()=>{"true"===window.localStorage.getItem("leftHanded")&&l(!0)},[]),n.a.createElement(M.a,{className:"modal",overlayClassName:"modal-overlay help-modal",isOpen:e.isOpen},n.a.createElement("button",{className:"close",onClick:()=>e.toggleOpen()},w.close),n.a.createElement("p",null,n.a.createElement("span",{style:{fontSize:"1.5em",fontWeight:"bold"}},"qboard")," ",n.a.createElement("span",{style:{color:"#666",marginLeft:"0.2em"}},"The efficient digital whiteboard.")),n.a.createElement("p",null,"Press ",n.a.createElement("b",null,s?"0":"1")," to show or hide this screen."),n.a.createElement("p",null,n.a.createElement("button",{className:""===t?"active":void 0,onClick:()=>a("")},"unmodified"),n.a.createElement("button",{className:"shift"===t?"active":void 0,onClick:()=>a("shift")},"with shift"),n.a.createElement("button",{className:"ctrl"===t?"active":void 0,onClick:()=>a("ctrl")},"with ctrl"),n.a.createElement("button",{onClick:()=>{l(e=>(window.localStorage.setItem("leftHanded",e?"false":"true"),!e))}},s?"show left side":"show right side")),n.a.createElement(T,{bind:e.bind,unbind:e.unbind,keyMap:e.keyMap,modifier:t,leftHanded:s}),n.a.createElement("p",null,"Click a key to change the binding."," ",n.a.createElement("button",{onClick:()=>e.reset()},"reset to default")),n.a.createElement("p",{style:{color:"#666"}},"By ",n.a.createElement("a",{href:"https://cjquines.com/"},"CJ Quines"),". View on"," ",n.a.createElement("a",{href:"https://github.com/cjquines/qboard"},"Github"),". Use"," ",n.a.createElement("a",{onClick:()=>e.toggleMobility(),tabIndex:0},e.isMobile?"desktop":"mobile"," site"),"."))};var z=e=>{const[t,a]=Object(i.useState)(null);return Object(i.useEffect)(()=>{document.addEventListener("contextmenu",e=>{e.preventDefault(),a(t=>t?null:[e.clientX,e.clientY])}),document.addEventListener("click",()=>a(null))},[]),t?n.a.createElement("div",{className:"context-menu",style:{top:`calc(${t[1]}px - 2.8em)`,left:`calc(${t[0]}px - 1.1em)`}},n.a.createElement(N,{currentStyle:e.currentStyle,doAction:t=>e.doAction(t),inContext:!0})):null};var q=e=>{const{qboard:t}=e,[a,s]=Object(i.useState)(2),[l,c]=Object(i.useState)(!1),[r,h]=Object(i.useState)(!1),[d,u]=Object(i.useState)({dragActive:!1,currentPage:0,totalPages:0,currentTool:0,currentStyle:{dash:0,stroke:"#000000",fill:0},canUndo:!1,canRedo:!1,keyMap:p}),m=()=>{c(e=>(window.localStorage.setItem("helpModalOpen",e?"false":"true"),!e))};return Object(i.useEffect)(()=>{"false"!==window.localStorage.getItem("helpModalOpen")&&c(!0),"false"!==window.localStorage.getItem("isMobile")&&h(!0),t.callback=u,t.updateState(),o.a.bind("tab",()=>{s(e=>(e+2)%3)}),o.a.bind("1",()=>m()),o.a.bind("0",()=>m())},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"drop-area "+(d.dragActive?"active":"")}),n.a.createElement("div",{className:"overlay visibility-"+a},n.a.createElement(E,{loadPage:t.pages.loadPage,currentPage:d.currentPage,totalPages:d.totalPages,doAction:t.action.doAction,visibility:a}),n.a.createElement(k,{canUndo:d.canUndo,canRedo:d.canRedo,doAction:t.action.doAction,visibility:a}),n.a.createElement(O,{currentTool:d.currentTool,doAction:t.action.doAction,visibility:a}),n.a.createElement(j,{currentStyle:d.currentStyle,doAction:t.action.doAction,acceptFile:async e=>t.history.execute((await t.files.acceptFile(e)).history),visibility:a,isMobile:r}),n.a.createElement(H,{bind:t.keyboard.bind,unbind:t.keyboard.unbind,reset:t.keyboard.reset,keyMap:d.keyMap,isOpen:l,toggleOpen:m,isMobile:r,toggleMobility:()=>{h(e=>(window.localStorage.setItem("isMobile",e?"false":"true"),!e))}})),n.a.createElement(z,{currentStyle:d.currentStyle,doAction:t.action.doAction}))},J=a(7);const U=(e,t,a,s,i)=>e.map(e=>((e,t,a,s,i,n)=>{const l=i-e,c=n-t,r=a*c-s*l,o=a*a+s*s;return[Math.abs(r)/o,e+l+s*r/o,t+c-a*r/o]})(t,a,e[0],e[1],s,i)).reduce((e,t)=>e[0]<t[0]?e:t);const W=[new class{constructor(){this.tool=0,this.isBrush=!1}},new class{constructor(){this.tool=1,this.isBrush=!0,this.setBrush=async(e,t)=>{e.color=t.stroke,e.strokeDashArray=t.strokeDashArray,e.width=t.strokeWidth}}},new class{constructor(){this.tool=2,this.isBrush=!0,this.setBrush=async(e,t)=>{e.color="#ff005455",e.strokeDashArray=[0,0],e.width=5*t.strokeWidth}}},new class{constructor(){this.tool=3,this.isBrush=!0,this.setBrush=async(e,t)=>{e.color="#f23523",e.strokeDashArray=[0,0],e.width=t.strokeWidth}}},new class{constructor(){this.tool=4,this.isBrush=!1,this.dirs=[[1,0],[1,1],[0,1],[-1,1]],this.draw=async(e,t,a,s,i)=>(this.x=e,this.y=t,new Promise(n=>{n(new h.fabric.Line([e,t,s,i],{...a,perPixelTargetFind:!0}))})),this.resize=async(e,t,a,s)=>{let[i,n]=[t,a];return s&&([,i,n]=U(this.dirs,this.x,this.y,t,a)),e.set({x2:i,y2:n}).setCoords(),new Promise(t=>{t(e)})}}},new class{constructor(){this.tool=5,this.isBrush=!1,this.dirs=[[1,1],[-1,1]],this.draw=async(e,t,a,s,i)=>(this.x=e,this.y=t,new Promise(n=>{n(new h.fabric.Rect({left:e,top:t,width:s,height:i,...a}))})),this.resize=async(e,t,a,s)=>{let[i,n]=[t,a];return s&&([,i,n]=U(this.dirs,this.x,this.y,t,a)),e.set({originX:this.x>i?"right":"left",originY:this.y>n?"bottom":"top",width:Math.abs(this.x-i),height:Math.abs(this.y-n)}).setCoords(),new Promise(t=>{t(e)})}}},new class{constructor(){this.tool=6,this.isBrush=!1,this.dirs=[[1,1],[-1,1]],this.draw=async(e,t,a,s,i)=>(this.x=e,this.y=t,new Promise(n=>{n(new h.fabric.Ellipse({left:e,top:t,rx:s,ry:i,...a}))})),this.resize=async(e,t,a,s)=>{let[i,n]=[t,a];return s&&([,i,n]=U(this.dirs,this.x,this.y,t,a)),e.set({originX:this.x>i?"right":"left",originY:this.y>n?"bottom":"top",rx:Math.abs(i-e.left)/2,ry:Math.abs(n-e.top)/2}).setCoords(),new Promise(t=>{t(e)})}}}];class L extends h.fabric.Canvas{constructor(){super(...arguments),this.latestId=0,this.modified=!1,this.fitToWindow=async(e,t)=>{const a=window.innerWidth/e,s=window.innerHeight/t;this.setZoom(Math.min(a,s)),this.setWidth(e*this.getZoom()),this.setHeight(t*this.getZoom()),this.canvasWidth=e,this.canvasHeight=t},this.deactivateSelection=async()=>{this.isDrawingMode=!1,this.selection=!1,this.discardActiveObject(),this.forEachObject(e=>{e.selectable=!1}),this.requestRenderAll()},this.activateSelection=async()=>{this.isDrawingMode=!1,this.selection=!0,this.forEachObject(e=>{e.selectable=!0})},this.getNextId=async()=>(this.latestId+=1,this.latestId),this.getObjectByIds=e=>this.getObjects().filter(t=>e.includes(t.id)),this.serialize=async e=>{const t=this.getActiveObjects(),a=t.length>1&&e.some(e=>t.includes(e));a&&this.discardActiveObject();const s=e.map(e=>e.toObject(["strokeUniform"]));return a&&this.setActiveObject(new h.fabric.ActiveSelection(t,{canvas:this})),s},this.apply=(e,t)=>{const a=this.getObjectByIds(e);if(a.length&&this.remove(...a),null==t?void 0:t.length){const a=t=>{t.forEach((t,a)=>{t.id=e[a]}),this.add(...t),this.requestRenderAll()};h.fabric.util.enlivenObjects(t,a,"fabric")}else this.requestRenderAll()},this.loadFromJSONAsync=async e=>new Promise(t=>{super.loadFromJSON(e,()=>{t()})}),this.placeObject=async(e,t=this.cursor)=>{const{x:a=this.canvasWidth/2,y:s=this.canvasHeight/2}=t||{};this.discardActiveObject();const i=await this.getNextId();return e.set({id:i,left:a,top:s,originX:"center",originY:"center"}),e._objects?(e.canvas=this,e.forEachObject(e=>this.getNextId().then(t=>{e.id=t,this.add(e)})),e.setCoords()):this.add(e),this.setActiveObject(e),this.requestRenderAll(),e._objects||[e]}}}var Y=a(15),$=a.n(Y);class G{}G.readAsText=e=>new Promise((t,a)=>{const s=new FileReader;s.onload=()=>{t(s.result)},s.onerror=a,s.readAsText(e)}),G.readAsDataURL=e=>new Promise((t,a)=>{const s=new FileReader;s.onload=()=>{t(s.result)},s.onerror=a,s.readAsDataURL(e)});class _{static read(e){const t=JSON.parse(e.toString());return _.readParsed(t)}static readParsed(e){return Object(J.Assert)((e=>e instanceof Object&&"qboard-version"in e)(e)),e.pages}}class X{constructor(e){this.toString=()=>(void 0!==this.stringified||(this.stringified=JSON.stringify(this.sourceJSON)),this.stringified),this.toBlob=()=>new Blob([this.toString()],{type:"application/json"}),this.toURL=()=>{const e=window.URL.createObjectURL(this.toBlob());return[e,()=>window.URL.revokeObjectURL(e)]},this.sourceJSON={"qboard-version":1,pages:e}}}class Q{constructor(e){this.pages=e,this.processFiles=async(e,t)=>{const a=[];return await Promise.all([...e].map(async e=>{if(e.type.startsWith("image/")&&a.push(await this.handleImage(e,t)),"application/json"===e.type)return this.handleJSON(e)})),{add:a.flat()}},this.acceptFile=async(e,t)=>{if(!e.length)return{action:"none"};const[a]=e;return a.type.startsWith("image/")?{action:"image",history:{add:await this.handleImage(a,t)}}:"application/json"===a.type?(await this.openFile(a),{action:"json",history:{clear:[!0]}}):{action:"none"}},this.openFile=async e=>(this.pages.savePage(),this.pages.overwritePages(_.read(await G.readAsText(e)))),this.handleImage=async(e,t)=>new Promise(a=>G.readAsDataURL(e).then(e=>h.fabric.Image.fromURL(e.toString(),e=>{a(this.pages.canvas.placeObject(e,t))}))),this.handleJSON=async e=>{const t=_.read(await G.readAsText(e));return this.pages.insertPages(this.pages.currentIndex+1,t)}}}const Z={version:"4.2.0",objects:[],background:"white"},V=()=>{const e=6e4*(new Date).getTimezoneOffset();return new Date(Date.now()-e).toISOString().slice(0,-8).replace(/\D/g,"-")};class K{constructor(e,t,a,s,i=[Z]){this.canvas=e,this.canvasWidth=t,this.canvasHeight=a,this.updateState=s,this.pagesJSON=i,this.currentIndex=0,this.savePage=()=>{this.pagesJSON[this.currentIndex]=this.canvas.toObject(["id","strokeUniform"])},this.loadPage=async(e,t=!1,a=!1)=>e!==this.currentIndex||a?(t||this.savePage(),await this.canvas.loadFromJSONAsync(this.pagesJSON[e]),this.currentIndex=e,t&&!a||this.updateState(),e):e,this.newPage=async(e=!1)=>(this.pagesJSON.splice(this.currentIndex+1,0,Z),this.loadPage(this.currentIndex+1,e)),this.previousPage=async()=>0===this.currentIndex?0:this.loadPage(this.currentIndex-1),this.nextOrNewPage=async(e=!1)=>this.currentIndex===this.pagesJSON.length-1?this.newPage(e):this.loadPage(this.currentIndex+1,e),this.export=async()=>{this.savePage();const e=[],t=this.currentIndex;for(const t of this.pagesJSON)await this.canvas.loadFromJSONAsync(t),e.push({svg:this.canvas.toSVG(),width:this.canvasWidth/2});const a={pageSize:{width:this.canvasWidth/2,height:this.canvasHeight/2},pageMargins:[0,0],content:e};$.a.createPdf(a).download(`qboard-${V()}.pdf`),await this.canvas.loadFromJSONAsync(this.pagesJSON[t])},this.saveFile=()=>{this.savePage();const[e,t]=new X(this.pagesJSON).toURL(),a=document.createElement("a");a.style.display="none",a.href=e,a.download=`qboard-${V()}.json`,document.body.appendChild(a),a.click(),a.parentElement.removeChild(a),t(),this.canvas.modified=!1},this.overwritePages=async(e=[Z])=>!(this.canvas.modified&&!this.pagesJSON.every(e=>0===e.objects.length)&&!window.confirm("Your work will be overwritten. Are you sure you wish to continue?"))&&(this.pagesJSON=e,await this.loadPage(0,!0,!0),this.canvas.modified=!1,!0),this.insertPages=async(e,t)=>(this.pagesJSON.splice(e,0,...t),this.canvas.modified=!0,this.loadPage(e))}}class ee{constructor(e,t,a){this.canvas=e,this.pages=t,this.updateState=a,this.history=[],this.redoStack=[],this.locked=!1,this.execute=async(e={})=>{e.clear&&this.clear(e.clear[0]);const t=[this.add(e.add),this.remove(e.remove)];return Promise.all(t)},this.add=async e=>(null==e?void 0:e.length)&&this.save(null,e),this.remove=async e=>(null==e?void 0:e.length)&&this.save(e,null),this.clear=(e=!1)=>{this.history=[],e&&(this.redoStack=[]),this.updateState()},this.store=async e=>{this.locked||(this.locked=!0,this.selection=await this.canvas.serialize(e),this.locked=!1)},this.modify=async e=>this.save(this.selection,e),this.save=async(e,t)=>{if(this.locked)return;const a=t||e;this.locked=!0,this.history.push({ids:a.map(e=>e.id),oldObjects:t?e:await this.canvas.serialize(e),newObjects:t&&await this.canvas.serialize(t),page:this.pages.currentIndex}),this.locked=!1,this.redoStack=[],this.canvas.modified=!0,this.updateState()},this.undo=async()=>{this.history.length&&(this.canvas.discardActiveObject(),await this.move(this.history,this.redoStack,!0))},this.redo=async()=>{this.redoStack.length&&await this.move(this.redoStack,this.history,!1)},this.move=async(e,t,a)=>{this.locked=!0;const s=e.pop();await this.pages.loadPage(s.page),this.canvas.apply(s.ids,a?s.oldObjects:s.newObjects),t.push(s),this.locked=!1,this.canvas.modified=!0,this.updateState()}}}class te{constructor(e,t,a,s,i,n){this.canvas=e,this.pages=t,this.files=a,this.history=s,this.canvasWidth=i,this.canvasHeight=n,this.copy=async()=>{const e=this.canvas.getActiveObject();return e?(e.clone(e=>{this.clipboard=e}),e):null},this.cut=async()=>{const e=await this.copy();return!!e&&(this.canvas.discardActiveObject(),"activeSelection"===e.type?(e.forEachObject(e=>{this.canvas.remove(e)}),await this.history.remove(e._objects)):(this.canvas.remove(e),await this.history.remove([e])),this.canvas.requestRenderAll(),!0)},this.paste=async()=>{if(this.clipboard)return this.clipboard.clone(e=>this.canvas.placeObject(e).then(this.history.add))},this.pasteExternal=async e=>{const t=await this.files.processFiles(e.clipboardData.files);await this.history.execute(t),await this.paste()},window.addEventListener("paste",this.pasteExternal)}}const ae=[[0,0],[20,15],[5,10]];class se{constructor(e,t,a,s){this.currentStyle=e,this.drawerOptions=t,this.freeDrawingBrush=a,this.updateState=s,this.set=(e,t,a)=>{if(null!==e&&(this.currentStyle.dash=e,this.drawerOptions.strokeDashArray=ae[e],this.freeDrawingBrush.strokeDashArray=ae[e]),null!==t&&(this.currentStyle.stroke=t,this.drawerOptions.stroke=t,this.freeDrawingBrush.color=t),null!==a&&(this.currentStyle.fill=a),null!==t||null!==a)switch(this.currentStyle.fill){case 0:this.drawerOptions.fill="transparent";break;case 1:this.drawerOptions.fill=this.currentStyle.stroke;break;case 2:this.drawerOptions.fill=this.currentStyle.stroke+"11"}this.updateState()}}}a(46);var ie=new class{constructor(e,t,a,s){this.canvasElement=e,this.baseCanvasElement=t,this.canvasWidth=a,this.canvasHeight=s,this.handlers=W,this.currentStyle={dash:0,stroke:"#000000",fill:0},this.drawerOptions={fill:"transparent",stroke:"#000000",strokeWidth:4,selectable:!1,strokeDashArray:[0,0],strokeUniform:!0},this.dragActive=!1,this.isDown=!1,this.strict=!1,this.updateState=()=>{var e;null===(e=null==this?void 0:this.callback)||void 0===e||e.call(this,{dragActive:this.dragActive,currentPage:this.pages.currentIndex+1,totalPages:this.pages.pagesJSON.length,currentTool:this.currentTool,currentStyle:this.currentStyle,canUndo:this.history.history.length>0,canRedo:this.history.redoStack.length>0,keyMap:this.keyboard.keyMap})},this.switchTool=async e=>{var t,a;2===e&&await this.clipboard.cut()||(this.currentTool=e,this.tool=this.handlers[e],0===e||this.tool.isBrush?(await this.baseCanvas.activateSelection(),this.canvasElement.parentElement.style.display="none",await(null===(a=(t=this.tool).setBrush)||void 0===a?void 0:a.call(t,this.baseCanvas.freeDrawingBrush,this.drawerOptions))):(await this.baseCanvas.deactivateSelection(),this.canvasElement.parentElement.style.display="block"),this.baseCanvas.isDrawingMode=this.tool.isBrush,this.updateState())},this.windowResize=async()=>{clearTimeout(this.resizeCooldown),this.resizeCooldown=setTimeout(async()=>{await this.canvas.fitToWindow(this.canvasWidth,this.canvasHeight),await this.baseCanvas.fitToWindow(this.canvasWidth,this.canvasHeight)},100)},this.mouseDown=async e=>{if(!this.tool.draw)return;const{x:t,y:a}=this.canvas.getPointer(e.e);this.isDown=!0,this.currentObject=await this.tool.draw(t,a,this.drawerOptions),this.currentObject.id=await this.baseCanvas.getNextId(),this.canvas.add(this.currentObject),this.canvas.requestRenderAll()},this.mouseMove=async e=>{if(!this.tool.draw||!this.isDown)return;const{x:t,y:a}=this.canvas.getPointer(e.e);await this.tool.resize(this.currentObject,t,a,this.strict),this.canvas.requestRenderAll()},this.mouseUp=async()=>{this.tool.draw&&(this.isDown=!1,this.baseCanvas.add(h.fabric.util.object.clone(this.currentObject)),this.baseCanvas.requestRenderAll(),this.canvas.remove(this.currentObject),this.canvas.requestRenderAll(),await this.history.add([this.currentObject]))},this.setDragActive=e=>{this.dragActive=e,this.updateState()},this.drop=async e=>{e.e.stopPropagation(),e.e.preventDefault(),this.updateCursor(e),this.setDragActive(!1);const t=await this.files.processFiles(e.e.dataTransfer.files);await this.history.execute(t)},this.pathCreated=async e=>{if(1===this.currentTool)e.path.id=await this.baseCanvas.getNextId(),await this.history.add([e.path]);else if(2===this.currentTool){const t=h.fabric.util.object.clone(e.path);this.baseCanvas.remove(e.path);const a=this.baseCanvas.getObjects().filter(e=>e.intersectsWithObject(t));if(!a.length)return;this.baseCanvas.remove(...a),await this.history.remove(a)}else 3===this.currentTool&&setTimeout(async()=>{this.baseCanvas.remove(e.path),this.baseCanvas.requestRenderAll()},1e3)},this.selectionCreated=e=>!this.history.locked&&this.history.store(e.selected),this.objectModified=async e=>{await this.history.modify(e.target._objects||[e.target]),await this.history.store(e.target._objects||[e.target])},this.updateCursor=e=>{const{x:t,y:a}=this.baseCanvas.getPointer(e.e);this.baseCanvas.cursor={x:t,y:a}};const i=new URLSearchParams(window.location.search);this.baseCanvas=new L(t,{backgroundColor:"white",renderOnAddRemove:!1,selection:!1,targetFindTolerance:15}),this.canvas=new L(e,{renderOnAddRemove:!1,selection:!1}),this.pages=new K(this.baseCanvas,this.canvasWidth,this.canvasHeight,this.updateState),null!==i.get("json")&&J.Network.loadJSON(i.get("json")).then(_.readParsed).then(this.pages.overwritePages).catch(console.error),this.files=new Q(this.pages),this.history=new ee(this.baseCanvas,this.pages,this.updateState),this.clipboard=new te(this.baseCanvas,this.pages,this.files,this.history,this.canvasWidth,this.canvasHeight),this.style=new se(this.currentStyle,this.drawerOptions,this.baseCanvas.freeDrawingBrush,this.updateState),this.action=new m(this.switchTool,this.currentStyle,this.pages,this.files,this.history,this.clipboard,this.style.set),this.keyboard=new y(this.action.doAction,e=>this.strict=e,this.updateState),this.switchTool(0),this.windowResize(),window.onresize=this.windowResize,window.onbeforeunload=()=>this.baseCanvas.modified||null,this.canvas.on("mouse:down",this.mouseDown),this.canvas.on("mouse:move",this.mouseMove),this.canvas.on("mouse:up",this.mouseUp),this.baseCanvas.on("dragenter",()=>this.setDragActive(!0)),this.baseCanvas.on("dragleave",()=>this.setDragActive(!1)),this.baseCanvas.on("drop",this.drop),this.baseCanvas.on("path:created",this.pathCreated),this.baseCanvas.on("selection:created",this.selectionCreated),this.baseCanvas.on("object:modified",this.objectModified),this.baseCanvas.on("mouse:move",this.updateCursor)}}(document.querySelector("#QBoard"),document.querySelector("#BaseQBoard"),1600,900);c.a.render(n.a.createElement(q,{qboard:ie}),document.querySelector("#Overlay"))}},[[47,1,2]]]);
//# sourceMappingURL=main.1937c45d.js.map