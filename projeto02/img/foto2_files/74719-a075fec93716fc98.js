(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74719],{41033:function(e,r,t){"use strict";t.d(r,{Z:function(){return S}});var n=t(26831),o=t(28193),i=t(2784),a=t(6277),l=t(37198),s=t(69075),d=t(65992),u=t(43853),c=t(15633),f=t(72579),p=t(47746),m=t(98659),h=t(69222),b=t(15672);function v(e){return(0,b.Z)("MuiCollapse",e)}(0,h.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var g=t(52322);let w=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],y=e=>{let{orientation:r,classes:t}=e,n={root:["root",`${r}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${r}`],wrapperInner:["wrapperInner",`${r}`]};return(0,s.Z)(n,v,t)},Z=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[t.orientation],"entered"===t.state&&r.entered,"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&r.hidden]}})(({theme:e,ownerState:r})=>(0,o.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===r.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===r.state&&(0,o.Z)({height:"auto",overflow:"visible"},"horizontal"===r.orientation&&{width:"auto"}),"exited"===r.state&&!r.in&&"0px"===r.collapsedSize&&{visibility:"hidden"})),x=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,r)=>r.wrapper})(({ownerState:e})=>(0,o.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),C=(0,d.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,r)=>r.wrapperInner})(({ownerState:e})=>(0,o.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),$=i.forwardRef(function(e,r){let t=(0,u.Z)({props:e,name:"MuiCollapse"}),{addEndListener:s,children:d,className:h,collapsedSize:b="0px",component:v,easing:$,in:S,onEnter:E,onEntered:P,onEntering:R,onExit:k,onExited:z,onExiting:I,orientation:M="vertical",style:N,timeout:D=c.x9.standard,TransitionComponent:j=l.ZP}=t,B=(0,n.Z)(t,w),L=(0,o.Z)({},t,{orientation:M,collapsedSize:b}),q=y(L),T=(0,p.Z)(),A=i.useRef(),F=i.useRef(null),_=i.useRef(),H="number"==typeof b?`${b}px`:b,W="horizontal"===M,O=W?"width":"height";i.useEffect(()=>()=>{clearTimeout(A.current)},[]);let X=i.useRef(null),U=(0,m.Z)(r,X),G=e=>r=>{if(e){let t=X.current;void 0===r?e(t):e(t,r)}},J=()=>F.current?F.current[W?"clientWidth":"clientHeight"]:0,K=G((e,r)=>{F.current&&W&&(F.current.style.position="absolute"),e.style[O]=H,E&&E(e,r)}),Q=G((e,r)=>{let t=J();F.current&&W&&(F.current.style.position="");let{duration:n,easing:o}=(0,f.C)({style:N,timeout:D,easing:$},{mode:"enter"});if("auto"===D){let r=T.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${r}ms`,_.current=r}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[O]=`${t}px`,e.style.transitionTimingFunction=o,R&&R(e,r)}),V=G((e,r)=>{e.style[O]="auto",P&&P(e,r)}),Y=G(e=>{e.style[O]=`${J()}px`,k&&k(e)}),ee=G(z),er=G(e=>{let r=J(),{duration:t,easing:n}=(0,f.C)({style:N,timeout:D,easing:$},{mode:"exit"});if("auto"===D){let t=T.transitions.getAutoHeightDuration(r);e.style.transitionDuration=`${t}ms`,_.current=t}else e.style.transitionDuration="string"==typeof t?t:`${t}ms`;e.style[O]=H,e.style.transitionTimingFunction=n,I&&I(e)}),et=e=>{"auto"===D&&(A.current=setTimeout(e,_.current||0)),s&&s(X.current,e)};return(0,g.jsx)(j,(0,o.Z)({in:S,onEnter:K,onEntered:V,onEntering:Q,onExit:Y,onExited:ee,onExiting:er,addEndListener:et,nodeRef:X,timeout:"auto"===D?null:D},B,{children:(e,r)=>(0,g.jsx)(Z,(0,o.Z)({as:v,className:(0,a.Z)(q.root,h,{entered:q.entered,exited:!S&&"0px"===H&&q.hidden}[e]),style:(0,o.Z)({[W?"minWidth":"minHeight"]:H},N),ownerState:(0,o.Z)({},L,{state:e}),ref:U},r,{children:(0,g.jsx)(x,{ownerState:(0,o.Z)({},L,{state:e}),className:q.wrapper,ref:F,children:(0,g.jsx)(C,{ownerState:(0,o.Z)({},L,{state:e}),className:q.wrapperInner,children:d})})}))}))});$.muiSupportAuto=!0;var S=$},38162:function(e,r,t){"use strict";t.d(r,{Z:function(){return B}});var n=t(26831),o=t(28193),i=t(2784),a=t(6277),l=t(69075),s=t(28165),d=t(47591),u=t(7342),c=t(47746),f=t(65992),p=t(43853),m=t(69222),h=t(15672);function b(e){return(0,h.Z)("MuiLinearProgress",e)}(0,m.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var v=t(52322);let g=["className","color","value","valueBuffer","variant"],w=e=>e,y,Z,x,C,$,S,E=(0,s.F4)(y||(y=w`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),P=(0,s.F4)(Z||(Z=w`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),R=(0,s.F4)(x||(x=w`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),k=e=>{let{classes:r,variant:t,color:n}=e,o={root:["root",`color${(0,u.Z)(n)}`,t],dashed:["dashed",`dashedColor${(0,u.Z)(n)}`],bar1:["bar",`barColor${(0,u.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","buffer"!==t&&`barColor${(0,u.Z)(n)}`,"buffer"===t&&`color${(0,u.Z)(n)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,l.Z)(o,b,r)},z=(e,r)=>"inherit"===r?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:"light"===e.palette.mode?(0,d.$n)(e.palette[r].main,.62):(0,d._j)(e.palette[r].main,.5),I=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,r[`color${(0,u.Z)(t.color)}`],r[t.variant]]}})(({ownerState:e,theme:r})=>(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:z(r,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"})),M=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.dashed,r[`dashedColor${(0,u.Z)(t.color)}`]]}})(({ownerState:e,theme:r})=>{let t=z(r,e.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},(0,s.iv)(C||(C=w`
    animation: ${0} 3s infinite linear;
  `),R)),N=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar1Indeterminate,"determinate"===t.variant&&r.bar1Determinate,"buffer"===t.variant&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,s.iv)($||($=w`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),E)),D=(0,f.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.bar,r[`barColor${(0,u.Z)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&r.bar2Indeterminate,"buffer"===t.variant&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(r.vars||r).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:z(r,e.color),transition:"transform .4s linear"}),({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,s.iv)(S||(S=w`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),P)),j=i.forwardRef(function(e,r){let t=(0,p.Z)({props:e,name:"MuiLinearProgress"}),{className:i,color:l="primary",value:s,valueBuffer:d,variant:u="indeterminate"}=t,f=(0,n.Z)(t,g),m=(0,o.Z)({},t,{color:l,variant:u}),h=k(m),b=(0,c.Z)(),w={},y={bar1:{},bar2:{}};if(("determinate"===u||"buffer"===u)&&void 0!==s){w["aria-valuenow"]=Math.round(s),w["aria-valuemin"]=0,w["aria-valuemax"]=100;let e=s-100;"rtl"===b.direction&&(e=-e),y.bar1.transform=`translateX(${e}%)`}if("buffer"===u&&void 0!==d){let e=(d||0)-100;"rtl"===b.direction&&(e=-e),y.bar2.transform=`translateX(${e}%)`}return(0,v.jsxs)(I,(0,o.Z)({className:(0,a.Z)(h.root,i),ownerState:m,role:"progressbar"},w,{ref:r},f,{children:["buffer"===u?(0,v.jsx)(M,{className:h.dashed,ownerState:m}):null,(0,v.jsx)(N,{className:h.bar1,ownerState:m,style:y.bar1}),"determinate"===u?null:(0,v.jsx)(D,{className:h.bar2,ownerState:m,style:y.bar2})]}))});var B=j},34273:function(e){function r(){return new DOMException("The request is not allowed","NotAllowedError")}async function t(e){if(!navigator.clipboard)throw r();return navigator.clipboard.writeText(e)}async function n(e){let t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);let n=window.getSelection(),o=window.document.createRange();n.removeAllRanges(),o.selectNode(t),n.addRange(o);let i=!1;try{i=window.document.execCommand("copy")}finally{n.removeAllRanges(),window.document.body.removeChild(t)}if(!i)throw r()}async function o(e){try{await t(e)}catch(t){try{await n(e)}catch(e){throw e||t||r()}}}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */e.exports=o}}]);
//# sourceMappingURL=74719-a075fec93716fc98.js.map