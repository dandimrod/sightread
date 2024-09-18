(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[637],{4403:function(e,t,r){Promise.resolve().then(r.bind(r,2148))},2148:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return F},metadata:function(){return E}});var s=r(7437),l=r(4012),n=r(1752),a=r(7945),i=r(8792),o=r(2265),c=r(8621),d=r(3887),u=r(7503),h=r(1241);function f({show:e=!0,onClose:t=()=>{},songMeta:r}){let{title:n,artist:o,id:f,source:x}=r??{},m=(0,d.nn)(),p=(0,a.FI)();return((0,a.OR)("keydown",t=>{e&&" "===t.key&&(t.preventDefault(),m.toggle())}),e&&f&&x)?(0,s.jsx)(l.u_,{show:e&&!!f,onClose:function(){return m.stop(),t()},className:"min-w-[min(100%,600px)]",children:(0,s.jsxs)("div",{className:"flex flex-col gap-3 p-8",children:[(0,s.jsxs)("div",{className:"flex w-full flex-col whitespace-nowrap",children:[(0,s.jsx)("span",{className:"text-2xl font-semibold",children:n}),(0,s.jsx)("span",{className:"overflow-hidden text-base text-gray-500",children:o})]}),(0,s.jsxs)("div",{className:"flex flex-grow flex-col overflow-hidden rounded-md",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"pointer-events-none absolute z-20 h-full w-full rounded-md"}),(0,s.jsx)(c.yL,{height:30})]}),(0,s.jsxs)("div",{style:{position:"relative",backgroundColor:"#2e2e2e",height:340,minHeight:340,width:"100%",overflow:"hidden"},onClick:()=>m.toggle(),children:[(0,s.jsx)(u.Z,{isLoading:!p.canPlay,isPlaying:p.playing,onPlay:e=>{e.stopPropagation(),m.play()}}),f&&x&&(0,s.jsx)(h.F,{songId:f,source:x})]}),(0,s.jsx)(l.ne,{height:16}),(0,s.jsx)(i.default,{href:`/play?id=${f}&source=${x}`,className:"flex h-10 w-full items-center justify-center rounded-md border-none bg-purple-primary text-xl text-white transition hover:bg-purple-hover",children:"Play Now"})]})]})}):null}var x=r(6661),m=r(7704),p=r(3167),g=r(8757);let b=new WeakMap,w=e=>{let t=b.get(e);return t||(t=new WeakSet,b.set(e,t)),t};function j(e){let{onChange:t,name:r,className:l,error:n,type:a,placeholder:i}=e;return(0,s.jsx)("input",{type:a,name:r,onChange:t,className:(0,p.Z)(l,"rounded-md p-2 text-base shadow-[inset_0px_1px_4px_rgba(0,0,0,0.25)]",n&&"outline outline-red-600"),placeholder:i})}var v=r(9866);function N(e){e.preventDefault(),e.stopPropagation()}function y(){return(0,m.jU)()?(0,m.f5)()?{source:"upload"}:{source:"upload",error:"Warning: Due to your current browser, uploaded songs will be lost after leaving the site."}:{source:"upload"}}function C({onClose:e}){let t=(0,o.useRef)(null),[r,a]=(0,o.useState)(y()),[i,c]=(0,o.useState)(!1),d=(0,n.Cr)(),u=e=>{let t=e.target.name,s=e.target.value;a({...r,[t]:s})},h=async t=>{if(t.preventDefault(),r.file&&r.artist&&r.title)try{await (0,v.Hq)(r.file,r.title,r.artist),d(),a(y()),e()}catch(e){console.error("Something went wrong",e),a({...r,error:e.toString()})}};return(0,s.jsxs)("form",{onSubmit:h,className:"relative flex w-[min(100vw,500px)] flex-col gap-5 p-8 text-base",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold",children:"Upload"}),(0,s.jsx)(l.ne,{height:0}),(0,s.jsxs)("div",{className:"flex flex-wrap items-baseline gap-2",children:[(0,s.jsx)("label",{htmlFor:"title",className:"w-12",children:"Title"}),(0,s.jsx)(S,{type:"text",name:"title",placeholder:"Enter a title",onChange:u,error:!!r.error})]}),(0,s.jsxs)("div",{className:"flex flex-wrap items-baseline gap-2",children:[(0,s.jsx)("label",{htmlFor:"artist",className:"w-12",children:"Artist"}),(0,s.jsx)(S,{type:"text",name:"artist",placeholder:"Enter an artist",onChange:u,error:!!r.error})]}),(0,s.jsxs)("div",{className:"flex flex-wrap items-baseline gap-2",children:[(0,s.jsx)("label",{htmlFor:"file",className:"w-12 self-center",children:"File"}),(0,s.jsx)("input",{ref:t,onChange:e=>{let t=e.target;if(t.files)return a({...r,file:t.files[0]})},id:"file",name:"file",type:"file",accept:".mid, .xml",className:"hidden"}),(0,s.jsxs)("div",{className:(0,p.Z)("flex-grow cursor-pointer rounded-md p-5 text-center transition","border-2 border-dashed border-gray-400 bg-gray-50 hover:shadow-lg"),onClick:()=>{let e=t.current;e&&e.click()},onDragOver:e=>{N(e)},onDrop:e=>{N(e),c(!1);let t=e.dataTransfer.files;t&&0!==t.length&&(a({...r,file:t[0]}),e.dataTransfer.clearData())},onDragEnter:e=>{N(e);let t=e.dataTransfer.items;t&&t.length>0&&c(!0)},onDragLeave:e=>{N(e),c(!1)},style:(()=>{let e={boxShadow:"none"};return r.error&&(e.border="1px solid red"),i&&(e.boxShadow="0px 0px 15px 0px #a2a2a2"),e})(),children:[r.file?r.file.name:"Drag and Drop",(0,s.jsx)("div",{className:"px-5",children:r.file?"":"or"}),(0,s.jsx)("div",{className:"text-purple-primary",children:"Click To Browse"})]})]}),(0,s.jsx)(l.ne,{height:16}),(0,s.jsx)("button",{className:"w-full cursor-pointer rounded-md bg-purple-primary py-2 text-white transition hover:bg-purple-hover",type:"submit",children:"Upload"}),r.error&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.ne,{height:24}),(0,s.jsx)("div",{"aria-label":"Error message",className:"m-auto max-w-sm border-[#f5c6cb] bg-[#f8d7da] p-6 text-red-900",children:r.error})]})]})}function S({onChange:e,name:t,className:r,error:l,type:n,placeholder:a}){return(0,s.jsx)(j,{onChange:e,className:(0,p.Z)(r,"max-w-full flex-grow bg-gray-50 text-base"),error:l,name:t,type:n,placeholder:a})}function k({columns:e,sortCol:t,onSelectCol:r,rowHeight:l}){return(0,s.jsx)(s.Fragment,{children:e.map((e,n)=>(0,s.jsx)("div",{className:(0,p.Z)("select-none","sticky top-0 z-10 flex items-center bg-purple-darkest text-white",`h-[${l}px]`),children:(0,s.jsxs)("span",{className:(0,p.Z)("flex cursor-pointer items-center gap-1",0===n&&"ml-5"),onClick:()=>r(n+1),children:[e.label,Math.abs(t)===n+1&&(0,s.jsx)(x._ME,{className:(0,p.Z)("relative top-[1px]",t<0&&"rotate-180")})]})},`col-${e.id.toString()}`))})}function D({columns:e,rows:t,search:r,onSelectRow:l,filter:n,getId:i}){var c,d;let[u,h]=(0,o.useState)(1);(0,a.Lm)()<m.AV.sm&&(e=e.filter(e=>e.keep));let f=(e="")=>!r||String(e).toUpperCase().includes(r.toUpperCase()),x=r?t.filter(e=>n.some(t=>f(e[t]))):t,p=e[Math.abs(u)-1].id,g=(c=e=>e[p]??0,d=u<0,x.sort((e,t)=>{var r,s;return(d?-1:1)*(r=c(e),s=c(t),"string"==typeof r?r.localeCompare(s+""):+r-+s)})),b=`repeat(${e.length}, 1fr)`;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"grid",style:{gridTemplateColumns:b},children:(0,s.jsx)(k,{columns:e,sortCol:u,onSelectCol:e=>{u===e?h(-e):h(e)},rowHeight:50})}),(0,s.jsx)("div",{className:"relative flex flex-grow",children:(0,s.jsxs)("div",{className:"absolute grid h-full w-full overflow-y-scroll rounded-md bg-white shadow-md",style:{gridTemplateColumns:b},children:[0===g.length&&(0,s.jsx)("h2",{className:"p-5 text-2xl",children:"No results"}),g.map((t,r)=>(0,s.jsx)("div",{className:"group contents cursor-pointer",onClick:e=>{e.stopPropagation(),l(i(t))},children:e.map((e,l)=>{let n=e.format?e.format(t[e.id]):t[e.id];return(0,s.jsx)("span",{className:"relative flex flex-shrink-0 items-center px-3 text-sm group-even:bg-gray-100 group-hover:bg-purple-hover",style:{paddingLeft:0===l?20:0,height:50},children:n},`row-${r}-col-${l}`)})},`row-${i(t)}`))]})})]})}function P({onSearch:e,placeholder:t}){return(0,s.jsxs)("div",{className:"relative h-[40px] w-80",children:[(0,s.jsx)(j,{type:"search",onChange:t=>e(t.target.value),className:"absolute h-full w-full rounded-md bg-gray-100 pl-10 placeholder-gray-700 placeholder:text-base",placeholder:t}),(0,s.jsx)(x.olm,{size:20,className:"absolute left-3 top-1/2 -translate-y-1/2",style:{transform:"translateY(-50%)"}})]})}function T({playlist:e,onDelete:t}){return(0,s.jsxs)("details",{children:[(0,s.jsxs)("summary",{className:"mx-auto flex flex-grow",children:[(0,s.jsx)(x._Qn,{width:20,height:20,className:"self-center details-mark-close"}),(0,s.jsx)(x._ME,{width:20,height:20,className:"self-center details-mark-open"}),(0,s.jsx)("h2",{className:"flex-grow self-center fontleading-6 flex gap-2 whitespace-nowrap text-base font-medium text-foreground",children:e.name}),(0,s.jsx)("button",{className:(0,p.Z)("hidden flex-nowrap whitespace-nowrap sm:flex","items-center gap-1 rounded-md px-4 py-2","bg-purple-dark text-white transition hover:bg-purple-hover"),type:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),t()},children:(0,s.jsx)(x.rFk,{width:20,height:20})})]}),(0,s.jsxs)("div",{className:"mx-auto flex w-full max-w-screen-lg flex-grow flex-col p-2 min-h-40",children:[(0,s.jsx)(D,{columns:[{label:"Title",id:"title",keep:!0},{label:"Length",id:"duration",format:e=>(0,m.mr)(Number(e))}],getId:e=>e.id,rows:e.songs,onSelectRow:()=>{},search:"",filter:["title","artist"]}),!e.songs.length&&(0,s.jsx)("p",{children:"No songs on playlist"})]})]})}function M({onClose:e}){let t=(0,n.Cr)(),[r,a]=(0,o.useState)(null),[i,c]=(0,o.useState)([]);(0,o.useEffect)(()=>d(),[]);let d=()=>{c((0,v.rL)())},u=async e=>{let r=e.target;if(r.files)try{a(null),await (0,v.G7)(r.files[0]),t(),d()}catch(e){console.error("Something went wrong",e),a(e.message)}e.target.value=""},h=e=>{confirm(`Are you sure you want to delete the playlist ${e.name}?`)&&((0,v.l8)(e.id),t(),d())};return(0,s.jsxs)("div",{className:"relative flex w-[min(100vw,500px)] flex-col gap-5 p-8 text-base",children:[(0,s.jsxs)("div",{className:"flex flex-wrap items-baseline gap-2",children:[(0,s.jsx)("h1",{className:"text-3xl font-bold",children:"Playlists"}),(0,s.jsx)("div",{className:"flex-grow"}),(0,s.jsx)("label",{htmlFor:"file",className:"self-center",children:(0,s.jsxs)("div",{className:(0,p.Z)("hidden flex-nowrap whitespace-nowrap sm:flex","items-center gap-1 rounded-md px-4 py-2","bg-purple-dark text-white transition hover:bg-purple-hover"),children:[(0,s.jsx)(x.v37,{width:20,height:20}),(0,s.jsx)("span",{children:"Add New"})]})}),(0,s.jsx)("input",{onChange:u,id:"file",name:"file",type:"file",accept:".m3u8, .m3u",className:"hidden"}),(0,s.jsx)("div",{className:"w-2"})]}),r&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.ne,{height:24}),(0,s.jsx)("div",{"aria-label":"Error message",className:"m-auto max-w-sm border-[#f5c6cb] bg-[#f8d7da] p-6 text-red-900",children:r})]}),!i.length&&(0,s.jsx)("p",{children:"No playlists found"}),i.map(e=>(0,s.jsx)(T,{playlist:e,onDelete:()=>h(e)},e.id))]})}r(9147);let E={title:"Sightread: Select a song"};function F({midishareMetadata:e}){let t=(0,n.v2)(),[r,i]=(0,o.useState)(!1),[c,d]=(0,o.useState)(!1),[u,h]=(0,o.useState)(""),b=t.find(e=>e.id===u),[j,v]=(0,o.useState)("");!function(e,t){let r=(0,g.oR)(t),s=w(r);for(let[l,n]of e)(!s.has(l)||(null==t?void 0:t.dangerouslyForceHydrate))&&(s.add(l),r.set(l,n))}([[n.g3,e]]),(0,a.OR)("keydown",e=>{"Escape"===e.key&&i(!1)});let N=()=>{i(!1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{show:!!u,songMeta:b,onClose:()=>{h(null)}}),(0,s.jsx)(l.u_,{show:r,onClose:N,children:(0,s.jsx)(C,{onClose:N})}),(0,s.jsx)(l.u_,{show:c,onClose:()=>{d(!1)},children:(0,s.jsx)(M,{onClose:N})}),(0,s.jsxs)("div",{className:"flex h-screen w-full flex-col bg-purple-lightest",children:[(0,s.jsx)(l.xG,{}),(0,s.jsxs)("div",{className:"mx-auto flex w-full max-w-screen-lg flex-grow flex-col p-6",children:[(0,s.jsx)("h2",{className:"text-3xl",children:"Learn a song"}),(0,s.jsx)(l.ne,{height:8}),(0,s.jsx)("h3",{className:"text-base",children:" Select a song, choose your settings, and begin learning"}),(0,s.jsx)(l.ne,{height:24}),(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)(P,{placeholder:"Search Songs by Title or Artist",onSearch:v}),(0,s.jsxs)("button",{className:(0,p.Z)("hidden flex-nowrap whitespace-nowrap sm:flex","items-center gap-1 rounded-md px-4 py-2","bg-purple-dark text-white transition hover:bg-purple-hover"),onClick:e=>{i(!0),e.stopPropagation()},children:[(0,s.jsx)(x.v37,{width:20,height:20}),(0,s.jsx)("span",{children:"Add New"})]}),(0,s.jsxs)("button",{className:(0,p.Z)("hidden flex-nowrap whitespace-nowrap sm:flex","items-center gap-1 rounded-md px-4 py-2","bg-purple-dark text-white transition hover:bg-purple-hover"),onClick:e=>{d(!0),e.stopPropagation()},children:[(0,s.jsx)(x.XyB,{width:20,height:20}),(0,s.jsx)("span",{children:"Manage playlists"})]})]}),(0,s.jsx)(l.ne,{height:32}),(0,s.jsx)(D,{columns:[{label:"Title",id:"title",keep:!0},{label:"Artist",id:"artist",keep:!0},{label:"Length",id:"duration",format:e=>(0,m.mr)(Number(e))},{label:"Source",id:"source"}],getId:e=>e.id,rows:t,filter:["title","artist"],onSelectRow:h,search:j})]}),(0,s.jsx)(l.ne,{height:32})]}),(0,s.jsx)(l.YG,{})]})}},7503:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var s=r(7437),l=r(6661),n=r(3167);function a({isPlaying:e,isLoading:t,onPlay:r}){if(e)return null;let a=t?(0,s.jsx)(l.aNw,{width:60,height:60,className:"animate-spin text-white"}):(0,s.jsx)("div",{className:(0,n.Z)("cursor-pointer text-purple-primary hover:text-purple-hover","grid h-16 w-16 place-items-center rounded-full bg-white"),onClick:r,children:(0,s.jsx)(l.shV,{height:36,width:36,className:"relative left-1"})});return(0,s.jsx)("div",{className:"absolute z-10 grid h-full w-full place-items-center bg-gray-700/70",onClick:e=>e.stopPropagation(),children:a})}},1241:function(e,t,r){"use strict";r.d(t,{F:function(){return c}});var s=r(7437),l=r(4620),n=r(3887),a=r(7397),i=r(2265),o=r(869);function c({songId:e,source:t}){let{data:r,error:c}=(0,l.h)(e,t),d=(0,n.nn)();(0,i.useEffect)(()=>{r&&d.setSong(r,(0,o.q3)(r))},[r,d]);let u=(0,o.q3)(r,!0);return(0,s.jsx)(a.LX,{song:r,config:u,getTime:()=>d.getTime(),hand:"both",handSettings:(0,a.pA)(u)})}},4620:function(e,t,r){"use strict";r.d(t,{h:function(){return d}});var s=r(4551),l=r(9866),n=r(8016),a=r(8620).Buffer;let i=r(915),o=new Map(i.map(e=>[e.id,e]));function c(e){return e.arrayBuffer().then(s.xz)}function d(e,t){return(0,n.ZP)([e,t],([e,t])=>(function(e,t){switch(t){case"midishare":case"builtin":let r=function(e,t){var r;if("midishare"===t)return`https://assets.midishare.dev/scores/${e}/${e}.mid`;let s=null===(r=o.get(e))||void 0===r?void 0:r.file;if(!s)throw Error("Song "+e+" not found");return"/"+s}(e,t);return fetch(r).then(c);case"base64":return Promise.resolve(function(e){let t=a.from(decodeURIComponent(e),"base64");return(0,s.xz)(t.buffer)}(e));case"upload":return Promise.resolve((0,l.Zr)(e)).then(e=>null===e?Promise.reject(Error("Could not find song")):e);case"url":return fetch(e).then(c);default:return Promise.reject(Error(`Could not get song for ${e}, ${t}`))}})(e,t))}},1752:function(e,t,r){"use strict";r.d(t,{Cr:function(){return f},Mj:function(){return b},g3:function(){return x},v2:function(){return g}});var s=r(915),l=r(7704),n=r(7807),a=r(8757),i=r(2265),o=r(9866);let c=Object.values(s).map(e=>[(0,l.km)(e.id,e.source),e]);function d(){return Object.values((0,o.MW)()).map(e=>[(0,l.km)(e.id,e.source),e])}let u=(0,n.cn)(c),h=(0,n.cn)(d());function f(){let e=(0,a.b9)(h);return(0,i.useCallback)(()=>e(d()),[e])}let x=(0,n.cn)([]),m=(0,n.cn)(e=>{let t=e(u),r=e(h),s=e(x);return new Map([...t,...r,...s])}),p=(0,n.cn)(e=>Array.from(e(m).values()));function g(){let e=(0,a.Dv)(p),[t,r]=(0,i.useState)(!1),s=(0,i.useMemo)(()=>[],[]);return(0,i.useEffect)(()=>{r(!0)},[]),t?e:s}function b(e,t){let r=(0,l.km)(e,t);return(0,a.Dv)(m).get(r)}},9147:function(){},915:function(e){"use strict";e.exports=JSON.parse('[{"file":"music/songs/Prelude I in C Major.mid","title":"Prelude I in C Major","artist":"Bach","source":"builtin","id":"fa7a5d0bf5012a4cb4a19f1de2e58b10","duration":119.14015151515304},{"file":"music/songs/Ode to Joy.mid","title":"Ode to Joy","artist":"Friedrich Schiller","source":"builtin","id":"8d4441d47b332772da481c529bd38e24","duration":33.850000000000016},{"file":"music/songs/Canon in D.mid","title":"Canon in D","artist":"Pachelbel","source":"builtin","id":"7641a769d0e9ec9c95b2b967f2ad2cf3","duration":127.08000000000034},{"file":"music/songs/Twinkle Twinkle Little Star.mid","title":"Twinkle Twinkle Little Star","artist":"Jane Taylor","source":"builtin","id":"b3fa743cca3ba0c6e0a9aa4f2a51092b","duration":23.95},{"file":"music/songs/Soon May The Wellerman Come.mid","title":"Soon May The Wellerman Come","source":"builtin","id":"eb574301c4eb30ad4d6a4dd57d091509","duration":119.9711538461538},{"file":"music/songs/The Star Spangled Banner.mid","title":"The Star Spangled Banner","artist":"John Smith","source":"builtin","id":"bb4edb91d3a12b8c745e59b8435f74c2","duration":64.45735294117637},{"file":"music/songs/Mexican Hat Dance.mid","title":"Mexican Hat Dance","artist":"Jesus Rubio","source":"builtin","id":"b50ee876b785c66a70dba3159d21e81e","duration":41.33263888888888},{"file":"music/songs/Comin Round The Mountain.mid","title":"Comin Round The Mountain","artist":"Sandberg and Wallace","source":"builtin","id":"4aaf49c8b4c28a7cea7433d54de2fcc9","duration":34.88181818181824},{"file":"music/songs/Blue Danube.mid","title":"Blue Danube","artist":"Johan Strauss","source":"builtin","id":"9b78807499154198f17eb7c8bff91879","duration":379.92857142857196},{"file":"music/songs/La Cucaracha.mid","title":"La Cucaracha","source":"builtin","id":"ba3bed184b79d04a48a19913ff29d6da","duration":47}]')}},function(e){e.O(0,[512,656,831,887,269,582,58,971,69,744],function(){return e(e.s=4403)}),_N_E=e.O()}]);