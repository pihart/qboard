(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t){},116:function(e,t){},117:function(e,t){},324:function(e,t,s){},325:function(e,t,s){"use strict";s.r(t);var a,i=s(0),n=s.n(i),r=s(53),l=s.n(r),c=s(21),o=s.n(c),h=s(11),d=s(24),u=s(104),p=s.n(u);!function(e){e.PreviousPage="previousPage",e.NextPage="nextPage",e.AddPageStart="addPageStart",e.AddPageEnd="addPageEnd",e.Undo="undo",e.Redo="redo",e.Open="open",e.Save="save",e.Export="export",e.Cut="cut",e.Copy="copy",e.Paste="paste",e.Deselect="deselect",e.SelectAll="selectAll",e.Duplicate="duplicate",e.Move="move",e.Pen="pen",e.Eraser="eraser",e.Laser="laser",e.Line="line",e.Ellipse="ellipse",e.Rectangle="rectangle",e.LaTeX="latex",e.Dotted="dotted",e.Dashed="dashed",e.Solid="solid",e.Black="black",e.Blue="blue",e.Green="green",e.Orange="orange",e.Yellow="yellow",e.Transparent="transparent",e.HalfFilled="halfFilled",e.Filled="filled",e.Help="help",e.ResetStyles="resetStyles",e.FullScreen="fullScreen",e.EnterFullScreen="enterFullScreen",e.ExitFullScreen="exitFullScreen"}(a||(a={}));const v={previousPage:"–Page",nextPage:"+Page",addPageStart:"-Page",addPageEnd:"+Page",selectAll:"Select All",duplicate:"Clone",eraser:"Cut / Eraser",rectangle:"Rect.",latex:"LaTeX",transparent:"Unfilled",halfFilled:"Half Fill",resetStyles:"Reset Styles",fullScreen:"Full Screen",enterFullScreen:"Enter Full Screen",exitFullScreen:"Exit Full Screen"},m=e=>{var t;const s=null!==(t=v[e])&&void 0!==t?t:e;return s[0].toUpperCase()+s.slice(1)};class g extends d.MalformedExpressionException{constructor(e,t){super(void 0===t?e:`${e}\n\nin LaTeX ${t}`)}}class b{constructor(e,t,s,i,n,r,l,c,o){this.switchTool=e,this.currentStyle=s,this.pages=i,this.files=n,this.history=r,this.clipboard=l,this.setStyle=c,this.globalState=o,this.doAction=e=>this.actionMap[e](),this.setDash=e=>{e===this.currentStyle.dash?this.setStyle(0,null,null):this.setStyle(e,null,null)},this.setStroke=e=>{e===this.currentStyle.stroke?this.setStyle(null,"#000000",null):this.setStyle(null,e,null)},this.setFill=e=>{e===this.currentStyle.fill?this.setStyle(null,null,0):this.setStyle(null,null,e)},this.requestTeX=async()=>{var e,t;const s=window.prompt("Enter LaTeX source");if(null===s)return"no latex entered";const a=p()(`\\text{${s}}`),i=(new window.DOMParser).parseFromString(a,"image/svg+xml").querySelector('[data-mml-node="merror"]');if(null!==i){const s=i.getAttribute("title");return console.error(new g(s,null!==(t=null===(e=i.querySelector('[data-mml-node="mtext"] text'))||void 0===e?void 0:e.textContent)&&void 0!==t?t:void 0),i),window.alert(`Error in LaTeX: ${s}\n\nMore details printed to console.`),"invalid latex"}const n=await this.canvas.addImage("data:image/svg+xml,"+encodeURIComponent(a),{},{scaleX:3,scaleY:3});return this.history.add([n]),await this.history.undo(),await this.history.redo(),"success"},this.canvas=this.pages.canvas,this.actionMap={previousPage:i.previousOrNewPage,nextPage:i.nextOrNewPage,addPageStart:i.previousOrNewPage,addPageEnd:i.nextOrNewPage,undo:r.undo,redo:r.redo,open:()=>{var e,t;return null===(t=null===(e=o.fileInputRef)||void 0===e?void 0:e.current)||void 0===t?void 0:t.click()},save:i.saveFile,export:i.export,cut:l.cut,copy:l.copy,paste:l.paste,deselect:()=>{this.canvas.discardActiveObject(),this.canvas.requestRenderAll()},selectAll:()=>{this.canvas.discardActiveObject(),this.canvas.setActiveObject(new h.fabric.ActiveSelection(this.canvas.getObjects(),{canvas:this.canvas})),this.canvas.requestRenderAll()},duplicate:()=>{this.clipboard.copy(),this.clipboard.paste()},move:()=>this.switchTool(t.Move),pen:()=>this.switchTool(t.Pen),eraser:()=>this.switchTool(t.Eraser),laser:()=>this.switchTool(t.Laser),line:()=>this.switchTool(t.Line),ellipse:()=>this.switchTool(t.Ellipse),rectangle:()=>this.switchTool(t.Rectangle),latex:this.requestTeX,dotted:()=>this.setDash(2),dashed:()=>this.setDash(1),solid:()=>this.setDash(0),blue:()=>this.setStroke("#0097f6"),green:()=>this.setStroke("#00b253"),yellow:()=>this.setStroke("#ffbf00"),orange:()=>this.setStroke("#ff2600"),black:()=>this.setStroke("#000000"),transparent:()=>this.setFill(0),halfFilled:()=>this.setFill(2),filled:()=>this.setFill(1),resetStyles:()=>this.setStyle(0,"#000000",0),help:()=>{var e;return null===(e=o.toggleHelpModal)||void 0===e?void 0:e.call(o)},fullScreen:()=>this.doAction(document.fullscreenElement?a.ExitFullScreen:a.EnterFullScreen),enterFullScreen:()=>document.documentElement.requestFullscreen(),exitFullScreen:()=>document.exitFullscreen()}}}const y={q:a.Laser,w:a.Copy,e:a.Blue,esc:a.Deselect,r:a.Green,a:a.PreviousPage,s:a.NextPage,d:a.Pen,f:a.Undo,g:a.Paste,z:a.ResetStyles,x:a.Eraser,c:a.Line,v:a.Move,"shift + q":a.Dotted,"shift + w":a.Transparent,"shift + e":a.Ellipse,"shift + r":a.Rectangle,"shift + a":a.Dashed,"shift + s":a.HalfFilled,"shift + d":a.Black,"shift + f":a.Redo,"shift + z":a.Solid,"shift + x":a.Filled,"shift + c":a.Yellow,"shift + v":a.Orange,"ctrl + a":a.SelectAll,"ctrl + s":a.Save,"ctrl + d":a.Duplicate,"ctrl + z":a.Undo,"ctrl + x":a.Cut,"ctrl + c":a.Copy,1:a.Help,0:a.Help,"/":a.Help,"shift + /":a.Help};class f{constructor(e,t,s){this.doAction=e,this.setStrict=t,this.updateState=s,this.keyMap={},this.save=()=>{window.localStorage.setItem("keyMap",JSON.stringify(this.keyMap))},this.bindAll=()=>{for(const[e,t]of Object.entries(this.keyMap))this.bind(e,t);this.updateState()},this.unbind=e=>{delete this.keyMap[e],o.a.unbind(e),this.updateState(),this.save()},this.bind=(e,t)=>{this.keyMap[e]=t,o.a.bind(e,()=>this.doAction(this.keyMap[e])),this.updateState(),this.save()},this.reset=()=>{for(const e of Object.keys(this.keyMap))o.a.unbind(e);this.keyMap={...y},this.bindAll(),this.save()},o.a.bind("shift",()=>{this.setStrict(!0)},()=>{this.setStrict(!1)});const i=window.localStorage.getItem("keyMap");null===i?this.reset():(this.keyMap=JSON.parse(i),this.bindAll(),Object.values(this.keyMap).every(e=>e!==a.Help)&&(this.bind("0",a.Help),this.bind("1",a.Help),this.bind("/",a.Help),this.bind("shift + /",a.Help)))}}var w=s(106);const S=(e,t)=>n.a.createElement("i",{className:"fas fa-"+e,style:t});var E={close:S("times-circle"),previousPage:S("caret-left"),nextPage:S("caret-right"),addPageStart:S("plus",{transform:"scale(0.7)"}),addPageEnd:S("plus",{transform:"scale(0.7)"}),undo:S("undo"),redo:S("redo"),move:S("mouse-pointer"),pen:S("pen"),eraser:S("eraser"),laser:S("asterisk"),line:S("minus",{transform:"rotate(-45deg)"}),ellipse:S("circle"),rectangle:S("square"),latex:S("font"),file:S("file"),open:S("folder-open"),save:S("save"),export:S("file-export"),cut:S("cut"),copy:S("copy"),paste:S("paste"),duplicate:S("clone"),help:S("question"),fullScreen:S("expand"),enterFullScreen:S("expand"),exitFullScreen:S("compress"),black:S("circle",{color:"#000000"}),blue:S("circle",{color:"#0097f6"}),green:S("circle",{color:"#00b253"}),orange:S("circle",{color:"#ff2600"}),yellow:S("circle",{color:"#ffbf00"}),dotted:n.a.createElement("svg",{viewBox:"0 0 21 21",style:{width:"1em",height:"1.1em"}},n.a.createElement("g",{transform:"translate(-90 -1158)"},n.a.createElement("g",null,n.a.createElement("path",{d:"M104.184,1164.401l1.43-1.43c-1.294-1.035-2.878-1.721-4.613-1.913v2.021    C102.184,1163.25,103.27,1163.716,104.184,1164.401z"}),n.a.createElement("path",{d:"M95.816,1175.599l-1.43,1.43c1.294,1.035,2.878,1.721,4.613,1.913v-2.021C97.816,1176.75,96.73,1176.284,95.816,1175.599z"}),n.a.createElement("path",{d:"M94.401,1165.815l-1.429-1.43c-1.036,1.295-1.723,2.879-1.914,4.614h2.021    C93.25,1167.817,93.716,1166.731,94.401,1165.815z"}),n.a.createElement("path",{d:"M106.92,1171c-0.17,1.183-0.636,2.269-1.322,3.185l1.43,1.43c1.036-1.295,1.723-2.879,1.914-4.614H106.92z"})))),dashed:n.a.createElement("svg",{viewBox:"0 0 21 21",style:{width:"1em",height:"1.1em"}},n.a.createElement("g",{transform:"translate(-90 -1158)"},n.a.createElement("g",null,n.a.createElement("path",{d:"M101,1176.92v2.021c1.735-0.192,3.319-0.878,4.613-1.913l-1.43-1.43C103.269,1176.284,102.183,1176.75,101,1176.92z"}),n.a.createElement("path",{d:"M93.08,1171h-2.021c0.191,1.735,0.879,3.319,1.914,4.614l1.43-1.43C93.716,1173.269,93.25,1172.183,93.08,1171z"}),n.a.createElement("path",{d:"M104.184,1164.401l1.43-1.43c-1.294-1.035-2.878-1.721-4.613-1.913v2.021    C102.184,1163.25,103.27,1163.716,104.184,1164.401z"}),n.a.createElement("path",{d:"M106.92,1169h2.021c-0.191-1.735-0.879-3.319-1.914-4.614l-1.43,1.43C106.284,1166.731,106.75,1167.817,106.92,1169z"}),n.a.createElement("path",{d:"M95.816,1175.599l-1.43,1.43c1.294,1.035,2.878,1.721,4.613,1.913v-2.021C97.816,1176.75,96.73,1176.284,95.816,1175.599z"}),n.a.createElement("path",{d:"M94.401,1165.815l-1.429-1.43c-1.036,1.295-1.723,2.879-1.914,4.614h2.021    C93.25,1167.817,93.716,1166.731,94.401,1165.815z"}),n.a.createElement("path",{d:"M99,1163.08v-2.021c-1.735,0.192-3.319,0.878-4.613,1.913l1.43,1.43C96.731,1163.716,97.817,1163.25,99,1163.08z"}),n.a.createElement("path",{d:"M106.92,1171c-0.17,1.183-0.636,2.269-1.322,3.185l1.43,1.43c1.036-1.295,1.723-2.879,1.914-4.614H106.92z"})))),solid:n.a.createElement("i",{className:"far fa-circle"}),transparent:n.a.createElement("i",{className:"far fa-circle"}),halfFilled:n.a.createElement("div",{style:{height:"0.7em",marginRight:"1em",position:"relative"}},n.a.createElement("i",{className:"fas fa-circle",style:{left:"50%",opacity:.3,position:"absolute",top:0}}),n.a.createElement("i",{className:"far fa-circle",style:{left:"50%",position:"absolute",top:0}})),filled:S("circle"),deselect:S("object-ungroup"),resetStyles:S("remove-format"),selectAll:S("object-group")};var k=e=>n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:e.className,"data-tip":!0,"data-for":e.action,onClick:()=>e.callback(e.action)},E[e.action]),n.a.createElement(w.a,{backgroundColor:"#ddd",effect:"solid",id:e.action,place:"right",textColor:"#262626"},m(e.action)));var O=e=>{const[t,s]=Object(i.useState)(0),[r,l]=Object(i.useState)("0.6em");Object(i.useEffect)(()=>{s(e.currentPage),l(.6*e.currentPage.toString().length+"em")},[e]);const c=async()=>{if(!t)return;const a=Number(t);!a||a>e.totalPages?s(e.currentPage):await e.loadPage(a-1)};Object(i.useEffect)(()=>{c()},[t]);return n.a.createElement("div",{className:"pagination visibility-"+e.visibility},n.a.createElement(k,{action:1===e.currentPage?a.AddPageStart:a.PreviousPage,callback:e.doAction}),n.a.createElement("form",{onSubmit:e=>(null==e||e.preventDefault(),c())},n.a.createElement("input",{onChange:e=>s(e.target.value),type:"text",value:t,style:{width:r},tabIndex:-1})),n.a.createElement("span",{className:"total-pages"}," / ",e.totalPages),n.a.createElement(k,{action:e.currentPage===e.totalPages?a.AddPageEnd:a.NextPage,callback:e.doAction}))};var x=e=>n.a.createElement("div",{className:"undoredo visibility-"+e.visibility},n.a.createElement(k,{action:a.Undo,callback:e.doAction,className:e.canUndo?void 0:"disabled"}),n.a.createElement(k,{action:a.Redo,callback:e.doAction,className:e.canRedo?void 0:"disabled"}));var A=e=>{const t=[{tool:e.tools.Move,action:a.Move},{tool:e.tools.Pen,action:a.Pen},{tool:e.tools.Eraser,action:a.Eraser},{tool:e.tools.Laser,action:a.Laser},{tool:e.tools.Line,action:a.Line},{tool:e.tools.Rectangle,action:a.Rectangle},{tool:e.tools.Ellipse,action:a.Ellipse}];return n.a.createElement("div",{className:"toolbar visibility-"+e.visibility},t.map(({tool:t,action:s})=>n.a.createElement(k,{action:s,callback:e.doAction,className:t.isActive()?"active":void 0,key:s})),n.a.createElement(k,{action:a.LaTeX,callback:e.doAction}))};var P=e=>n.a.createElement("div",{className:`button-row ${e.cName} ${e.outerButton?"button-row-hover":""}`},e.outerButton,n.a.createElement("div",{className:"button-row-inner"},e.actions.map((t,s)=>{var a;return n.a.createElement(k,{action:t,className:null===(a=e.className)||void 0===a?void 0:a.call(e,t,s),callback:e.callback,key:t})})));const C=({dashStyle:e,callback:t,inContext:s=!1})=>{const i=[a.Solid,a.Dashed,a.Dotted],r=n.a.createElement("button",{className:"inactive"},E[i[e]]);return n.a.createElement(P,{actions:i,className:(t,a)=>{if(s&&e===a)return"active"},callback:t,outerButton:!s&&r})},j=({strokeStyle:e,callback:t,inContext:s=!1})=>{const i=[a.Black,a.Blue,a.Green,a.Yellow,a.Orange],r=["#000000","#0097f6","#00b253","#ffbf00","#ff2600"],l=n.a.createElement("button",{className:"inactive"},n.a.createElement("i",{className:"fas fa-circle",style:{color:e}}));return n.a.createElement(P,{actions:i,className:(t,a)=>{if(s&&e===r[a])return"active"},callback:t,outerButton:!s&&l})},N=({fillStyle:e,callback:t,inContext:s=!1})=>{const i=[a.Transparent,a.Filled,a.HalfFilled],r=n.a.createElement("button",{className:"inactive"},E[i[e]]);return n.a.createElement(P,{actions:i,className:(t,a)=>{if(s&&e===a)return"active"},callback:t,outerButton:!s&&r})};var M=e=>n.a.createElement(n.a.Fragment,null,n.a.createElement(C,{dashStyle:e.currentStyle.dash,callback:e.doAction,inContext:e.inContext}),n.a.createElement(j,{strokeStyle:e.currentStyle.stroke,callback:e.doAction,inContext:e.inContext}),n.a.createElement(N,{fillStyle:e.currentStyle.fill,callback:e.doAction,inContext:e.inContext}));var F=e=>{const t=n.a.createElement("button",{className:"inactive"},E.file),s=[a.Open,a.Save,a.Export],[r,l]=Object(i.useState)(!1),c=[a.Copy,a.Paste,a.Help,r?a.ExitFullScreen:a.EnterFullScreen];return Object(i.useEffect)(()=>{l(Boolean(document.fullscreenElement)),document.addEventListener("fullscreenchange",()=>l(Boolean(document.fullscreenElement)))},[]),n.a.createElement("div",{className:"stylebar visibility-"+e.visibility},n.a.createElement(P,{actions:s,callback:e.doAction,cName:"file-actions",outerButton:t}),n.a.createElement(M,{currentStyle:e.currentStyle,doAction:e.doAction}),n.a.createElement(P,{actions:c,cName:"other-actions vertical",callback:e.doAction}))},D=s(17),R=s.n(D);R.a.setAppElement("#Overlay");const T=[a.AddPageStart,a.AddPageEnd,a.EnterFullScreen,a.ExitFullScreen];var B=e=>n.a.createElement(R.a,{className:"modal",overlayClassName:"modal-overlay binding-modal",isOpen:""!==e.letter},n.a.createElement("button",{className:"close",onClick:()=>e.close()},E.close),n.a.createElement("p",null,"Changing ",n.a.createElement("span",{className:"binding"},e.letter)," binding…"),n.a.createElement("div",{className:"tools"},n.a.createElement("button",{className:void 0===e.action?"active":void 0,onClick:()=>e.callback(null)},n.a.createElement("span",{style:{left:"0.25em"}},"none")),Object.values(a).filter(e=>!T.includes(e)).map(t=>n.a.createElement("button",{key:t,className:e.action===t?"active":void 0,onClick:()=>e.callback(t)},E[t],n.a.createElement("span",{style:E[t]?{}:{left:"0.25em"}},m(t))))));const q=({label:e="",letter:t,width:s})=>n.a.createElement("div",{className:"key",style:{width:s}},n.a.createElement("span",{className:"letter"},t),n.a.createElement("div",{className:"action"},n.a.createElement("span",{className:"unassigned"},e))),I=e=>{const[t,s]=Object(i.useState)(!1);return n.a.createElement("button",{className:"key modifier "+(t?"held":""),onClick:()=>{t?e.set.delete(e.letter):e.set.add(e.letter),e.replaceSet(new Set(e.set)),s(!t)},style:{width:e.width}},n.a.createElement("div",{className:"action"},n.a.createElement("span",{className:"unassigned"},e.label)),n.a.createElement("span",{className:"letter"},e.letter))},L=e=>n.a.createElement("button",{className:"key",onClick:t=>e.onclick(e.letter,t),style:{width:e.width}},n.a.createElement("div",{className:"action"},e.action&&E[e.action],n.a.createElement("span",{className:void 0===e.action?"unassigned":void 0},void 0===e.action?"none":m(e.action))),n.a.createElement("span",{className:"letter"},e.letter)),z=({rows:e,onclick:t,activeModifiers:s,setActiveModifiers:a,...i})=>n.a.createElement("div",Object.assign({},i),e.map((e,i)=>n.a.createElement("div",{className:"row",key:i},e.map(e=>"readonly"===e.type?n.a.createElement(q,{key:e.key,letter:e.key,label:e.value,width:e.width}):"modifier"===e.type?n.a.createElement(I,{key:e.key,letter:e.key,label:e.value,set:s,replaceSet:a,width:e.width}):n.a.createElement(L,{key:e.key,letter:e.key,action:e.action,width:e.width,onclick:(e,s)=>t(e,s)})))));R.a.setAppElement("#Overlay");var U=e=>{const[t,s]=Object(i.useState)(""),[a,r]=Object(i.useState)(null),[l,c]=Object(i.useState)(new Set),o=e=>[...Array.from(l).sort(),e].join(" + "),h=t=>({key:t,action:e.keyMap[o(t)]}),d=(...e)=>e.map(h),u=[[{...h("`"),width:"3em"},...d("1","2","3","4","5","6","7","8","9","0")],[{type:"readonly",key:"tab",value:"Hide Toolbar",width:"4.5em"},...d("q","w","e","r","t","y","u","i","o","p")],[{...h("esc"),width:"6em"},...d("a","s","d","f","g","h","j","k","l",";")],[{type:"modifier",key:"shift",value:"Snap",width:"7.5em"},...d("z","x","c","v","b","n","m","/"),{type:"modifier",key:"ctrl"},{type:"modifier",key:"alt"}]];return n.a.createElement(n.a.Fragment,null,n.a.createElement(z,{rows:u,className:"bindings",onclick:t=>{const a=o(t);s(a),r(e.keyMap[a])},activeModifiers:l,setActiveModifiers:c}),n.a.createElement(B,{letter:t,action:a,close:()=>s(""),callback:a=>{e.unbind(t),a&&e.bind(t,a),s("")}}))};R.a.setAppElement("#Overlay");var H=e=>n.a.createElement(R.a,{className:"modal",overlayClassName:"modal-overlay help-modal",isOpen:e.isOpen},n.a.createElement("button",{className:"close",onClick:()=>e.toggleOpen()},E.close),n.a.createElement("p",null,n.a.createElement("span",{style:{fontSize:"1.5em",fontWeight:"bold"}},"qboard"),n.a.createElement("span",{style:{color:"#666",marginLeft:"0.5em"}},"The efficient digital whiteboard."),n.a.createElement("span",{style:{color:"#000",marginLeft:"0.5em"}},"Press ",n.a.createElement("b",null,"?")," to show or hide this screen.")),n.a.createElement(U,{bind:e.bind,unbind:e.unbind,keyMap:e.keyMap}),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.a.createElement("p",null,"Click a key to change the binding."," ",n.a.createElement("button",{onClick:()=>e.reset()},"reset to default")),n.a.createElement("p",{style:{color:"#666"}},"By ",n.a.createElement("a",{href:"https://cjquines.com/"},"CJ Quines")," and"," ",n.a.createElement("a",{href:"https://pihart.github.io/"},"Avi Mehra"),". View on"," ",n.a.createElement("a",{href:"https://github.com/cjquines/qboard"},"Github"),".")));var J=e=>{const[t,s]=Object(i.useState)(null);return Object(i.useEffect)(()=>{document.addEventListener("contextmenu",e=>{e.target.classList.contains("upper-canvas")&&(e.preventDefault(),e.stopPropagation(),s(t=>t?null:[e.clientX,e.clientY]))}),document.addEventListener("click",()=>s(null))},[]),t?n.a.createElement("div",{className:"context-menu",style:{top:`calc(${t[1]}px - 2.8em)`,left:`calc(${t[0]}px - 1.1em)`}},n.a.createElement(M,{currentStyle:e.currentStyle,doAction:t=>e.doAction(t),inContext:!0})):null};var W=({acceptFiles:e,captureRef:t,...s})=>{const a=Object(i.useRef)(null);return null==t||t(a),n.a.createElement("input",Object.assign({onChange:void 0===e?void 0:t=>{var s;(null===(s=t.target.files)||void 0===s?void 0:s.length)&&e(t.target.files)},ref:a,type:"file",style:{display:"none"}},s))};var X=({qboard:e})=>{const[t,s]=Object(i.useState)(2),[a,r]=Object(i.useState)(!1),[l,c]=Object(i.useState)({dragActive:!1,currentPage:0,totalPages:0,currentStyle:{dash:0,stroke:"#000000",fill:0},canUndo:!1,canRedo:!1,keyMap:y}),h=()=>{r(e=>(window.localStorage.setItem("helpModalOpen",e?"false":"true"),!e))};return Object(i.useEffect)(()=>{"false"!==window.localStorage.getItem("helpModalOpen")&&r(!0),e.callback=c,e.globalState.toggleHelpModal=h,e.updateState(),o.a.bind("tab",()=>{s(e=>(e+2)%3)})},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(W,{acceptFiles:async t=>e.history.execute((await e.files.acceptFile(t)).history),captureRef:t=>{e.globalState.fileInputRef=t},multiple:!0,accept:"application/json, application/pdf, image/*"}),n.a.createElement("div",{className:"drop-area "+(l.dragActive?"active":"")}),n.a.createElement("div",{className:"overlay visibility-"+t},n.a.createElement(O,{loadPage:e.pages.loadPage,currentPage:l.currentPage,totalPages:l.totalPages,doAction:e.action.doAction,visibility:t}),n.a.createElement(x,{canUndo:l.canUndo,canRedo:l.canRedo,doAction:e.action.doAction,visibility:t}),n.a.createElement(A,{currentTool:e.activeTool,tools:e.tools,doAction:e.action.doAction,visibility:t}),n.a.createElement(F,{currentStyle:l.currentStyle,doAction:e.action.doAction,visibility:t,isMobile:!0}),n.a.createElement(H,{bind:e.keyboard.bind,unbind:e.keyboard.unbind,reset:e.keyboard.reset,keyMap:l.keyMap,isOpen:a,toggleOpen:h,isMobile:!0})),n.a.createElement(J,{currentStyle:l.currentStyle,doAction:e.action.doAction}))};class _{}_.rectify=(e,t,s,a,i)=>e.map(e=>_.project(t,s,e[0],e[1],a,i)).reduce((e,t)=>e[0]<t[0]?e:t),_.project=(e,t,s,a,i,n)=>{const r=i-e,l=n-t,c=s*l-a*r,o=s*s+a*a;return[Math.abs(c)/o,e+r+a*c/o,t+l-s*c/o]};class ${constructor(e,t,s){this.baseCanvas=e,this.history=t,this.clipboard=s,this._isDrawing=!1,this._requiresBase=!1,this._isBrush=!1,this.active=!1,this.activate=()=>this.setActive(!0),this.deactivate=()=>this.setActive(!1),this.isActive=()=>this.active,this.setActive=e=>this.active=e}isDrawing(){return this._isDrawing}requiresBase(){return this._requiresBase}isBrush(){return this._isBrush}}class Y extends ${constructor(){super(...arguments),this._isDrawing=!0}}class G extends ${constructor(){super(...arguments),this._requiresBase=!0}}class Q extends G{constructor(){super(...arguments),this._isBrush=!0,this.pathCreated=()=>{},this.setBrush=()=>{}}}class Z extends G{}class V extends Q{constructor(){super(...arguments),this.pathCreated=e=>{e.path.id=this.baseCanvas.getNextId(),this.history.add([e.path])},this.setBrush=(e,t)=>{e.color=t.stroke,e.strokeDashArray=t.strokeDashArray,e.width=t.strokeWidth}}}class K extends Q{constructor(){super(...arguments),this.pathCreated=e=>{const t=h.fabric.util.object.clone(e.path);this.baseCanvas.remove(e.path);const s=this.baseCanvas.getObjects().filter(e=>e.intersectsWithObject(t));s.length&&(this.baseCanvas.remove(...s),this.history.remove(s))},this.setBrush=(e,t)=>{e.color="#ff005455",e.strokeDashArray=[0,0],e.width=5*t.strokeWidth},this.activate=()=>!this.clipboard.cut()&&this.setActive(!0)}}class ee extends Q{constructor(){super(...arguments),this.pathCreated=e=>{setTimeout(()=>{this.baseCanvas.remove(e.path),this.baseCanvas.requestRenderAll()},1e3)},this.setBrush=(e,t)=>{e.color="#f23523",e.strokeDashArray=[0,0],e.width=t.strokeWidth}}}class te extends Y{constructor(){super(...arguments),this.x=0,this.y=0,this.dirs=[[1,0],[1,1],[0,1],[-1,1]],this.draw=(e,t,s,a,i)=>(this.x=e,this.y=t,new h.fabric.Line([e,t,a,i],{...s,perPixelTargetFind:!0})),this.resize=(e,t,s,a)=>{const[,i,n]=a?_.rectify(this.dirs,this.x,this.y,t,s):[void 0,t,s];return e.set({x2:i,y2:n}).setCoords(),e}}}class se extends Y{constructor(){super(...arguments),this.x=0,this.y=0,this.dirs=[[1,1],[-1,1]],this.draw=(e,t,s,a,i)=>(this.x=e,this.y=t,new h.fabric.Rect({left:e,top:t,width:a,height:i,...s})),this.resize=(e,t,s,a)=>{const[,i,n]=a?_.rectify(this.dirs,this.x,this.y,t,s):[void 0,t,s];return e.set({originX:this.x>i?"right":"left",originY:this.y>n?"bottom":"top",width:Math.abs(this.x-i),height:Math.abs(this.y-n)}).setCoords(),e}}}class ae extends Y{constructor(){super(...arguments),this.x=0,this.y=0,this.dirs=[[1,1],[-1,1]],this.draw=(e,t,s,a,i)=>(this.x=e,this.y=t,new h.fabric.Ellipse({...s,left:e,top:t,rx:a,ry:i})),this.resize=(e,t,s,a)=>{const[,i,n]=a?_.rectify(this.dirs,this.x,this.y,t,s):[void 0,t,s];return e.set({originX:this.x>i?"right":"left",originY:this.y>n?"bottom":"top",rx:Math.abs(i-(e.left||0))/2,ry:Math.abs(n-(e.top||0))/2}).setCoords(),e}}}var ie=(e,t,s)=>({Move:new Z(e,t,s),Pen:new V(e,t,s),Eraser:new K(e,t,s),Laser:new ee(e,t,s),Line:new te(e,t,s),Rectangle:new se(e,t,s),Ellipse:new ae(e,t,s)});function ne(e){return"_objects"in e}class re extends h.fabric.Canvas{constructor(){super(...arguments),this.latestId=0,this.modified=!1,this.fitToWindow=(e,t)=>{const s=window.innerWidth/e,a=window.innerHeight/t;this.setZoom(Math.min(s,a)),this.setWidth(e*this.getZoom()),this.setHeight(t*this.getZoom()),this.canvasWidth=e,this.canvasHeight=t},this.deactivateSelection=()=>{this.isDrawingMode=!1,this.selection=!1,this.discardActiveObject(),this.forEachObject(e=>{e.selectable=!1}),this.requestRenderAll()},this.activateSelection=()=>{this.isDrawingMode=!1,this.selection=!0,this.forEachObject(e=>{e.selectable=!0})},this.getNextId=()=>(this.latestId+=1,this.latestId),this.getObjectByIds=e=>this.getObjects().filter(t=>e.includes(t.id)),this.serialize=e=>{const t=this.getActiveObjects();return t.length>1&&e.some(e=>t.includes(e))&&(this.discardActiveObject(),this.setActiveObject(new h.fabric.ActiveSelection(t,{canvas:this}))),e.map(e=>this._toObject(e,"toObject",["strokeUniform"]))},this.apply=(e,t)=>{const s=this.getObjectByIds(e);if(s.length&&this.remove(...s),null==t?void 0:t.length){const s=t=>{t.forEach((t,s)=>{t.id=e[s]}),this.add(...t),this.requestRenderAll()};h.fabric.util.enlivenObjects(t,s,"fabric")}else this.requestRenderAll()},this.loadFromJSONAsync=async e=>new Promise(t=>{super.loadFromJSON(e,()=>{t()})}),this.addImage=async(e,t,s)=>new Promise(a=>h.fabric.Image.fromURL(e,e=>{a(this.placeObject(e,t)[0])},s)),this.placeObject=(e,t)=>{var s,{x:a=this.canvasWidth/2,y:i=this.canvasHeight/2}=void 0===t?null!==(s=this.cursor)&&void 0!==s?s:{}:t;this.discardActiveObject();const n=this.getNextId();let r;return e.set({id:n,left:a,top:i,originX:"center",originY:"center"}),ne(e)?(e.canvas=this,e.forEachObject(e=>{e.id=this.getNextId(),this.add(e)}),e.setCoords(),r=e.getObjects()):(this.add(e),r=[e]),this.setActiveObject(e),this.requestRenderAll(),r}}}var le=s(105),ce=s.n(le);const oe=(e,t)=>void 0===e?t():e;class he{}he.readAsText=e=>new Promise((t,s)=>{const a=new FileReader;a.onload=()=>{t(a.result)},a.onerror=s,a.readAsText(e)}),he.readAsDataURL=e=>new Promise((t,s)=>{const a=new FileReader;a.onload=()=>{t(a.result)},a.onerror=s,a.readAsDataURL(e)});class de extends d.MalformedExpressionException{constructor(e="Invalid qboard file"){super(e)}}class ue{static read(e){const t=JSON.parse(e.toString());return ue.readParsed(t)}static readParsed(e){if(!(e=>e instanceof Object&&"qboard-version"in e)(e))throw new de;const{pages:t}=e;return t}}class pe{constructor(e){this.toString=()=>this.asString=oe(this.asString,()=>JSON.stringify(this.sourceJSON)),this.toBlob=()=>this.asBlob=oe(this.asBlob,()=>new Blob([this.toString()],{type:"application/json"})),this.toURL=()=>{this.asUrl=oe(this.asUrl,()=>window.URL.createObjectURL(this.toBlob()));return[this.asUrl,()=>{void 0!==this.asUrl&&(window.URL.revokeObjectURL(this.asUrl),this.asUrl=void 0)}]},this.download=(e="qboard-file")=>{const[t,s]=this.toURL(),a=document.createElement("a");a.style.display="none",a.href=t,a.download=e,document.body.appendChild(a),a.click(),a.remove(),s()},this.sourceJSON={"qboard-version":1,pages:e}}}class ve{constructor(e){this.pages=e,this.processFiles=async(e,t)=>{const s=[];return await Promise.all([...e].map(async e=>{if(e.type.startsWith("image/")&&s.push(await this.handleImage(e,t)),"application/json"===e.type)return this.handleJSON(e)})),{add:s.flat()}},this.acceptFile=async(e,t)=>{if(!e.length)return{action:"none"};const[s]=e;return s.type.startsWith("image/")?{action:"image",history:{add:[await this.handleImage(s,t)]}}:"application/json"===s.type?(await this.openFile(s),{action:"json",history:{clear:[!0]}}):{action:"none"}},this.openFile=async e=>(this.pages.savePage(),this.pages.overwritePages(ue.read(await he.readAsText(e)))),this.handleImage=async(e,t)=>he.readAsDataURL(e).then(e=>this.pages.canvas.addImage(e.toString(),t)).then(e=>{const[t=0,s=0,a=0,i=0]=[e.width,this.pages.canvas.width,e.height,this.pages.canvas.height];return(t>.8*s||a>.8*i)&&e.scaleToWidth(Math.min(.8*s,.8*i*t/a)),e}),this.handleJSON=async e=>{const t=ue.read(await he.readAsText(e));return this.pages.insertPagesAfter(t)}}}const me={version:"4.2.0",objects:[],background:"white"},ge=()=>{const e=6e4*(new Date).getTimezoneOffset();return new Date(Date.now()-e).toISOString().slice(0,-8).replace(/\D/g,"-")};class be{constructor(e,t,s,a,i=[me]){this.canvas=e,this.canvasWidth=t,this.canvasHeight=s,this.updateState=a,this.pagesJSON=i,this.currentIndex=0,this.savePage=()=>{this.pagesJSON[this.currentIndex]=this.canvas.toObject(["id","strokeUniform"])},this.loadPage=async(e,t=!0)=>(t&&this.savePage(),e===this.currentIndex&&t||(await this.canvas.loadFromJSONAsync(this.pagesJSON[e]),this.currentIndex=e,this.updateState()),e),this.previousOrNewPage=()=>0===this.currentIndex?this.insertPagesBefore([me],!0):this.loadPage(this.currentIndex-1),this.nextOrNewPage=()=>this.currentIndex===this.pagesJSON.length-1?this.insertPagesAfter([me],!0):this.loadPage(this.currentIndex+1),this.export=async()=>{this.savePage();const e=[],t=this.currentIndex;for(const t of this.pagesJSON)await this.canvas.loadFromJSONAsync(t),e.push({svg:this.canvas.toSVG(),width:this.canvasWidth/2});const s={pageSize:{width:this.canvasWidth/2,height:this.canvasHeight/2},pageMargins:[0,0],content:e};ce.a.createPdf(s).download(`qboard-${ge()}.pdf`),await this.canvas.loadFromJSONAsync(this.pagesJSON[t])},this.saveFile=()=>{this.savePage(),new pe(this.pagesJSON).download(`qboard-${ge()}.json`),this.canvas.modified=!1},this.overwritePages=async(e=[me])=>!(this.canvas.modified&&!this.pagesJSON.every(e=>0===e.objects.length)&&!window.confirm("Your work will be overwritten. Are you sure you wish to continue?"))&&(this.pagesJSON=e,await this.loadPage(0,!1),this.canvas.modified=!1,!0),this.insertPagesBefore=async(e,t=!1)=>(this.savePage(),this.pagesJSON.splice(this.currentIndex,0,...e),t||(this.canvas.modified=!0),this.loadPage(this.currentIndex,!1)),this.insertPagesAfter=async(e,t=!1)=>(this.pagesJSON.splice(this.currentIndex+1,0,...e),t||(this.canvas.modified=!0),this.loadPage(this.currentIndex+1,!0))}}class ye{constructor(e,t,s){this.canvas=e,this.pages=t,this.updateState=s,this.history=[],this.redoStack=[],this.selection=null,this.locked=!1,this.execute=(e={})=>{e.clear&&this.clear(e.clear[0]),this.add(e.add),this.remove(e.remove)},this.add=e=>{(null==e?void 0:e.length)&&this.save({newObjects:e})},this.remove=e=>{(null==e?void 0:e.length)&&this.save({oldObjects:e})},this.clear=(e=!1)=>{this.history=[],e&&(this.redoStack=[]),this.updateState()},this.store=e=>{this.locked||(this.locked=!0,this.selection=this.canvas.serialize(e),this.locked=!1)},this.modify=e=>this.save({oldObjects:this.selection,newObjects:e}),this.save=({oldObjects:e,newObjects:t})=>{if(this.locked)return;const s=t||e;this.locked=!0,this.history.push({ids:s.map(e=>e.id),oldObjects:t?e:this.canvas.serialize(e),newObjects:t&&this.canvas.serialize(t),page:this.pages.currentIndex}),this.locked=!1,this.redoStack=[],this.canvas.modified=!0,this.updateState()},this.undo=async()=>{this.history.length&&(this.canvas.discardActiveObject(),await this.move(this.history,this.redoStack,!0))},this.redo=async()=>{this.redoStack.length&&await this.move(this.redoStack,this.history,!1)},this.move=async(e,t,s)=>{if(!e.length)return;this.locked=!0;const a=e.pop();await this.pages.loadPage(a.page),this.canvas.apply(a.ids,s?a.oldObjects:a.newObjects),t.push(a),this.locked=!1,this.canvas.modified=!0,this.updateState()}}}class fe{constructor(e,t,s,a,i,n){this.canvas=e,this.pages=t,this.files=s,this.history=a,this.canvasWidth=i,this.canvasHeight=n,this.copy=()=>{const e=this.canvas.getActiveObject();return e?(e.clone(e=>{this.clipboard=e}),e):null},this.cut=()=>{const e=this.copy();return!!e&&(this.canvas.discardActiveObject(),ne(e)?(e.forEachObject(e=>{this.canvas.remove(e)}),this.history.remove(e.getObjects())):(this.canvas.remove(e),this.history.remove([e])),this.canvas.requestRenderAll(),!0)},this.paste=()=>{if(void 0!==this.clipboard)return this.clipboard.clone(e=>this.history.add(this.canvas.placeObject(e)))},this.pasteExternal=async e=>{const t=await this.files.processFiles(e.clipboardData.files);this.history.execute(t)},document.addEventListener("paste",this.pasteExternal)}}const we=[[0,0],[20,15],[5,10]];class Se{constructor(e,t,s,a){this.currentStyle=e,this.drawerOptions=t,this.freeDrawingBrush=s,this.updateState=a,this.set=(e,t,s)=>{if(null!==e&&(this.currentStyle.dash=e,this.drawerOptions.strokeDashArray=we[e],this.freeDrawingBrush.strokeDashArray=we[e]),null!==t&&(this.currentStyle.stroke=t,this.drawerOptions.stroke=t,this.freeDrawingBrush.color=t),null!==s&&(this.currentStyle.fill=s),null!==t||null!==s)switch(this.currentStyle.fill){case 0:this.drawerOptions.fill="transparent";break;case 1:this.drawerOptions.fill=this.currentStyle.stroke;break;case 2:this.drawerOptions.fill=this.currentStyle.stroke+"11"}this.updateState()}}}s(324);window.qboard=new class{constructor(e,t,s,a){this.canvasElement=e,this.baseCanvasElement=t,this.canvasWidth=s,this.canvasHeight=a,this.currentStyle={dash:0,stroke:"#000000",fill:0},this.drawerOptions={fill:"transparent",stroke:"#000000",strokeWidth:4,selectable:!1,strokeDashArray:[0,0],strokeUniform:!0},this.dragActive=!1,this.isDown=!1,this.strict=!1,this.globalState={},this.updateState=()=>{var e;null===(e=null==this?void 0:this.callback)||void 0===e||e.call(this,{dragActive:this.dragActive,currentPage:this.pages.currentIndex+1,totalPages:this.pages.pagesJSON.length,currentStyle:this.currentStyle,canUndo:this.history.history.length>0,canRedo:this.history.redoStack.length>0,keyMap:this.keyboard.keyMap})},this.switchTool=async(e=this.tools.Move)=>{e!==this.activeTool&&await e.activate()&&(this.activeTool.deactivate(),e.isBrush()||e.requiresBase()?(this.baseCanvas.activateSelection(),this.canvasElement.parentElement.style.display="none"):(this.baseCanvas.deactivateSelection(),this.canvasElement.parentElement.style.display="block"),e.isBrush()&&await e.setBrush(this.baseCanvas.freeDrawingBrush,this.drawerOptions),this.activeTool=e,this.baseCanvas.isDrawingMode=this.activeTool.isBrush(),this.updateState())},this.windowResize=()=>{void 0!==this.resizeCooldown&&clearTimeout(this.resizeCooldown),this.resizeCooldown=setTimeout(()=>{this.canvas.fitToWindow(this.canvasWidth,this.canvasHeight),this.baseCanvas.fitToWindow(this.canvasWidth,this.canvasHeight)},100)},this.mouseDown=async e=>{if(!this.activeTool.isDrawing())return;const{x:t,y:s}=this.canvas.getPointer(e.e);this.isDown=!0,this.currentObject=await this.activeTool.draw(t,s,this.drawerOptions),this.currentObject.id=this.baseCanvas.getNextId(),this.canvas.add(this.currentObject),this.canvas.requestRenderAll()},this.mouseMove=async e=>{var t,s;if(!this.activeTool.isDrawing()||!this.isDown)return;const{x:a,y:i}=this.canvas.getPointer(e.e);void 0!==this.currentObject&&await(null===(s=(t=this.activeTool).resize)||void 0===s?void 0:s.call(t,this.currentObject,a,i,this.strict)),this.canvas.requestRenderAll()},this.mouseUp=()=>{this.activeTool.isDrawing()&&(this.isDown=!1,this.baseCanvas.add(h.fabric.util.object.clone(this.currentObject)),this.baseCanvas.requestRenderAll(),this.currentObject,this.canvas.remove(this.currentObject),this.canvas.requestRenderAll(),this.history.add([this.currentObject]))},this.setDragActive=e=>{this.dragActive=e,this.updateState()},this.drop=async e=>{e.e.stopPropagation(),e.e.preventDefault(),await this.updateCursor(e),this.setDragActive(!1);const t=await this.files.processFiles(e.e.dataTransfer.files);this.history.execute(t)},this.pathCreated=e=>{this.activeTool.isBrush()&&this.activeTool.pathCreated(e)},this.selectionCreated=e=>{if(!this.history.locked)return this.history.store(e.selected)},this.objectModified=e=>{const t=ne(e.target)?e.target.getObjects():[e.target];this.history.modify(t),this.history.store(t)},this.updateCursor=e=>{const{x:t,y:s}=this.baseCanvas.getPointer(e.e);this.baseCanvas.cursor={x:t,y:s}};const i=new URLSearchParams(window.location.search);this.baseCanvas=new re(t,{backgroundColor:"white",renderOnAddRemove:!1,selection:!1,targetFindTolerance:15}),this.canvas=new re(e,{renderOnAddRemove:!1,selection:!1}),this.pages=new be(this.baseCanvas,this.canvasWidth,this.canvasHeight,this.updateState);{const e=i.get("json");null!==e&&d.Network.loadJSON(e).then(ue.readParsed).then(this.pages.overwritePages).catch(console.error)}this.files=new ve(this.pages),this.history=new ye(this.baseCanvas,this.pages,this.updateState),this.clipboard=new fe(this.baseCanvas,this.pages,this.files,this.history,this.canvasWidth,this.canvasHeight),this.style=new Se(this.currentStyle,this.drawerOptions,this.baseCanvas.freeDrawingBrush,this.updateState),this.tools=ie(this.baseCanvas,this.history,this.clipboard),this.action=new b(this.switchTool,this.tools,this.currentStyle,this.pages,this.files,this.history,this.clipboard,this.style.set,this.globalState),this.keyboard=new f(this.action.doAction,e=>this.strict=e,this.updateState),this.activeTool=new $(this.baseCanvas,this.history,this.clipboard),this.switchTool(),this.windowResize(),window.onresize=this.windowResize,window.onbeforeunload=()=>this.baseCanvas.modified||null,this.canvas.on("mouse:down",this.mouseDown),this.canvas.on("mouse:move",this.mouseMove),this.canvas.on("mouse:up",this.mouseUp),this.baseCanvas.on("dragenter",()=>this.setDragActive(!0)),this.baseCanvas.on("dragleave",()=>this.setDragActive(!1)),this.baseCanvas.on("drop",this.drop),this.baseCanvas.on("path:created",this.pathCreated),this.baseCanvas.on("selection:created",this.selectionCreated),this.baseCanvas.on("object:modified",this.objectModified),this.baseCanvas.on("mouse:move",this.updateCursor)}}(document.querySelector("#QBoard"),document.querySelector("#BaseQBoard"),1600,900),l.a.render(n.a.createElement(X,{qboard:window.qboard}),document.querySelector("#Overlay"))}},[[325,1,2]]]);
//# sourceMappingURL=main.b8fb9b54.js.map