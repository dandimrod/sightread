"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[582],{9968:function(t,e,n){n.d(e,{$v:function(){return g},B0:function(){return p}});var r=n(3578),i=n(2582),o=n(6094),l=n(9024),a=n(6440),u=n(869),f=n(7704),s=n(62);let c="Arial",h={right:{black:s.D.purple.dark,white:s.D.purple.primary},left:{black:s.D.orange.dark,white:s.D.orange.primary},measure:"rgb(60,60,60)",octaveLine:"rgb(90,90,90)",rangeSelectionFill:"#44b22e"};function p(t){let e=function(t){let e=t.constrictView?t.items:void 0,n=e?e.filter(t=>"note"===t.type):[{midiNote:21},{midiNote:108}],{startNote:r,endNote:i}=(0,u.Xf)({notes:n}),{whiteHeight:o}=(0,l.nK)(t.windowWidth,{startNote:r,endNote:i}),a=t.height-o-5,f=Math.max(Math.floor(o/30),6),s=f-2;return v={...t,pianoMeasurements:(0,l.nK)(t.windowWidth,{startNote:r,endNote:i}),viewport:{start:t.time*t.pps+t.height,end:t.time*t.pps},pianoTopY:a,greyBarHeight:f,redFeltHeight:s,noteHitY:a-f-s,pianoHeight:o+5}}(t);e.ctx.fillStyle="#2e2e2e",e.ctx.fillRect(0,0,e.windowWidth,e.height);let n=(0,u.EF)(e,t=>b(t,e).end<=e.height,t=>b(t,e).start<0);for(let t of(function(t){let{ctx:e}=t;for(let[n,{left:o}]of(e.save(),e.lineWidth=2,Object.entries(t.pianoMeasurements.lanes))){let l=(0,r.km)(+n);"C"===l&&(e.strokeStyle=h.octaveLine,(0,i.jv)(e,o-2,0,o,t.height)),"F"===l&&(e.strokeStyle=h.measure,(0,i.jv)(e,o-2,0,o,t.height))}e.restore()}(e),n))"measure"===t.type&&function(t,e){let{ctx:n,windowWidth:r}=e;n.save();let o=b(t,e).start-(e.height-e.noteHitY);n.strokeStyle=n.fillStyle=h.measure,n.lineWidth=2,(0,i.jv)(n,0,o,r,o),n.strokeStyle="rgb(130,130,130)",n.fillStyle="rgb(130,130,130)",n.font=`16px ${c}`,n.fillText(t.number.toString(),r/100,Math.floor(o-5)),n.restore()}(t,e);for(let t of n)"note"===t.type&&function(t,e){if(!(t.midiNote in e.pianoMeasurements.lanes))return;let{ctx:n,pps:o,drawNotes:l}=e,a=e.pianoMeasurements.lanes[t.midiNote],f=b(t,e).end-(e.height-e.noteHitY),s=Math.floor(a.left+1),h=a.width-2,p=d(e,t),v=Math.floor(Math.max(t.duration*o,(0,u.yv)(n,"",2*h/3).height+15));if(n.save(),n.fillStyle=p,n.strokeStyle="rgb(40,40,40)",(0,i.Dk)(n,s,f,h,v),l){n.fillStyle="white",n.strokeStyle="black",n.textBaseline="bottom";let i=(0,r.km)(t.midiNote,e.keySignature),o=2*h/3;n.font=`${o}px ${c}`;let l=(0,u.yv)(n,i,o).width;n.fillText(i,s+h/2-l/2,f+v-2)}n.restore()}(t,e);e.selectedRange&&function(t){let{ctx:e,windowWidth:n,noteHitY:r,pps:i}=t;if(!t.selectedRange)return;let{start:o,end:l}=t.selectedRange;e.save();let a=l-o,u=b({type:"note",time:o,duration:a},t).start-(t.height-r),f=a*i;e.fillStyle=h.rangeSelectionFill,e.globalAlpha=.5;let s=Math.floor(n/120),c=Math.floor(s/4);e.fillRect(0,u,n,c),e.fillRect(0,u-f,s,f),e.fillRect(0,u-f-c,n,c),e.restore()}(e),function(t){let{ctx:e,windowWidth:n}=t,{pianoTopY:r,redFeltHeight:i}=t;e.save(),e.fillStyle="rgb(159,31,38)",e.fillRect(0,r-i,n,i),e.restore()}(e),function(t){let{pianoTopY:e,redFeltHeight:n,greyBarHeight:r,ctx:i}=t;i.save(),i.fillStyle="rgb(74,74,74)",i.strokeStyle="rgb(40,40,40)";let o=e-n-r;i.fillRect(0,o+.2,t.windowWidth,r),i.strokeRect(0,o,t.windowWidth,r),i.restore()}(e),(0,l.Qd)(e.pianoMeasurements,e.pianoTopY,(0,a.Dt)(e.canvasRect.left,e.canvasRect.top)),(0,l.vi)(e.ctx,e.pianoMeasurements,e.pianoTopY,function(t,e){let n=new Map;for(let t of o.ZP.getPressedNotes().keys())n.set(t,"grey");for(let r of e)(function(t,e){let n=b(e,t),r=e.duration*t.pps,i=n.start-t.height,o=(0,f.uZ)(i/r,{min:0,max:1});return 0<o&&o<1})(t,r)&&n.set(r.midiNote,d(t,r));return n}(e,n.filter(t=>"note"===t.type)))}function d(t,e){var n;let i=(null===(n=t.hands[e.track])||void 0===n?void 0:n.hand)??"both",o=(0,r.rx)(e.midiNote)?"black":"white";return"both"===i||"right"===i?h.right[o]:h.left[o]}function b(t,e){let n=e.viewport.start-t.time*e.pps,r=n-("note"===t.type?t.duration:100)*e.pps;return{start:n,end:r}}let v=null;function g(t){return!!v&&t>=v.pianoTopY}},5161:function(t,e,n){n.d(e,{DZ:function(){return h},ER:function(){return d},rc:function(){return u},vo:function(){return p}});var r=n(7704),i=n(6440),o=n(9968),l=n(869);let a=!1;function u(){return a}function f(t,e){let n=(0,r.uZ)(e+t.getTime(),{min:0,max:t.getDuration()});t.seek(n)}let s=0,c=!1;function h(t,e){if((0,o.$v)(e.clientY)){a=!1;return}a=!0,e.target.setPointerCapture(e.pointerId),t.isPlaying()&&(c=!0,t.pause()),s=0}function p(t,e){e.target.releasePointerCapture(e.pointerId),function t(e){a=!1,requestAnimationFrame(()=>{let n=s/l.i6;Math.abs(n)>1/60*e.store.get(e.getBpmModifier())?(f(e,n),s*=.96,t(e)):(c&&(c=!1,e.play()),s=0)})}(t)}function d(t,e){if(!a)return;let n=(0,i.hT)().y;f(t,n/l.i6),s=Math.abs(n)>5?n:0}},2582:function(t,e,n){function r(t,e,n,r,i){t.beginPath(),t.moveTo(e,n),t.lineTo(r,i),t.stroke()}function i(t,e,n,r,i,o){let l=(null==o?void 0:o.topRadius)??10,a=(null==o?void 0:o.bottomRadius)??10;(r<=2*l||i<=2*l)&&(l=Math.min(r,i)/2),(r<=2*a||i<=2*a)&&(a=Math.min(r,i)/2),t.beginPath(),t.moveTo(e+l,n),t.arcTo(e+r,n,e+r,n+i,l),t.arcTo(e+r,n+i,e,n+i,a),t.arcTo(e,n+i,e,n,a),t.arcTo(e,n,e+r,n,l),t.closePath(),t.fill(),t.stroke()}function o(t,e,n,r,i,o=Math.abs(Math.min(r,i)/2)){t.beginPath(),t.moveTo(e,n),t.arcTo(e+r,n,e+r,n+i,o),t.lineTo(e+r,n+i),t.lineTo(e+r,n),t.lineTo(e,n),t.closePath(),t.fill(),t.stroke()}n.d(e,{Xv:function(){return l.Xv},lU:function(){return l.lU},NS:function(){return l.NS},oN:function(){return l.oN},p5:function(){return l.p5},B8:function(){return l.B8},_e:function(){return l._e},bQ:function(){return l.bQ},Qb:function(){return l.Qb},d4:function(){return l.d4},jp:function(){return l.jp},l_:function(){return l.l_},eN:function(){return l.eN},Ib:function(){return l.Ib},jv:function(){return r},I3:function(){return o},Dk:function(){return i}});var l=n(6242);n(9024)},9024:function(t,e,n){let r,i,o;n.d(e,{vi:function(){return d},nK:function(){return p},Qd:function(){return v}});var l=n(3578),a=n(2582),u=n(6094),f=n(6440),s=n(7704),c=n(5566);(0,s.jU)()?r=t=>{let e=new Image;return e.src=t,new Promise((t,n)=>{e.onload=()=>t(e),e.onerror=()=>n(e)})}:(c.env.RENDER,r=()=>Promise.resolve()),r("/images/black-key-raised.png").then(t=>{i=t}),r("/images/black-key-pressed.png").then(t=>{o=t});var h=n(5161);function p(t,e){let n=(null==e?void 0:e.startNote)??21,r=(null==e?void 0:e.endNote)??108,i=0;for(let t=n;t<=r;t++)(0,l.iB)(t)&&i++;let o=t/i,a=Math.floor(Math.min(5*o,250)),u=o/2,f={pianoWidth:t,whiteHeight:a,blackHeight:Math.floor(2/3*a),whiteNoteSeparation:o/20,lanes:{}},s=0;for(let t=n;t<=r;t++)if((0,l.rx)(t)){let e=o*s,n=e-u/2-2+({1:-(2/3-.5),3:+(2/3-.5),6:-(2/3-.5),8:0,10:+(2/3-.5)})[t%12]*u;f.lanes[t]={width:u,left:n,whiteMiddle:e}}else f.lanes[t]={width:o,left:o*s},s++;return f}function d(t,e,n,r){let{whiteHeight:u,whiteNoteSeparation:f,blackHeight:s,lanes:c}=e;t.save();let h=Object.entries(c).filter(([t])=>!(0,l.rx)(+t)),p=Object.entries(c).filter(([t])=>(0,l.rx)(+t));for(let[i,o]of(t.strokeStyle="transparent",t.fillStyle="black",t.fillRect(0,n,e.pianoWidth,u+5),h)){let{left:s,width:c}=o;t.fillStyle="rgb(255,253,240)";let h=u+(r.has(+i)?2:0);if((0,a.Dk)(t,s,n,c-f,h,{topRadius:0,bottomRadius:c/10}),"C"==(0,l.km)(+i)){let r=(0,l.jO)(+i);t.fillStyle="rgb(190,190,190)",t.font=`${.65*c}px Arial`;let o=`C${r}`,{width:a}=t.measureText(o);t.textBaseline="bottom",t.fillText(o,s+c/2-a/2-e.whiteNoteSeparation/2,n+u-8)}let p=r.get(+i);p&&(t.fillStyle=p,(0,a.Dk)(t,s,n,c-f,h,{topRadius:0,bottomRadius:c/10}))}for(let[l,u]of p){let{left:f,width:c,whiteMiddle:h}=u,p=e.whiteNoteSeparation;t.strokeStyle="transparent",t.fillStyle="black",t.fillRect(f-2,n,c+3,s+2),(0,a.I3)(t,h-e.whiteNoteSeparation-p,n+s+1.5,p+.2,p,c/4),(0,a.I3)(t,h+p,n+s+1.5,-p-.2,p,c/4);let d=r.has(+l);t.fillStyle=r.get(+l)??"black";let b={blackKeyRaised:i,blackKeyPressed:o},v=d?b.blackKeyPressed:b.blackKeyRaised,g=d?n:n-2;t.drawImage(v,f,g,c,s),r.has(+l)&&(t.globalCompositeOperation="overlay",t.fillRect(f,g,c,s),t.globalCompositeOperation="source-over",t.globalAlpha=1)}t.restore()}let b=null;function v(t,e,n){if(!(0,f.c_)()||(0,h.rc)()){(0,s.hj)(b)&&(u.ZP.release(b),b=null);return}let{blackHeight:r,whiteHeight:i}=t,o=null;for(let[a,u]of Object.entries(t.lanes)){let{left:t,width:f}=u;if(g(n,{x:t,y:e,height:(0,l.rx)(+a)?r:i,width:f})){o=+a;break}}if(o&&!(0,l.rx)(o)&&(0,l.rx)(o+1)&&o<108){let{left:i,width:l}=t.lanes[o+1];g(n,{x:i,y:e,height:r,width:l})&&(o+=1)}o!=b&&((0,s.hj)(b)&&(u.ZP.release(b),b=null),(0,s.hj)(o)&&(u.ZP.press(o,63.5),b=o))}function g(t,e){let n=e.x<=t.x&&t.x<=e.x+e.width,r=e.y<=t.y&&t.y<=e.y+e.height;return n&&r}},6242:function(t,e,n){n.d(e,{B8:function(){return b},Ib:function(){return m},NS:function(){return S},Qb:function(){return p},Xv:function(){return a},_e:function(){return h},bQ:function(){return v},d4:function(){return s},eN:function(){return d},jp:function(){return c},lU:function(){return l},l_:function(){return g},oN:function(){return x},p5:function(){return w}});var r=n(3578),i=n(2582);let o="Leland",l=20,a=20,u={A:5,B:6,C:0,D:1,E:2,F:3,G:4},f={treble:{bottomRow:k((0,r.qC)("E4")),topRow:k((0,r.qC)("F5"))},bass:{bottomRow:k((0,r.qC)("G2")),topRow:k((0,r.qC)("A3"))}};function s(t,e,n,r){t.save(),t.lineWidth=3,(0,i.jv)(t,e,n,e,r),t.restore()}function c(t,e,n,r){t.save(),t.lineWidth=2;for(let o=0;o<5;o++,n+=20)(0,i.jv)(t,e,n,r,n);t.restore()}function h(t,e,n,r,l,a,u){let f=y(l,a,u),s=f<0?-1:1;if(1==Math.abs(f%2)&&(f-=s),0<=f&&f<10)return;let c=Math.min(0,f),h=Math.max(0,f);for(h>=10&&(c=10),t.save(),t.font=`80px ${o}`,t.lineWidth=2;c<=h;c+=2){let o=10*c+r;(0,i.jv)(t,e,o,e+n,o)}t.restore()}function p(t,e,n,r){t.save(),t.strokeStyle="rgba(110, 40, 251, 0.43)",t.shadowOffsetX=-4,t.shadowOffsetY=1,t.shadowBlur=5,t.shadowColor="black",t.lineWidth=4,(0,i.jv)(t,e,n,e,r),t.restore()}function d(t,e,n,i){t.save();let{numerator:a,denominator:u}=i,f=r.pE["timeSig"+a],s=r.pE["timeSig"+u];t.font=`80px ${o}`,t.fillText(f,e,n+l),t.fillText(s,e,n+3*l),t.restore()}function b(t,e,n,i,a){t.save();let u="flat"===(0,r.SQ)(i).type?r.pE.accidentalFlat:r.pE.accidentalSharp;for(let f of(t.font=`80px ${o}`,(0,r.SQ)(i).notes.map(t=>{let e="treble"===a?5:3;return("A"===t||"B"===t)&&e--,t+e}))){let i=n+10*y((0,r.qC)(f),a,void 0);t.fillText(u,e,i),e+=l}t.restore()}function v(t,e,n,i){t.save(),t.font=`80px ${o}`,g(t,r.pE.noteheadBlack,e-l/2,n,80,i),t.restore()}function g(t,e,n,r,i,l="black"){t.save(),i?t.font=`${i}px ${o}`:t.font=o,t.fillStyle=l,t.strokeStyle=l,t.fillText(e,n,r),t.restore()}function m(t,e,n,r){return n+10*y(t,e,r)}function y(t,e,n){return f[e].topRow-k(t,n)}function k(t,e){let n=(0,r.km)(t,e);return 7*(0,r.jO)(t)+u[n[0]]}function w(t,e,n){let i=n+10*y((0,r.qC)("G4"),"treble",void 0);g(t,r.pE.gClef,e,i,80)}function x(t,e,n){let i=n+10*y((0,r.qC)("F3"),"bass",void 0);g(t,r.pE.fClef,e,i,80)}function S(t,e,n,i){g(t,r.pE.brace,e,n,i)}},6440:function(t,e,n){n.d(e,{Dt:function(){return s},c_:function(){return u},hT:function(){return f}});var r=n(7704);let i=!1,o={x:1/0,y:1/0},l={x:0,y:0},a=t=>{let{clientX:e,clientY:n}=t;l=i?{x:e-o.x,y:n-o.y}:{x:0,y:0},o={x:e,y:n}};function u(){return i}function f(){return l}function s(t,e){return{x:o.x-t,y:o.y-e}}(0,r.jU)()&&(window.addEventListener("pointerdown",function(t){i=!0,a(t)},{passive:!0,capture:!0}),window.addEventListener("pointerup",function(t){i=!1,a(t)},{passive:!0,capture:!0}),window.addEventListener("pointermove",a,{passive:!0,capture:!0}))},62:function(t,e,n){n.d(e,{D:function(){return r}});let r={purple:{light:"#EEE5FF",hover:"#b99af4",primary:"#8147EB",dark:"#611AE5"},orange:{light:"#DC7E52",primary:"#EB7847",dark:"#CF4E17"},green:{light:"#44b22e"}}}}]);