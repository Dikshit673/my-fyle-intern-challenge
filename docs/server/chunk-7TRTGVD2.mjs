import './polyfills.server.mjs';
import{$ as X,A as z,Aa as Z3,B as d2,Ba as c4,C as c2,Ca as m1,D as w,Da as a4,E as H2,Ea as e4,F as g,Fa as i4,G as e2,Ga as r4,H as K,Ha as n4,I as B3,Ia as s4,J as I3,Ja as t4,K as i1,L as r1,M as m,Ma as o4,N as p,O as L,P as R3,Q as O3,Qa as l4,R as z2,S as U3,T as _,Ta as q1,U as M,V as n1,W as s1,X as G3,Y as $,Z as C,_ as D,a as A3,aa as W3,b as _3,ba as q3,c as P3,ca as j3,d as D3,da as $3,e as O1,ea as y2,f as a1,fa as G1,g as x2,ga as t1,h as b2,ha as X3,i as E,ia as Y3,j as o2,ja as T2,k as F3,ka as E2,l as U1,m as D2,ma as K3,n as N,o as B,p as A,q as T3,r as Z,ra as B2,s as q,sa as o1,t as j,u as F2,ua as Q3,v as v2,va as W1,w as U,x as E3,xa as J3,y as e1,ya as l1,z as d,za as f1}from"./chunk-SGI5XYGL.mjs";import{a as Y,b as L2}from"./chunk-VVCT4QZE.mjs";function f4(a,c){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);c&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),i.push.apply(i,e)}return i}function h(a){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?f4(Object(i),!0).forEach(function(e){k(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):f4(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function L1(a){"@babel/helpers - typeof";return L1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},L1(a)}function s0(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function m4(a,c){for(var i=0;i<c.length;i++){var e=c[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function t0(a,c,i){return c&&m4(a.prototype,c),i&&m4(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function k(a,c,i){return c in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,a}function t3(a,c){return l0(a)||m0(a,c)||T4(a,c)||u0()}function $2(a){return o0(a)||f0(a)||T4(a)||h0()}function o0(a){if(Array.isArray(a))return K1(a)}function l0(a){if(Array.isArray(a))return a}function f0(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function m0(a,c){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var e=[],r=!0,n=!1,s,t;try{for(i=i.call(a);!(r=(s=i.next()).done)&&(e.push(s.value),!(c&&e.length===c));r=!0);}catch(o){n=!0,t=o}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw t}}return e}}function T4(a,c){if(a){if(typeof a=="string")return K1(a,c);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return K1(a,c)}}function K1(a,c){(c==null||c>a.length)&&(c=a.length);for(var i=0,e=new Array(c);i<c;i++)e[i]=a[i];return e}function h0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var h4=function(){},o3={},E4={},B4=null,I4={mark:h4,measure:h4};try{typeof window<"u"&&(o3=window),typeof document<"u"&&(E4=document),typeof MutationObserver<"u"&&(B4=MutationObserver),typeof performance<"u"&&(I4=performance)}catch{}var p0=o3.navigator||{},u4=p0.userAgent,p4=u4===void 0?"":u4,f2=o3,b=E4,v4=B4,h1=I4,u7=!!f2.document,s2=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",R4=~p4.indexOf("MSIE")||~p4.indexOf("Trident/"),u1,p1,v1,d1,H1,i2="___FONT_AWESOME___",Q1=16,O4="fa",U4="svg-inline--fa",C2="data-fa-i2svg",J1="data-fa-pseudo-element",v0="data-fa-pseudo-element-pending",l3="data-prefix",f3="data-icon",d4="fontawesome-i2svg",d0="async",H0=["HTML","HEAD","STYLE","SCRIPT"],G4=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),x="classic",y="sharp",m3=[x,y];function X2(a){return new Proxy(a,{get:function(i,e){return e in i?i[e]:i[x]}})}var U2=X2((u1={},k(u1,x,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),k(u1,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),u1)),G2=X2((p1={},k(p1,x,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),k(p1,y,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),p1)),W2=X2((v1={},k(v1,x,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),k(v1,y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),v1)),z0=X2((d1={},k(d1,x,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),k(d1,y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),d1)),V0=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,W4="fa-layers-text",M0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,C0=X2((H1={},k(H1,x,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),k(H1,y,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),H1)),q4=[1,2,3,4,5,6,7,8,9,10],g0=q4.concat([11,12,13,14,15,16,17,18,19,20]),L0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},q2=new Set;Object.keys(G2[x]).map(q2.add.bind(q2));Object.keys(G2[y]).map(q2.add.bind(q2));var x0=[].concat(m3,$2(q2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V2.GROUP,V2.SWAP_OPACITY,V2.PRIMARY,V2.SECONDARY]).concat(q4.map(function(a){return"".concat(a,"x")})).concat(g0.map(function(a){return"w-".concat(a)})),R2=f2.FontAwesomeConfig||{};function b0(a){var c=b.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function y0(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}b&&typeof b.querySelector=="function"&&(H4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],H4.forEach(function(a){var c=t3(a,2),i=c[0],e=c[1],r=y0(b0(i));r!=null&&(R2[e]=r)}));var H4,j4={styleDefault:"solid",familyDefault:"classic",cssPrefix:O4,replacementClass:U4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};R2.familyPrefix&&(R2.cssPrefix=R2.familyPrefix);var k2=h(h({},j4),R2);k2.autoReplaceSvg||(k2.observeMutations=!1);var v={};Object.keys(j4).forEach(function(a){Object.defineProperty(v,a,{enumerable:!0,set:function(i){k2[a]=i,O2.forEach(function(e){return e(v)})},get:function(){return k2[a]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(c){k2.cssPrefix=c,O2.forEach(function(i){return i(v)})},get:function(){return k2.cssPrefix}});f2.FontAwesomeConfig=v;var O2=[];function N0(a){return O2.push(a),function(){O2.splice(O2.indexOf(a),1)}}var l2=Q1,a2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function S0(a){if(!(!a||!s2)){var c=b.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var i=b.head.childNodes,e=null,r=i.length-1;r>-1;r--){var n=i[r],s=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(e=n)}return b.head.insertBefore(c,e),a}}var w0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function j2(){for(var a=12,c="";a-- >0;)c+=w0[Math.random()*62|0];return c}function A2(a){for(var c=[],i=(a||[]).length>>>0;i--;)c[i]=a[i];return c}function h3(a){return a.classList?A2(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function $4(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function k0(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,'="').concat($4(a[i]),'" ')},"").trim()}function y1(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,": ").concat(a[i].trim(),";")},"")}function u3(a){return a.size!==a2.size||a.x!==a2.x||a.y!==a2.y||a.rotate!==a2.rotate||a.flipX||a.flipY}function A0(a){var c=a.transform,i=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(i/2," 256)")},n="translate(".concat(c.x*32,", ").concat(c.y*32,") "),s="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),t="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(n," ").concat(s," ").concat(t)},l={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:o,path:l}}function _0(a){var c=a.transform,i=a.width,e=i===void 0?Q1:i,r=a.height,n=r===void 0?Q1:r,s=a.startCentered,t=s===void 0?!1:s,o="";return t&&R4?o+="translate(".concat(c.x/l2-e/2,"em, ").concat(c.y/l2-n/2,"em) "):t?o+="translate(calc(-50% + ".concat(c.x/l2,"em), calc(-50% + ").concat(c.y/l2,"em)) "):o+="translate(".concat(c.x/l2,"em, ").concat(c.y/l2,"em) "),o+="scale(".concat(c.size/l2*(c.flipX?-1:1),", ").concat(c.size/l2*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var P0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function X4(){var a=O4,c=U4,i=v.cssPrefix,e=v.replacementClass,r=P0;if(i!==a||e!==c){var n=new RegExp("\\.".concat(a,"\\-"),"g"),s=new RegExp("\\--".concat(a,"\\-"),"g"),t=new RegExp("\\.".concat(c),"g");r=r.replace(n,".".concat(i,"-")).replace(s,"--".concat(i,"-")).replace(t,".".concat(e))}return r}var z4=!1;function j1(){v.autoAddCss&&!z4&&(S0(X4()),z4=!0)}var D0={mixout:function(){return{dom:{css:X4,insertCss:j1}}},hooks:function(){return{beforeDOMElementCreation:function(){j1()},beforeI2svg:function(){j1()}}}},r2=f2||{};r2[i2]||(r2[i2]={});r2[i2].styles||(r2[i2].styles={});r2[i2].hooks||(r2[i2].hooks={});r2[i2].shims||(r2[i2].shims=[]);var Q=r2[i2],Y4=[],F0=function a(){b.removeEventListener("DOMContentLoaded",a),x1=1,Y4.map(function(c){return c()})},x1=!1;s2&&(x1=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),x1||b.addEventListener("DOMContentLoaded",F0));function T0(a){s2&&(x1?setTimeout(a,0):Y4.push(a))}function Y2(a){var c=a.tag,i=a.attributes,e=i===void 0?{}:i,r=a.children,n=r===void 0?[]:r;return typeof a=="string"?$4(a):"<".concat(c," ").concat(k0(e),">").concat(n.map(Y2).join(""),"</").concat(c,">")}function V4(a,c,i){if(a&&a[c]&&a[c][i])return{prefix:c,iconName:i,icon:a[c][i]}}var E0=function(c,i){return function(e,r,n,s){return c.call(i,e,r,n,s)}},$1=function(c,i,e,r){var n=Object.keys(c),s=n.length,t=r!==void 0?E0(i,r):i,o,l,f;for(e===void 0?(o=1,f=c[n[0]]):(o=0,f=e);o<s;o++)l=n[o],f=t(f,c[l],l,c);return f};function B0(a){for(var c=[],i=0,e=a.length;i<e;){var r=a.charCodeAt(i++);if(r>=55296&&r<=56319&&i<e){var n=a.charCodeAt(i++);(n&64512)==56320?c.push(((r&1023)<<10)+(n&1023)+65536):(c.push(r),i--)}else c.push(r)}return c}function Z1(a){var c=B0(a);return c.length===1?c[0].toString(16):null}function I0(a,c){var i=a.length,e=a.charCodeAt(c),r;return e>=55296&&e<=56319&&i>c+1&&(r=a.charCodeAt(c+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function M4(a){return Object.keys(a).reduce(function(c,i){var e=a[i],r=!!e.icon;return r?c[e.iconName]=e.icon:c[i]=e,c},{})}function c3(a,c){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,r=e===void 0?!1:e,n=M4(c);typeof Q.hooks.addPack=="function"&&!r?Q.hooks.addPack(a,M4(c)):Q.styles[a]=h(h({},Q.styles[a]||{}),n),a==="fas"&&c3("fa",c)}var z1,V1,M1,N2=Q.styles,R0=Q.shims,O0=(z1={},k(z1,x,Object.values(W2[x])),k(z1,y,Object.values(W2[y])),z1),p3=null,K4={},Q4={},J4={},Z4={},c6={},U0=(V1={},k(V1,x,Object.keys(U2[x])),k(V1,y,Object.keys(U2[y])),V1);function G0(a){return~x0.indexOf(a)}function W0(a,c){var i=c.split("-"),e=i[0],r=i.slice(1).join("-");return e===a&&r!==""&&!G0(r)?r:null}var a6=function(){var c=function(n){return $1(N2,function(s,t,o){return s[o]=$1(t,n,{}),s},{})};K4=c(function(r,n,s){if(n[3]&&(r[n[3]]=s),n[2]){var t=n[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){r[o.toString(16)]=s})}return r}),Q4=c(function(r,n,s){if(r[s]=s,n[2]){var t=n[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){r[o]=s})}return r}),c6=c(function(r,n,s){var t=n[2];return r[s]=s,t.forEach(function(o){r[o]=s}),r});var i="far"in N2||v.autoFetchSvg,e=$1(R0,function(r,n){var s=n[0],t=n[1],o=n[2];return t==="far"&&!i&&(t="fas"),typeof s=="string"&&(r.names[s]={prefix:t,iconName:o}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:t,iconName:o}),r},{names:{},unicodes:{}});J4=e.names,Z4=e.unicodes,p3=N1(v.styleDefault,{family:v.familyDefault})};N0(function(a){p3=N1(a.styleDefault,{family:v.familyDefault})});a6();function v3(a,c){return(K4[a]||{})[c]}function q0(a,c){return(Q4[a]||{})[c]}function M2(a,c){return(c6[a]||{})[c]}function e6(a){return J4[a]||{prefix:null,iconName:null}}function j0(a){var c=Z4[a],i=v3("fas",a);return c||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function m2(){return p3}var d3=function(){return{prefix:null,iconName:null,rest:[]}};function N1(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.family,e=i===void 0?x:i,r=U2[e][a],n=G2[e][a]||G2[e][r],s=a in Q.styles?a:null;return n||s||null}var C4=(M1={},k(M1,x,Object.keys(W2[x])),k(M1,y,Object.keys(W2[y])),M1);function S1(a){var c,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,r=e===void 0?!1:e,n=(c={},k(c,x,"".concat(v.cssPrefix,"-").concat(x)),k(c,y,"".concat(v.cssPrefix,"-").concat(y)),c),s=null,t=x;(a.includes(n[x])||a.some(function(l){return C4[x].includes(l)}))&&(t=x),(a.includes(n[y])||a.some(function(l){return C4[y].includes(l)}))&&(t=y);var o=a.reduce(function(l,f){var u=W0(v.cssPrefix,f);if(N2[f]?(f=O0[t].includes(f)?z0[t][f]:f,s=f,l.prefix=f):U0[t].indexOf(f)>-1?(s=f,l.prefix=N1(f,{family:t})):u?l.iconName=u:f!==v.replacementClass&&f!==n[x]&&f!==n[y]&&l.rest.push(f),!r&&l.prefix&&l.iconName){var H=s==="fa"?e6(l.iconName):{},V=M2(l.prefix,l.iconName);H.prefix&&(s=null),l.iconName=H.iconName||V||l.iconName,l.prefix=H.prefix||l.prefix,l.prefix==="far"&&!N2.far&&N2.fas&&!v.autoFetchSvg&&(l.prefix="fas")}return l},d3());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===y&&(N2.fass||v.autoFetchSvg)&&(o.prefix="fass",o.iconName=M2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=m2()||"fas"),o}var $0=function(){function a(){s0(this,a),this.definitions={}}return t0(a,[{key:"add",value:function(){for(var i=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(t){i.definitions[t]=h(h({},i.definitions[t]||{}),s[t]),c3(t,s[t]);var o=W2[x][t];o&&c3(o,s[t]),a6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(n){var s=r[n],t=s.prefix,o=s.iconName,l=s.icon,f=l[2];i[t]||(i[t]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(i[t][u]=l)}),i[t][o]=l}),i}}]),a}(),g4=[],S2={},w2={},X0=Object.keys(w2);function Y0(a,c){var i=c.mixoutsTo;return g4=a,S2={},Object.keys(w2).forEach(function(e){X0.indexOf(e)===-1&&delete w2[e]}),g4.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(i[s]=r[s]),L1(r[s])==="object"&&Object.keys(r[s]).forEach(function(t){i[s]||(i[s]={}),i[s][t]=r[s][t]})}),e.hooks){var n=e.hooks();Object.keys(n).forEach(function(s){S2[s]||(S2[s]=[]),S2[s].push(n[s])})}e.provides&&e.provides(w2)}),i}function a3(a,c){for(var i=arguments.length,e=new Array(i>2?i-2:0),r=2;r<i;r++)e[r-2]=arguments[r];var n=S2[a]||[];return n.forEach(function(s){c=s.apply(null,[c].concat(e))}),c}function g2(a){for(var c=arguments.length,i=new Array(c>1?c-1:0),e=1;e<c;e++)i[e-1]=arguments[e];var r=S2[a]||[];r.forEach(function(n){n.apply(null,i)})}function n2(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return w2[a]?w2[a].apply(null,c):void 0}function e3(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,i=a.prefix||m2();if(c)return c=M2(i,c)||c,V4(i6.definitions,i,c)||V4(Q.styles,i,c)}var i6=new $0,K0=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,g2("noAuto")},Q0={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return s2?(g2("beforeI2svg",c),n2("pseudoElements2svg",c),n2("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,T0(function(){Z0({autoReplaceSvgRoot:i}),g2("watch",c)})}},J0={icon:function(c){if(c===null)return null;if(L1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:M2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var i=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=N1(c[0]);return{prefix:e,iconName:M2(e,i)||i}}if(typeof c=="string"&&(c.indexOf("".concat(v.cssPrefix,"-"))>-1||c.match(V0))){var r=S1(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||m2(),iconName:M2(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var n=m2();return{prefix:n,iconName:M2(n,c)||c}}}},G={noAuto:K0,config:v,dom:Q0,parse:J0,library:i6,findIconDefinition:e3,toHtml:Y2},Z0=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot,e=i===void 0?b:i;(Object.keys(Q.styles).length>0||v.autoFetchSvg)&&s2&&v.autoReplaceSvg&&G.dom.i2svg({node:e})};function w1(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return Y2(e)})}}),Object.defineProperty(a,"node",{get:function(){if(s2){var e=b.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function c8(a){var c=a.children,i=a.main,e=a.mask,r=a.attributes,n=a.styles,s=a.transform;if(u3(s)&&i.found&&!e.found){var t=i.width,o=i.height,l={x:t/o/2,y:.5};r.style=y1(h(h({},n),{},{"transform-origin":"".concat(l.x+s.x/16,"em ").concat(l.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function a8(a){var c=a.prefix,i=a.iconName,e=a.children,r=a.attributes,n=a.symbol,s=n===!0?"".concat(c,"-").concat(v.cssPrefix,"-").concat(i):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},r),{},{id:s}),children:e}]}]}function H3(a){var c=a.icons,i=c.main,e=c.mask,r=a.prefix,n=a.iconName,s=a.transform,t=a.symbol,o=a.title,l=a.maskId,f=a.titleId,u=a.extra,H=a.watchable,V=H===void 0?!1:H,S=e.found?e:i,F=S.width,R=S.height,W=r==="fak",P=[v.replacementClass,n?"".concat(v.cssPrefix,"-").concat(n):""].filter(function(t2){return u.classes.indexOf(t2)===-1}).filter(function(t2){return t2!==""||!!t2}).concat(u.classes).join(" "),T={children:[],attributes:h(h({},u.attributes),{},{"data-prefix":r,"data-icon":n,class:P,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(F," ").concat(R)})},J=W&&!~u.classes.indexOf("fa-fw")?{width:"".concat(F/R*16*.0625,"em")}:{};V&&(T.attributes[C2]=""),o&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(f||j2())},children:[o]}),delete T.attributes.title);var O=h(h({},T),{},{prefix:r,iconName:n,main:i,mask:e,maskId:l,transform:s,symbol:t,styles:h(h({},J),u.styles)}),u2=e.found&&i.found?n2("generateAbstractMask",O)||{children:[],attributes:{}}:n2("generateAbstractIcon",O)||{children:[],attributes:{}},p2=u2.children,R1=u2.attributes;return O.children=p2,O.attributes=R1,t?a8(O):c8(O)}function L4(a){var c=a.content,i=a.width,e=a.height,r=a.transform,n=a.title,s=a.extra,t=a.watchable,o=t===void 0?!1:t,l=h(h(h({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")});o&&(l[C2]="");var f=h({},s.styles);u3(r)&&(f.transform=_0({transform:r,startCentered:!0,width:i,height:e}),f["-webkit-transform"]=f.transform);var u=y1(f);u.length>0&&(l.style=u);var H=[];return H.push({tag:"span",attributes:l,children:[c]}),n&&H.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),H}function e8(a){var c=a.content,i=a.title,e=a.extra,r=h(h(h({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),n=y1(e.styles);n.length>0&&(r.style=n);var s=[];return s.push({tag:"span",attributes:r,children:[c]}),i&&s.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),s}var X1=Q.styles;function i3(a){var c=a[0],i=a[1],e=a.slice(4),r=t3(e,1),n=r[0],s=null;return Array.isArray(n)?s={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(V2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(V2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(V2.PRIMARY),fill:"currentColor",d:n[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:c,height:i,icon:s}}var i8={found:!1,width:512,height:512};function r8(a,c){!G4&&!v.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function r3(a,c){var i=c;return c==="fa"&&v.styleDefault!==null&&(c=m2()),new Promise(function(e,r){var n={found:!1,width:512,height:512,icon:n2("missingIconAbstract")||{}};if(i==="fa"){var s=e6(a)||{};a=s.iconName||a,c=s.prefix||c}if(a&&c&&X1[c]&&X1[c][a]){var t=X1[c][a];return e(i3(t))}r8(a,c),e(h(h({},i8),{},{icon:v.showMissingIcons&&a?n2("missingIconAbstract")||{}:{}}))})}var x4=function(){},n3=v.measurePerformance&&h1&&h1.mark&&h1.measure?h1:{mark:x4,measure:x4},I2='FA "6.5.2"',n8=function(c){return n3.mark("".concat(I2," ").concat(c," begins")),function(){return r6(c)}},r6=function(c){n3.mark("".concat(I2," ").concat(c," ends")),n3.measure("".concat(I2," ").concat(c),"".concat(I2," ").concat(c," begins"),"".concat(I2," ").concat(c," ends"))},z3={begin:n8,end:r6},C1=function(){};function b4(a){var c=a.getAttribute?a.getAttribute(C2):null;return typeof c=="string"}function s8(a){var c=a.getAttribute?a.getAttribute(l3):null,i=a.getAttribute?a.getAttribute(f3):null;return c&&i}function t8(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(v.replacementClass)}function o8(){if(v.autoReplaceSvg===!0)return g1.replace;var a=g1[v.autoReplaceSvg];return a||g1.replace}function l8(a){return b.createElementNS("http://www.w3.org/2000/svg",a)}function f8(a){return b.createElement(a)}function n6(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.ceFn,e=i===void 0?a.tag==="svg"?l8:f8:i;if(typeof a=="string")return b.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(s){r.setAttribute(s,a.attributes[s])});var n=a.children||[];return n.forEach(function(s){r.appendChild(n6(s,{ceFn:e}))}),r}function m8(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var g1={replace:function(c){var i=c[0];if(i.parentNode)if(c[1].forEach(function(r){i.parentNode.insertBefore(n6(r),i)}),i.getAttribute(C2)===null&&v.keepOriginalSource){var e=b.createComment(m8(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(c){var i=c[0],e=c[1];if(~h3(i).indexOf(v.replacementClass))return g1.replace(c);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var n=e[0].attributes.class.split(" ").reduce(function(t,o){return o===v.replacementClass||o.match(r)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});e[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",n.toNode.join(" "))}var s=e.map(function(t){return Y2(t)}).join(`
`);i.setAttribute(C2,""),i.innerHTML=s}};function y4(a){a()}function s6(a,c){var i=typeof c=="function"?c:C1;if(a.length===0)i();else{var e=y4;v.mutateApproach===d0&&(e=f2.requestAnimationFrame||y4),e(function(){var r=o8(),n=z3.begin("mutate");a.map(r),n(),i()})}}var V3=!1;function t6(){V3=!0}function s3(){V3=!1}var b1=null;function N4(a){if(v4&&v.observeMutations){var c=a.treeCallback,i=c===void 0?C1:c,e=a.nodeCallback,r=e===void 0?C1:e,n=a.pseudoElementsCallback,s=n===void 0?C1:n,t=a.observeMutationsRoot,o=t===void 0?b:t;b1=new v4(function(l){if(!V3){var f=m2();A2(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!b4(u.addedNodes[0])&&(v.searchPseudoElements&&s(u.target),i(u.target)),u.type==="attributes"&&u.target.parentNode&&v.searchPseudoElements&&s(u.target.parentNode),u.type==="attributes"&&b4(u.target)&&~L0.indexOf(u.attributeName))if(u.attributeName==="class"&&s8(u.target)){var H=S1(h3(u.target)),V=H.prefix,S=H.iconName;u.target.setAttribute(l3,V||f),S&&u.target.setAttribute(f3,S)}else t8(u.target)&&r(u.target)})}}),s2&&b1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function h8(){b1&&b1.disconnect()}function u8(a){var c=a.getAttribute("style"),i=[];return c&&(i=c.split(";").reduce(function(e,r){var n=r.split(":"),s=n[0],t=n.slice(1);return s&&t.length>0&&(e[s]=t.join(":").trim()),e},{})),i}function p8(a){var c=a.getAttribute("data-prefix"),i=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=S1(h3(a));return r.prefix||(r.prefix=m2()),c&&i&&(r.prefix=c,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=q0(r.prefix,a.innerText)||v3(r.prefix,Z1(a.innerText))),!r.iconName&&v.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function v8(a){var c=A2(a.attributes).reduce(function(r,n){return r.name!=="class"&&r.name!=="style"&&(r[n.name]=n.value),r},{}),i=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return v.autoA11y&&(i?c["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(e||j2()):(c["aria-hidden"]="true",c.focusable="false")),c}function d8(){return{iconName:null,title:null,titleId:null,prefix:null,transform:a2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function S4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=p8(a),e=i.iconName,r=i.prefix,n=i.rest,s=v8(a),t=a3("parseNodeAttributes",{},a),o=c.styleParser?u8(a):[];return h({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:a2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:s}},t)}var H8=Q.styles;function o6(a){var c=v.autoReplaceSvg==="nest"?S4(a,{styleParser:!1}):S4(a);return~c.extra.classes.indexOf(W4)?n2("generateLayersText",a,c):n2("generateSvgReplacementMutation",a,c)}var h2=new Set;m3.map(function(a){h2.add("fa-".concat(a))});Object.keys(U2[x]).map(h2.add.bind(h2));Object.keys(U2[y]).map(h2.add.bind(h2));h2=$2(h2);function w4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!s2)return Promise.resolve();var i=b.documentElement.classList,e=function(u){return i.add("".concat(d4,"-").concat(u))},r=function(u){return i.remove("".concat(d4,"-").concat(u))},n=v.autoFetchSvg?h2:m3.map(function(f){return"fa-".concat(f)}).concat(Object.keys(H8));n.includes("fa")||n.push("fa");var s=[".".concat(W4,":not([").concat(C2,"])")].concat(n.map(function(f){return".".concat(f,":not([").concat(C2,"])")})).join(", ");if(s.length===0)return Promise.resolve();var t=[];try{t=A2(a.querySelectorAll(s))}catch{}if(t.length>0)e("pending"),r("complete");else return Promise.resolve();var o=z3.begin("onTree"),l=t.reduce(function(f,u){try{var H=o6(u);H&&f.push(H)}catch(V){G4||V.name==="MissingIcon"&&console.error(V)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(H){s6(H,function(){e("active"),e("complete"),r("pending"),typeof c=="function"&&c(),o(),f()})}).catch(function(H){o(),u(H)})})}function z8(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;o6(a).then(function(i){i&&s6([i],c)})}function V8(a){return function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:e3(c||{}),r=i.mask;return r&&(r=(r||{}).icon?r:e3(r||{})),a(e,h(h({},i),{},{mask:r}))}}var M8=function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,r=e===void 0?a2:e,n=i.symbol,s=n===void 0?!1:n,t=i.mask,o=t===void 0?null:t,l=i.maskId,f=l===void 0?null:l,u=i.title,H=u===void 0?null:u,V=i.titleId,S=V===void 0?null:V,F=i.classes,R=F===void 0?[]:F,W=i.attributes,P=W===void 0?{}:W,T=i.styles,J=T===void 0?{}:T;if(c){var O=c.prefix,u2=c.iconName,p2=c.icon;return w1(h({type:"icon"},c),function(){return g2("beforeDOMElementCreation",{iconDefinition:c,params:i}),v.autoA11y&&(H?P["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(S||j2()):(P["aria-hidden"]="true",P.focusable="false")),H3({icons:{main:i3(p2),mask:o?i3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:u2,transform:h(h({},a2),r),symbol:s,title:H,maskId:f,titleId:S,extra:{attributes:P,styles:J,classes:R}})})}},C8={mixout:function(){return{icon:V8(M8)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=w4,i.nodeCallback=z8,i}}},provides:function(c){c.i2svg=function(i){var e=i.node,r=e===void 0?b:e,n=i.callback,s=n===void 0?function(){}:n;return w4(r,s)},c.generateSvgReplacementMutation=function(i,e){var r=e.iconName,n=e.title,s=e.titleId,t=e.prefix,o=e.transform,l=e.symbol,f=e.mask,u=e.maskId,H=e.extra;return new Promise(function(V,S){Promise.all([r3(r,t),f.iconName?r3(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(F){var R=t3(F,2),W=R[0],P=R[1];V([i,H3({icons:{main:W,mask:P},prefix:t,iconName:r,transform:o,symbol:l,maskId:u,title:n,titleId:s,extra:H,watchable:!0})])}).catch(S)})},c.generateAbstractIcon=function(i){var e=i.children,r=i.attributes,n=i.main,s=i.transform,t=i.styles,o=y1(t);o.length>0&&(r.style=o);var l;return u3(s)&&(l=n2("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),e.push(l||n.icon),{children:e,attributes:r}}}},g8={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,n=r===void 0?[]:r;return w1({type:"layer"},function(){g2("beforeDOMElementCreation",{assembler:i,params:e});var s=[];return i(function(t){Array.isArray(t)?t.map(function(o){s=s.concat(o.abstract)}):s=s.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat($2(n)).join(" ")},children:s}]})}}}},L8={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,n=r===void 0?null:r,s=e.classes,t=s===void 0?[]:s,o=e.attributes,l=o===void 0?{}:o,f=e.styles,u=f===void 0?{}:f;return w1({type:"counter",content:i},function(){return g2("beforeDOMElementCreation",{content:i,params:e}),e8({content:i.toString(),title:n,extra:{attributes:l,styles:u,classes:["".concat(v.cssPrefix,"-layers-counter")].concat($2(t))}})})}}}},x8={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,n=r===void 0?a2:r,s=e.title,t=s===void 0?null:s,o=e.classes,l=o===void 0?[]:o,f=e.attributes,u=f===void 0?{}:f,H=e.styles,V=H===void 0?{}:H;return w1({type:"text",content:i},function(){return g2("beforeDOMElementCreation",{content:i,params:e}),L4({content:i,transform:h(h({},a2),n),title:t,extra:{attributes:u,styles:V,classes:["".concat(v.cssPrefix,"-layers-text")].concat($2(l))}})})}}},provides:function(c){c.generateLayersText=function(i,e){var r=e.title,n=e.transform,s=e.extra,t=null,o=null;if(R4){var l=parseInt(getComputedStyle(i).fontSize,10),f=i.getBoundingClientRect();t=f.width/l,o=f.height/l}return v.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([i,L4({content:i.innerHTML,width:t,height:o,transform:n,title:r,extra:s,watchable:!0})])}}},b8=new RegExp('"',"ug"),k4=[1105920,1112319];function y8(a){var c=a.replace(b8,""),i=I0(c,0),e=i>=k4[0]&&i<=k4[1],r=c.length===2?c[0]===c[1]:!1;return{value:Z1(r?c[0]:c),isSecondary:e||r}}function A4(a,c){var i="".concat(v0).concat(c.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(i)!==null)return e();var n=A2(a.children),s=n.filter(function(p2){return p2.getAttribute(J1)===c})[0],t=f2.getComputedStyle(a,c),o=t.getPropertyValue("font-family").match(M0),l=t.getPropertyValue("font-weight"),f=t.getPropertyValue("content");if(s&&!o)return a.removeChild(s),e();if(o&&f!=="none"&&f!==""){var u=t.getPropertyValue("content"),H=~["Sharp"].indexOf(o[2])?y:x,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?G2[H][o[2].toLowerCase()]:C0[H][l],S=y8(u),F=S.value,R=S.isSecondary,W=o[0].startsWith("FontAwesome"),P=v3(V,F),T=P;if(W){var J=j0(F);J.iconName&&J.prefix&&(P=J.iconName,V=J.prefix)}if(P&&!R&&(!s||s.getAttribute(l3)!==V||s.getAttribute(f3)!==T)){a.setAttribute(i,T),s&&a.removeChild(s);var O=d8(),u2=O.extra;u2.attributes[J1]=c,r3(P,V).then(function(p2){var R1=H3(h(h({},O),{},{icons:{main:p2,mask:d3()},prefix:V,iconName:T,extra:u2,watchable:!0})),t2=b.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(t2,a.firstChild):a.appendChild(t2),t2.outerHTML=R1.map(function(n0){return Y2(n0)}).join(`
`),a.removeAttribute(i),e()}).catch(r)}else e()}else e()})}function N8(a){return Promise.all([A4(a,"::before"),A4(a,"::after")])}function S8(a){return a.parentNode!==document.head&&!~H0.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(J1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function _4(a){if(s2)return new Promise(function(c,i){var e=A2(a.querySelectorAll("*")).filter(S8).map(N8),r=z3.begin("searchPseudoElements");t6(),Promise.all(e).then(function(){r(),s3(),c()}).catch(function(){r(),s3(),i()})})}var w8={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=_4,i}}},provides:function(c){c.pseudoElements2svg=function(i){var e=i.node,r=e===void 0?b:e;v.searchPseudoElements&&_4(r)}}},P4=!1,k8={mixout:function(){return{dom:{unwatch:function(){t6(),P4=!0}}}},hooks:function(){return{bootstrap:function(){N4(a3("mutationObserverCallbacks",{}))},noAuto:function(){h8()},watch:function(i){var e=i.observeMutationsRoot;P4?s3():N4(a3("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},D4=function(c){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(e,r){var n=r.toLowerCase().split("-"),s=n[0],t=n.slice(1).join("-");if(s&&t==="h")return e.flipX=!0,e;if(s&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(s){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},i)},A8={mixout:function(){return{parse:{transform:function(i){return D4(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-transform");return r&&(i.transform=D4(r)),i}}},provides:function(c){c.generateAbstractTransformGrouping=function(i){var e=i.main,r=i.transform,n=i.containerWidth,s=i.iconWidth,t={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(f)},H={transform:"translate(".concat(s/2*-1," -256)")},V={outer:t,inner:u,path:H};return{tag:"g",attributes:h({},V.outer),children:[{tag:"g",attributes:h({},V.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:h(h({},e.icon.attributes),V.path)}]}]}}}},Y1={x:0,y:0,width:"100%",height:"100%"};function F4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function _8(a){return a.tag==="g"?a.children:[a]}var P8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-mask"),n=r?S1(r.split(" ").map(function(s){return s.trim()})):d3();return n.prefix||(n.prefix=m2()),i.mask=n,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(c){c.generateAbstractMask=function(i){var e=i.children,r=i.attributes,n=i.main,s=i.mask,t=i.maskId,o=i.transform,l=n.width,f=n.icon,u=s.width,H=s.icon,V=A0({transform:o,containerWidth:u,iconWidth:l}),S={tag:"rect",attributes:h(h({},Y1),{},{fill:"white"})},F=f.children?{children:f.children.map(F4)}:{},R={tag:"g",attributes:h({},V.inner),children:[F4(h({tag:f.tag,attributes:h(h({},f.attributes),V.path)},F))]},W={tag:"g",attributes:h({},V.outer),children:[R]},P="mask-".concat(t||j2()),T="clip-".concat(t||j2()),J={tag:"mask",attributes:h(h({},Y1),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,W]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:_8(H)},J]};return e.push(O,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(P,")")},Y1)}),{children:e,attributes:r}}}},D8={provides:function(c){var i=!1;f2.matchMedia&&(i=f2.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:h(h({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=h(h({},n),{},{attributeName:"opacity"}),t={tag:"circle",attributes:h(h({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||t.children.push({tag:"animate",attributes:h(h({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},s),{},{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:h(h({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:h(h({},s),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:h(h({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},F8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return i.symbol=n,i}}}},T8=[D0,C8,g8,L8,x8,w8,k8,A8,P8,D8,F8];Y0(T8,{mixoutsTo:G});var p7=G.noAuto,v7=G.config,d7=G.library,H7=G.dom,l6=G.parse,z7=G.findIconDefinition,V7=G.toHtml,f6=G.icon,M7=G.layer,E8=G.text,B8=G.counter;var I8=["*"],R8=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},O8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},U8=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(i=>c[i]?i:null).filter(i=>i)},G8=a=>a.prefix!==void 0&&a.iconName!==void 0,W8=(a,c)=>G8(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},q8=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=b2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),j8=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let n of r.icon[2])typeof n=="string"&&(this.definitions[r.prefix][n]=r)}}addIconPacks(...e){for(let r of e){let n=Object.keys(r).map(s=>r[s]);this.addIcons(...n)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=b2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),$8=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=A({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[Z]});let a=c;return a})(),X8=(()=>{let c=class c{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};c.\u0275fac=function(r){return new(r||c)(z(d2),z(v2))},c.\u0275cmp=N({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[Z,G1],ngContentSelectors:I8,decls:1,vars:0,template:function(r,n){r&1&&(n1(),s1(0))},encapsulation:2});let a=c;return a})(),m6=(()=>{let c=class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,n,s,t){this.sanitizer=e,this.config=r,this.iconLibrary=n,this.stackItem=s,this.classes=[],t!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){O8();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(r);if(n!=null){let s=this.buildParams();this.renderIcon(n,s)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=W8(e,this.config.defaultPrefix);if("icon"in r)return r;let n=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return n??(R8(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?l6.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...U8(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let n=f6(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};c.\u0275fac=function(r){return new(r||c)(z(s4),z(q8),z(j8),z($8,8),z(X8,8))},c.\u0275cmp=N({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,n){r&2&&(U3("innerHTML",n.renderedIconHTML,E3),H2("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[Z,G1],decls:0,vars:0,template:function(r,n){},encapsulation:2});let a=c;return a})();var h6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=B({type:c}),c.\u0275inj=E({});let a=c;return a})();var C6=(()=>{let c=class c{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=n=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}};c.\u0275fac=function(r){return new(r||c)(z(d2),z(v2))},c.\u0275dir=A({type:c});let a=c;return a})(),C3=(()=>{let c=class c extends C6{};c.\u0275fac=(()=>{let e;return function(n){return(e||(e=F2(c)))(n||c)}})(),c.\u0275dir=A({type:c,features:[c2]});let a=c;return a})(),T1=new o2("");var K8={provide:T1,useExisting:x2(()=>E1),multi:!0};function Q8(){let a=W1()?W1().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var J8=new o2(""),E1=(()=>{let c=class c extends C6{constructor(e,r,n){super(e,r),this._compositionMode=n,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Q8())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}};c.\u0275fac=function(r){return new(r||c)(z(d2),z(v2),z(J8,8))},c.\u0275dir=A({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,n){r&1&&_("input",function(t){return n._handleInput(t.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(t){return n._compositionEnd(t.target.value)})},features:[y2([K8]),c2]});let a=c;return a})();var g6=new o2(""),L6=new o2("");function x6(a){return a!=null}function b6(a){return K3(a)?A3(a):a}function y6(a){let c={};return a.forEach(i=>{c=i!=null?Y(Y({},c),i):c}),Object.keys(c).length===0?null:c}function N6(a,c){return c.map(i=>i(a))}function Z8(a){return!a.validate}function S6(a){return a.map(c=>Z8(c)?c:i=>c.validate(i))}function c5(a){if(!a)return null;let c=a.filter(x6);return c.length==0?null:function(i){return y6(N6(i,c))}}function g3(a){return a!=null?c5(S6(a)):null}function a5(a){if(!a)return null;let c=a.filter(x6);return c.length==0?null:function(i){let e=N6(i,c).map(b6);return D3(e).pipe(P3(y6))}}function L3(a){return a!=null?a5(S6(a)):null}function u6(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function e5(a){return a._rawValidators}function i5(a){return a._rawAsyncValidators}function M3(a){return a?Array.isArray(a)?a:[a]:[]}function A1(a,c){return Array.isArray(a)?a.includes(c):a===c}function p6(a,c){let i=M3(c);return M3(a).forEach(r=>{A1(i,r)||i.push(r)}),i}function v6(a,c){return M3(c).filter(i=>!A1(a,i))}var _1=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=g3(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=L3(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,i){return this.control?this.control.hasError(c,i):!1}getError(c,i){return this.control?this.control.getError(c,i):null}},P2=class extends _1{get formDirective(){return null}get path(){return null}},Z2=class extends _1{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},P1=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},r5={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},O7=L2(Y({},r5),{"[class.ng-submitted]":"isSubmitted"}),w6=(()=>{let c=class c extends P1{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(z(Z2,2))},c.\u0275dir=A({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,n){r&2&&e2("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[c2]});let a=c;return a})(),k6=(()=>{let c=class c extends P1{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(z(P2,10))},c.\u0275dir=A({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,n){r&2&&e2("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},features:[c2]});let a=c;return a})();var K2="VALID",k1="INVALID",_2="PENDING",Q2="DISABLED";function A6(a){return(B1(a)?a.validators:a)||null}function n5(a){return Array.isArray(a)?g3(a):a||null}function _6(a,c){return(B1(c)?c.asyncValidators:a)||null}function s5(a){return Array.isArray(a)?L3(a):a||null}function B1(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}function t5(a,c,i){let e=a.controls;if(!(c?Object.keys(e):e).length)throw new a1(1e3,"");if(!e[i])throw new a1(1001,"")}function o5(a,c,i){a._forEachChild((e,r)=>{if(i[r]===void 0)throw new a1(1002,"")})}var D1=class{constructor(c,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===K2}get invalid(){return this.status===k1}get pending(){return this.status==_2}get disabled(){return this.status===Q2}get enabled(){return this.status!==Q2}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(p6(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(p6(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(v6(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(v6(c,this._rawAsyncValidators))}hasValidator(c){return A1(this._rawValidators,c)}hasAsyncValidator(c){return A1(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=_2,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=Q2,this.errors=null,this._forEachChild(e=>{e.disable(L2(Y({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(L2(Y({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!0))}enable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=K2,this._forEachChild(e=>{e.enable(L2(Y({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(L2(Y({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===K2||this.status===_2)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Q2:K2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=_2,this._hasOwnPendingAsyncValidator=!0;let i=b6(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,i={}){this.errors=c,this._updateControlsErrors(i.emitEvent!==!1)}get(c){let i=c;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((e,r)=>e&&e._find(r),this)}getError(c,i){let e=i?this.get(i):this;return e&&e.errors?e.errors[c]:null}hasError(c,i){return!!this.getError(c,i)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new U,this.statusChanges=new U}_calculateStatus(){return this._allControlsDisabled()?Q2:this.errors?k1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_2)?_2:this._anyControlsHaveStatus(k1)?k1:K2}_anyControlsHaveStatus(c){return this._anyControls(i=>i.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){B1(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let i=this._parent&&this._parent.dirty;return!c&&!!i&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=n5(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=s5(this._rawAsyncValidators)}},F1=class extends D1{constructor(c,i,e){super(A6(i),_6(e,i)),this.controls=c,this._initObservables(),this._setUpdateStrategy(i),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(c,i){return this.controls[c]?this.controls[c]:(this.controls[c]=i,i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange),i)}addControl(c,i,e={}){this.registerControl(c,i),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(c,i={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}setControl(c,i,e={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],i&&this.registerControl(c,i),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(c){return this.controls.hasOwnProperty(c)&&this.controls[c].enabled}setValue(c,i={}){o5(this,!0,c),Object.keys(c).forEach(e=>{t5(this,!0,e),this.controls[e].setValue(c[e],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i)}patchValue(c,i={}){c!=null&&(Object.keys(c).forEach(e=>{let r=this.controls[e];r&&r.patchValue(c[e],{onlySelf:!0,emitEvent:i.emitEvent})}),this.updateValueAndValidity(i))}reset(c={},i={}){this._forEachChild((e,r)=>{e.reset(c?c[r]:null,{onlySelf:!0,emitEvent:i.emitEvent})}),this._updatePristine(i),this._updateTouched(i),this.updateValueAndValidity(i)}getRawValue(){return this._reduceChildren({},(c,i,e)=>(c[e]=i.getRawValue(),c))}_syncPendingControls(){let c=this._reduceChildren(!1,(i,e)=>e._syncPendingControls()?!0:i);return c&&this.updateValueAndValidity({onlySelf:!0}),c}_forEachChild(c){Object.keys(this.controls).forEach(i=>{let e=this.controls[i];e&&c(e,i)})}_setUpControls(){this._forEachChild(c=>{c.setParent(this),c._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(c){for(let[i,e]of Object.entries(this.controls))if(this.contains(i)&&c(e))return!0;return!1}_reduceValue(){let c={};return this._reduceChildren(c,(i,e,r)=>((e.enabled||this.disabled)&&(i[r]=e.value),i))}_reduceChildren(c,i){let e=c;return this._forEachChild((r,n)=>{e=i(e,r,n)}),e}_allControlsDisabled(){for(let c of Object.keys(this.controls))if(this.controls[c].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(c){return this.controls.hasOwnProperty(c)?this.controls[c]:null}};var x3=new o2("CallSetDisabledState",{providedIn:"root",factory:()=>b3}),b3="always";function l5(a,c){return[...c.path,a]}function P6(a,c,i=b3){D6(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||i==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),m5(a,c),u5(a,c),h5(a,c),f5(a,c)}function d6(a,c){a.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(c)})}function f5(a,c){if(c.valueAccessor.setDisabledState){let i=e=>{c.valueAccessor.setDisabledState(e)};a.registerOnDisabledChange(i),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(i)})}}function D6(a,c){let i=e5(a);c.validator!==null?a.setValidators(u6(i,c.validator)):typeof i=="function"&&a.setValidators([i]);let e=i5(a);c.asyncValidator!==null?a.setAsyncValidators(u6(e,c.asyncValidator)):typeof e=="function"&&a.setAsyncValidators([e]);let r=()=>a.updateValueAndValidity();d6(c._rawValidators,r),d6(c._rawAsyncValidators,r)}function m5(a,c){c.valueAccessor.registerOnChange(i=>{a._pendingValue=i,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&F6(a,c)})}function h5(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&F6(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function F6(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function u5(a,c){let i=(e,r)=>{c.valueAccessor.writeValue(e),r&&c.viewToModelUpdate(e)};a.registerOnChange(i),c._registerOnDestroy(()=>{a._unregisterOnChange(i)})}function p5(a,c){a==null,D6(a,c)}function v5(a,c){if(!a.hasOwnProperty("model"))return!1;let i=a.model;return i.isFirstChange()?!0:!Object.is(c,i.currentValue)}function d5(a){return Object.getPrototypeOf(a.constructor)===C3}function H5(a,c){a._syncPendingControls(),c.forEach(i=>{let e=i.control;e.updateOn==="submit"&&e._pendingChange&&(i.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function z5(a,c){if(!c)return null;Array.isArray(c);let i,e,r;return c.forEach(n=>{n.constructor===E1?i=n:d5(n)?e=n:r=n}),r||e||i||null}var V5={provide:P2,useExisting:x2(()=>y3)},J2=Promise.resolve(),y3=(()=>{let c=class c extends P2{constructor(e,r,n){super(),this.callSetDisabledState=n,this.submitted=!1,this._directives=new Set,this.ngSubmit=new U,this.form=new F1({},g3(e),L3(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){J2.then(()=>{let r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),P6(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){J2.then(()=>{let r=this._findContainer(e.path);r&&r.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){J2.then(()=>{let r=this._findContainer(e.path),n=new F1({});p5(n,e),r.registerControl(e.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){J2.then(()=>{let r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){J2.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,H5(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}};c.\u0275fac=function(r){return new(r||c)(z(g6,10),z(L6,10),z(x3,8))},c.\u0275dir=A({type:c,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,n){r&1&&_("submit",function(t){return n.onSubmit(t)})("reset",function(){return n.onReset()})},inputs:{options:[D2.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[y2([V5]),c2]});let a=c;return a})();function H6(a,c){let i=a.indexOf(c);i>-1&&a.splice(i,1)}function z6(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var M5=class extends D1{constructor(c=null,i,e){super(A6(i),_6(e,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B1(i)&&(i.nonNullable||i.initialValueIsDefault)&&(z6(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,i={}){this.value=this._pendingValue=c,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(c,i={}){this.setValue(c,i)}reset(c=this.defaultValue,i={}){this._applyFormState(c),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){H6(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){H6(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){z6(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var C5={provide:Z2,useExisting:x2(()=>N3)},V6=Promise.resolve(),N3=(()=>{let c=class c extends Z2{constructor(e,r,n,s,t,o){super(),this._changeDetectorRef=t,this.callSetDisabledState=o,this.control=new M5,this._registered=!1,this.name="",this.update=new U,this._parent=e,this._setValidators(r),this._setAsyncValidators(n),this.valueAccessor=z5(this,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),v5(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){P6(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){V6.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let r=e.isDisabled.currentValue,n=r!==0&&Q3(r);V6.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?l5(e,this._parent):[e]}};c.\u0275fac=function(r){return new(r||c)(z(P2,9),z(g6,10),z(L6,10),z(T1,10),z(o1,8),z(x3,8))},c.\u0275dir=A({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[D2.None,"disabled","isDisabled"],model:[D2.None,"ngModel","model"],options:[D2.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[y2([C5]),c2,Z]});let a=c;return a})(),T6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=A({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let a=c;return a})();var g5={provide:T1,useExisting:x2(()=>B6),multi:!0};function E6(a,c){return a==null?`${c}`:(c&&typeof c=="object"&&(c="Object"),`${a}: ${c}`.slice(0,50))}function L5(a){return a.split(":")[0]}var B6=(()=>{let c=class c extends C3{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let r=this._getOptionId(e),n=E6(r,e);this.setProperty("value",n)}registerOnChange(e){this.onChange=r=>{this.value=this._getOptionValue(r),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),e))return r;return null}_getOptionValue(e){let r=L5(e);return this._optionMap.has(r)?this._optionMap.get(r):e}};c.\u0275fac=(()=>{let e;return function(n){return(e||(e=F2(c)))(n||c)}})(),c.\u0275dir=A({type:c,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,n){r&1&&_("change",function(t){return n.onChange(t.target.value)})("blur",function(){return n.onTouched()})},inputs:{compareWith:"compareWith"},features:[y2([g5]),c2]});let a=c;return a})(),I6=(()=>{let c=class c{constructor(e,r,n){this._element=e,this._renderer=r,this._select=n,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(E6(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};c.\u0275fac=function(r){return new(r||c)(z(v2),z(d2),z(B6,9))},c.\u0275dir=A({type:c,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let a=c;return a})(),x5={provide:T1,useExisting:x2(()=>R6),multi:!0};function M6(a,c){return a==null?`${c}`:(typeof c=="string"&&(c=`'${c}'`),c&&typeof c=="object"&&(c="Object"),`${a}: ${c}`.slice(0,50))}function b5(a){return a.split(":")[0]}var R6=(()=>{let c=class c extends C3{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let r;if(Array.isArray(e)){let n=e.map(s=>this._getOptionId(s));r=(s,t)=>{s._setSelected(n.indexOf(t.toString())>-1)}}else r=(n,s)=>{n._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(e){this.onChange=r=>{let n=[],s=r.selectedOptions;if(s!==void 0){let t=s;for(let o=0;o<t.length;o++){let l=t[o],f=this._getOptionValue(l.value);n.push(f)}}else{let t=r.options;for(let o=0;o<t.length;o++){let l=t[o];if(l.selected){let f=this._getOptionValue(l.value);n.push(f)}}}this.value=n,e(n)}}_registerOption(e){let r=(this._idCounter++).toString();return this._optionMap.set(r,e),r}_getOptionId(e){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,e))return r;return null}_getOptionValue(e){let r=b5(e);return this._optionMap.has(r)?this._optionMap.get(r)._value:e}};c.\u0275fac=(()=>{let e;return function(n){return(e||(e=F2(c)))(n||c)}})(),c.\u0275dir=A({type:c,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,n){r&1&&_("change",function(t){return n.onChange(t.target)})("blur",function(){return n.onTouched()})},inputs:{compareWith:"compareWith"},features:[y2([x5]),c2]});let a=c;return a})(),O6=(()=>{let c=class c{constructor(e,r,n){this._element=e,this._renderer=r,this._select=n,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(M6(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(M6(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};c.\u0275fac=function(r){return new(r||c)(z(v2),z(d2),z(R6,9))},c.\u0275dir=A({type:c,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let a=c;return a})();var y5=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=B({type:c}),c.\u0275inj=E({});let a=c;return a})();var U6=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:x3,useValue:e.callSetDisabledState??b3}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=B({type:c}),c.\u0275inj=E({imports:[y5]});let a=c;return a})();var W6=(()=>{let c=class c{constructor(e){this.httpClient=e,this.apiUrl="https://api.github.com"}handleError(e){let r="";return e.status/100===0?r=`An error occurred ${e.error.message}`:e.status/100===4?e.status===400?r=`${e.status}, its a bad requestand ${e.error.message}`:e.status===401?r=`${e.status}, User anauthorised ${e.error.message}`:e.status===403?r=`${e.status}, User forbidden ${e.error.message}`:e.status===404?r=`${e.status}, User and its Repository ${e.error.message}`:e.status===408?r=`${e.status}, request timeout ${e.error.message}`:r=`${e.status},error is ${e.error.message}`:e.status/100===5&&(e.status===500?r=`${e.status}, internal server error, ${e.error.message}`:e.status===501?r=`${e.status}, requestnot supported by server, ${e.error.message}`:e.status===502?r=`${e.status}, bad gateway, ${e.error.message}`:e.status===503?r=`${e.status}, service unavailable, ${e.error.message}`:e.status===504?r=`${e.status}, gateway timeout, ${e.error.message}`:r=`${e.status},server error ${e.error.message}`),_3(()=>new Error(`${r}, please try again later.`))}getUserDetails(e){return this.httpClient.get(`${this.apiUrl}/users/${e}`).pipe(O1(this.handleError))}getUserRepos(e){return this.httpClient.get(`${this.apiUrl}/users/${e}/repos`).pipe(O1(this.handleError))}};c.\u0275fac=function(r){return new(r||c)(F3(a4))},c.\u0275prov=b2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();function N5(a,c){if(a&1){let i=z2();m(0,"a",12),_("keyup.enter",function(){q(i),M(3);let r=$(1);return j(r.previous())})("click",function(){q(i),M(3);let r=$(1);return j(r.previous())}),C(1),m(2,"span",13),C(3),p()()}if(a&2){let i=M(3);d(),X(" ",i.previousLabel," "),d(2),D(i.screenReaderPageLabel)}}function S5(a,c){if(a&1&&(m(0,"span",14),C(1),m(2,"span",13),C(3),p()()),a&2){let i=M(3);d(),X(" ",i.previousLabel," "),d(2),D(i.screenReaderPageLabel)}}function w5(a,c){if(a&1&&(m(0,"li",9),w(1,N5,4,2,"a",10)(2,S5,4,2,"span",11),p()),a&2){M(2);let i=$(1);e2("disabled",i.isFirstPage()),d(),g("ngIf",1<i.getCurrent()),d(),g("ngIf",i.isFirstPage())}}function k5(a,c){if(a&1){let i=z2();m(0,"a",12),_("keyup.enter",function(){q(i);let r=M().$implicit;M(2);let n=$(1);return j(n.setCurrent(r.value))})("click",function(){q(i);let r=M().$implicit;M(2);let n=$(1);return j(n.setCurrent(r.value))}),m(1,"span",13),C(2),p(),m(3,"span"),C(4),T2(5,"number"),p()()}if(a&2){let i=M().$implicit,e=M(2);d(2),X("",e.screenReaderPageLabel," "),d(2),D(i.label==="..."?i.label:E2(5,2,i.label,""))}}function A5(a,c){if(a&1&&(R3(0),m(1,"span",16)(2,"span",13),C(3),p(),m(4,"span"),C(5),T2(6,"number"),p()(),O3()),a&2){let i=M().$implicit,e=M(2);d(3),X("",e.screenReaderCurrentLabel," "),d(2),D(i.label==="..."?i.label:E2(6,2,i.label,""))}}function _5(a,c){if(a&1&&(m(0,"li"),w(1,k5,6,5,"a",10)(2,A5,7,5,"ng-container",15),p()),a&2){let i=c.$implicit;M(2);let e=$(1);e2("current",e.getCurrent()===i.value)("ellipsis",i.label==="..."),d(),g("ngIf",e.getCurrent()!==i.value),d(),g("ngIf",e.getCurrent()===i.value)}}function P5(a,c){if(a&1){let i=z2();m(0,"a",12),_("keyup.enter",function(){q(i),M(3);let r=$(1);return j(r.next())})("click",function(){q(i),M(3);let r=$(1);return j(r.next())}),C(1),m(2,"span",13),C(3),p()()}if(a&2){let i=M(3);d(),X(" ",i.nextLabel," "),d(2),D(i.screenReaderPageLabel)}}function D5(a,c){if(a&1&&(m(0,"span",14),C(1),m(2,"span",13),C(3),p()()),a&2){let i=M(3);d(),X(" ",i.nextLabel," "),d(2),D(i.screenReaderPageLabel)}}function F5(a,c){if(a&1&&(m(0,"li",17),w(1,P5,4,2,"a",10)(2,D5,4,2,"span",11),p()),a&2){M(2);let i=$(1);e2("disabled",i.isLastPage()),d(),g("ngIf",!i.isLastPage()),d(),g("ngIf",i.isLastPage())}}function T5(a,c){if(a&1&&(m(0,"ul",4),w(1,w5,3,4,"li",5),m(2,"li",6),C(3),p(),w(4,_5,3,6,"li",7)(5,F5,3,4,"li",8),p()),a&2){let i=M(),e=$(1);e2("responsive",i.responsive),d(),g("ngIf",i.directionLinks),d(2),W3(" ",e.getCurrent()," / ",e.getLastPage()," "),d(),g("ngForOf",e.pages)("ngForTrackBy",i.trackByIndex),d(),g("ngIf",i.directionLinks)}}var c1=class{constructor(){this.change=new U,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(c){return c.id==null&&(c.id=this.DEFAULT_ID),this.instances[c.id]?this.updateInstance(c):(this.instances[c.id]=c,!0)}updateInstance(c){let i=!1;for(let e in this.instances[c.id])c[e]!==this.instances[c.id][e]&&(this.instances[c.id][e]=c[e],i=!0);return i}getCurrentPage(c){return this.instances[c]?this.instances[c].currentPage:1}setCurrentPage(c,i){if(this.instances[c]){let e=this.instances[c],r=Math.ceil(e.totalItems/e.itemsPerPage);i<=r&&1<=i&&(this.instances[c].currentPage=i,this.change.emit(c))}}setTotalItems(c,i){this.instances[c]&&0<=i&&(this.instances[c].totalItems=i,this.change.emit(c))}setItemsPerPage(c,i){this.instances[c]&&(this.instances[c].itemsPerPage=i,this.change.emit(c))}getInstance(c=this.DEFAULT_ID){return this.instances[c]?this.clone(this.instances[c]):{}}clone(c){var i={};for(var e in c)c.hasOwnProperty(e)&&(i[e]=c[e]);return i}},E5=Number.MAX_SAFE_INTEGER,q6=(()=>{class a{constructor(i){this.service=i,this.state={}}transform(i,e){if(!(i instanceof Array)){let u=e.id||this.service.defaultId();return this.state[u]?this.state[u].slice:i}let r=e.totalItems&&e.totalItems!==i.length,n=this.createInstance(i,e),s=n.id,t,o,l=n.itemsPerPage,f=this.service.register(n);if(!r&&i instanceof Array){if(l=+l||E5,t=(n.currentPage-1)*l,o=t+l,this.stateIsIdentical(s,i,t,o))return this.state[s].slice;{let H=i.slice(t,o);return this.saveState(s,i,H,t,o),this.service.change.emit(s),H}}else return f&&this.service.change.emit(s),this.saveState(s,i,i,t,o),i}createInstance(i,e){return this.checkConfig(e),{id:e.id!=null?e.id:this.service.defaultId(),itemsPerPage:+e.itemsPerPage||0,currentPage:+e.currentPage||1,totalItems:+e.totalItems||i.length}}checkConfig(i){let r=["itemsPerPage","currentPage"].filter(n=>!(n in i));if(0<r.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${r.join(", ")}`)}saveState(i,e,r,n,s){this.state[i]={collection:e,size:e.length,slice:r,start:n,end:s}}stateIsIdentical(i,e,r,n){let s=this.state[i];return!s||!(s.size===e.length&&s.start===r&&s.end===n)?!1:s.slice.every((o,l)=>o===e[r+l])}}return a.\u0275fac=function(i){return new(i||a)(z(c1,16))},a.\u0275pipe=T3({name:"paginate",type:a,pure:!1}),a})();var B5=(()=>{class a{constructor(i,e){this.service=i,this.changeDetectorRef=e,this.maxSize=7,this.pageChange=new U,this.pageBoundsCorrection=new U,this.pages=[],this.changeSub=this.service.change.subscribe(r=>{this.id===r&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){this.id===void 0&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(i){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return this.getCurrent()===1}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(i){this.pageChange.emit(i)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let i=this.service.getInstance(this.id);return i.totalItems<1?1:Math.ceil(i.totalItems/i.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){this.service.getInstance(this.id).id==null&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let i=this.service.getInstance(this.id),e=this.outOfBoundCorrection(i);e!==i.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(e),this.pages=this.createPageArray(i.currentPage,i.itemsPerPage,i.totalItems,this.maxSize)}):this.pages=this.createPageArray(i.currentPage,i.itemsPerPage,i.totalItems,this.maxSize)}outOfBoundCorrection(i){let e=Math.ceil(i.totalItems/i.itemsPerPage);return e<i.currentPage&&0<e?e:i.currentPage<1?1:i.currentPage}createPageArray(i,e,r,n){n=+n;let s=[],t=Math.max(Math.ceil(r/e),1),o=Math.ceil(n/2),l=i<=o,f=t-o<i,u=!l&&!f,H=n<t,V=1;for(;V<=t&&V<=n;){let S,F=this.calculatePageNumber(V,i,n,t),R=V===2&&(u||f),W=V===n-1&&(u||l);H&&(R||W)?S="...":S=F,s.push({label:S,value:F}),V++}return s}calculatePageNumber(i,e,r,n){let s=Math.ceil(r/2);return i===r?n:i===1?i:r<n?n-s<e?n-r+i:s<e?e-s+i:i:i}}return a.\u0275fac=function(i){return new(i||a)(z(c1),z(o1))},a.\u0275dir=A({type:a,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[Z]}),a})();function S3(a){return!!a&&a!=="false"}var j6=(()=>{class a{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new U,this.pageBoundsCorrection=new U,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(i){this._directionLinks=S3(i)}get autoHide(){return this._autoHide}set autoHide(i){this._autoHide=S3(i)}get responsive(){return this._responsive}set responsive(i){this._responsive=S3(i)}trackByIndex(i){return i}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=N({type:a,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[["p","paginationApi"],[3,"pageChange","pageBoundsCorrection","id","maxSize"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(i,e){if(i&1){let r=z2();m(0,"pagination-template",1,0),_("pageChange",function(s){return q(r),j(e.pageChange.emit(s))})("pageBoundsCorrection",function(s){return q(r),j(e.pageBoundsCorrection.emit(s))}),m(2,"nav",2),w(3,T5,6,8,"ul",3),p()()}if(i&2){let r=$(1);g("id",e.id)("maxSize",e.maxSize),d(2),H2("aria-label",e.screenReaderPaginationLabel),d(),g("ngIf",!(e.autoHide&&r.pages.length<=1))}},dependencies:[B5,f1,l1,c4],styles:[`.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}
`],encapsulation:2,changeDetection:0}),a})(),$6=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=B({type:a}),a.\u0275inj=E({providers:[c1],imports:[[m1]]}),a})();var R5=(a,c)=>({itemsPerPage:a,currentPage:c});function O5(a,c){if(a&1&&(m(0,"p",14),C(1),p()),a&2){let i=M().$implicit;d(),D(i.description)}}function U5(a,c){a&1&&(m(0,"p",14),C(1,"No description"),p())}function G5(a,c){if(a&1&&(m(0,"p",15),C(1),p()),a&2){let i=M().$implicit;d(),D(i.language)}}function W5(a,c){if(a&1&&(m(0,"div",11)(1,"div",12)(2,"h3",13),C(3),p(),w(4,O5,2,1,"p",14)(5,U5,2,0)(6,G5,2,1,"p",15),p()()),a&2){let i=c.$implicit;d(3),D(i.name),d(),K(4,i.description?4:5),d(2),K(6,i.language?6:-1)}}function q5(a,c){if(a&1){let i=z2();m(0,"section")(1,"div",0)(2,"div")(3,"label",1),C(4,"Choose no of Repository:"),p(),m(5,"select",2),_("change",function(r){q(i);let n=M();return j(n.mySelectbox(r))}),m(6,"option",3),C(7,"10"),p(),m(8,"option",4),C(9,"20"),p(),m(10,"option",5),C(11,"50"),p(),m(12,"option",6),C(13,"100"),p()()(),m(14,"div",7),w(15,W5,7,3,"div",8),T2(16,"paginate"),p(),m(17,"div",9)(18,"pagination-controls",10),_("pageChange",function(r){q(i);let n=M();return j(n.p=r)}),p()()()()}if(a&2){let i=M();d(15),g("ngForOf",E2(16,2,i.reposApi,X3(5,R5,i.totalRepo,i.p))),d(3),g("maxSize",i.maxSize)}}var X6=(()=>{let c=class c{constructor(){this.p=1,this.totalRepo=10,this.maxSize=4}ngOnInit(){}mySelectbox(e){this.totalRepo=e.target.value}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=N({type:c,selectors:[["app-profile-repos"]],inputs:{reposApi:"reposApi"},decls:1,vars:1,consts:[[1,"px-20"],["for","repoNo"],["name","repoNo","id","repoNo",1,"border","border-black","rounded-sm","ms-1",3,"change"],["value","10"],["value","20"],["value","50"],["value","100"],[1,"flex","flex-wrap","pt-8"],["class","w-6/12 py-4 px-3",4,"ngFor","ngForOf"],[1,"flex","justify-center","align-middle","pt-8"],["previousLabel","prev","nextLabel","next",3,"pageChange","maxSize"],[1,"w-6/12","py-4","px-3"],[1,"border-[1px]","p-3","border-black","h-[100%]"],[1,"text-sky-700","text-2xl","capitalize","my-2"],[1,"capitalize","my-2"],[1,"bg-sky-700","text-white","w-20","text-xs","p-1","rounded-md","text-center","my-2"]],template:function(r,n){r&1&&w(0,q5,19,8,"section"),r&2&&K(0,n.reposApi?0:-1)},dependencies:[l1,j6,I6,O6,q6]});let a=c;return a})();var Y6={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]};function $5(a,c){if(a&1&&(m(0,"div",9),C(1," Twitter: "),m(2,"a",13),C(3),p()()),a&2){let i=M(2);d(2),g("href","https://twitter.com/"+i.herosApi.twitter_username,e1),d(),X("https://twitter.com/",i.herosApi.twitter_username,"")}}function X5(a,c){if(a&1&&(m(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),L(4,"img",4),p(),m(5,"div")(6,"a",5),C(7),p()()(),m(8,"div",6)(9,"div",7)(10,"h1",8),C(11),p(),m(12,"p",9),C(13),p(),m(14,"div",10),L(15,"fa-icon",11),m(16,"p",12),C(17),p()(),w(18,$5,4,2,"div",9),p()()()()),a&2){let i=M();d(4),G3("src",i.herosApi.avatar_url,e1),d(2),g("href",i.herosApi.html_url,e1),d(),D(i.herosApi.html_url),d(4),D(i.herosApi.name),d(2),D(i.herosApi.bio),d(2),g("icon",i.faLocationDot),d(2),D(i.herosApi.location),d(),K(18,i.herosApi.twitter_username?18:-1)}}var K6=(()=>{let c=class c{constructor(){this.faLocationDot=Y6}ngOnInit(){}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=N({type:c,selectors:[["app-profile-heros"]],inputs:{herosApi:"herosApi"},decls:1,vars:1,consts:[[1,"py-3"],[1,"px-20","flex","flex-wrap"],[1,"w-3/12"],[1,"w-auto","h-auto","border","border-black","rounded-full","flex","justify-center","align-middle"],["alt","profile-photo",1,"w-[100%]","h-[100%]","rounded-full","text-center",3,"src"],[1,"break-words",3,"href"],[1,"w-9/12","ps-12","flex","justify-start","align-middle"],[1,"pt-10","pb-10"],[1,"text-4xl","font-medium","mt-4","mb-2"],[1,"mt-2","mb-2"],[1,"flex","align-middle","mt-2","mb-2"],[3,"icon"],[1,"ps-3"],[3,"href"]],template:function(r,n){r&1&&w(0,X5,19,8,"section",0),r&2&&K(0,n.herosApi?0:-1)},dependencies:[m6]});let a=c;return a})();var Q6=(()=>{let c=class c{ngOnInit(){}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=N({type:c,selectors:[["app-profile-body"]],inputs:{herosApi:"herosApi",reposApi:"reposApi"},decls:2,vars:2,consts:[[3,"herosApi"],[3,"reposApi"]],template:function(r,n){r&1&&L(0,"app-profile-heros",0)(1,"app-profile-repos",1),r&2&&(g("herosApi",n.herosApi),d(),g("reposApi",n.reposApi))},dependencies:[X6,K6]});let a=c;return a})();var Q5=()=>({standalone:!0}),J6=(()=>{let c=class c{constructor(){this.usernameEntered=new U,this.username=""}ngOnInit(){}onUsernameSubmit(){this.usernameEntered.emit(this.username)}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=N({type:c,selectors:[["app-profile-search"]],outputs:{usernameEntered:"usernameEntered"},decls:7,vars:3,consts:[[1,"bg-sky-700","p-3"],[1,"flex","justify-center","align-middle"],["action","",3,"ngSubmit"],["for","userSearch"],["type","search","id","userSearch","title","enter username","placeholder","Enter username",1,"border","rounded-sm","outline-none","px-2","py-1","mr-2","border-black",3,"ngModelChange","ngModel","ngModelOptions"],["type","submit","title","search-button",1,"bg-white","w-20","rounded-sm","px-2","py-1","border-black"]],template:function(r,n){r&1&&(m(0,"section",0)(1,"div",1)(2,"form",2),_("ngSubmit",function(){return n.onUsernameSubmit()}),L(3,"label",3),m(4,"input",4),$3("ngModelChange",function(t){return j3(n.username,t)||(n.username=t),t}),p(),m(5,"button",5),C(6,"Search"),p()()()()),r&2&&(d(4),q3("ngModel",n.username),g("ngModelOptions",t1(2,Q5)))},dependencies:[T6,E1,w6,k6,N3,y3]});let a=c;return a})();var Z5=["*"],c7=(a,c,i,e,r)=>({"custom-content":a,circle:c,progress:i,"progress-dark":e,pulse:r});function a7(a,c){a&1&&s1(0)}function e7(a,c){if(a&1&&(m(0,"div",0),w(1,a7,1,0),p()),a&2){let i=M();g("ngClass",Y3(5,c7,i.appearance==="custom-content",i.appearance==="circle",i.animation==="progress",i.animation==="progress-dark",i.animation==="pulse"))("ngStyle",i.theme),H2("aria-label",i.ariaLabel)("aria-valuetext",i.loadingText),d(),K(1,i.appearance==="custom-content"?1:-1)}}var Z6=new o2("ngx-skeleton-loader.config"),c0=(()=>{let c=class c{constructor(e){this.config=e;let{appearance:r="line",animation:n="progress",theme:s=null,loadingText:t="Loading...",count:o=1,ariaLabel:l="loading"}=e||{};this.appearance=r,this.animation=n,this.theme=s,this.loadingText=t,this.count=o,this.items=[],this.ariaLabel=l}ngOnInit(){this.validateInputValues()}validateInputValues(){/^\d+$/.test(`${this.count}`)||(B2()&&console.error("`NgxSkeletonLoaderComponent` need to receive 'count' a numeric value. Forcing default to \"1\"."),this.count=1),this.appearance==="custom-content"&&B2()&&this.count!==1&&(console.error('`NgxSkeletonLoaderComponent` enforces elements with "custom-content" appearance as DOM nodes. Forcing "count" to "1".'),this.count=1),this.items.length=this.count;let e=["progress","progress-dark","pulse","false"];e.indexOf(String(this.animation))===-1&&(B2()&&console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'animation' as: ${e.join(", ")}. Forcing default to "progress".`),this.animation="progress"),["circle","line","custom-content",""].indexOf(String(this.appearance))===-1&&(B2()&&console.error("`NgxSkeletonLoaderComponent` need to receive 'appearance' as: circle or line or custom-content or empty string. Forcing default to \"''\"."),this.appearance="");let{theme:r}=this.config||{};r&&r.extendsFromRoot&&this.theme!==null&&(this.theme=Y(Y({},this.config.theme),this.theme))}ngOnChanges(e){["count","animation","appearance"].find(r=>e[r]&&(e[r].isFirstChange()||e[r].previousValue===e[r].currentValue))||this.validateInputValues()}};c.\u0275fac=function(r){return new(r||c)(z(Z6,8))},c.\u0275cmp=N({type:c,selectors:[["ngx-skeleton-loader"]],inputs:{count:"count",loadingText:"loadingText",appearance:"appearance",animation:"animation",ariaLabel:"ariaLabel",theme:"theme"},features:[Z],ngContentSelectors:Z5,decls:2,vars:0,consts:[["aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","-1",1,"skeleton-loader",3,"ngClass","ngStyle"]],template:function(r,n){r&1&&(n1(),i1(0,e7,2,11,"div",0,I3)),r&2&&r1(n.items)},dependencies:[J3,Z3],styles:['.skeleton-loader[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;position:relative;background:#eff1f6 no-repeat;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.skeleton-loader[_ngcontent-%COMP%]:after, .skeleton-loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%]{transform:translateZ(0)}.skeleton-loader.progress[_ngcontent-%COMP%]:after, .skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:after, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_progress 2s ease-in-out infinite;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:""}.skeleton-loader.progress[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,#fff0,#fff9,#fff0)}.skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.skeleton-loader.pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}.skeleton-loader.custom-content[_ngcontent-%COMP%]{height:100%;background:none}@media (prefers-reduced-motion: reduce){.skeleton-loader.pulse[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%], .skeleton-loader.progress[_ngcontent-%COMP%]:before{animation:none}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%]{background-image:none}}@media screen and (min-device-width: 1200px){.skeleton-loader[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:wait}}@keyframes _ngcontent-%COMP%_progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}'],changeDetection:0});let a=c;return a})(),a0=(()=>{let c=class c{static forRoot(e){return{ngModule:c,providers:[{provide:Z6,useValue:e}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=B({type:c}),c.\u0275inj=E({imports:[m1]});let a=c;return a})();var r7=()=>({"height.px":"100","width.px":"100","":""});function n7(a,c){a&1&&(m(0,"div",19)(1,"div",24)(2,"div",9),L(3,"ngx-skeleton-loader",5),p(),m(4,"div",25),L(5,"ngx-skeleton-loader",5),p(),m(6,"div",13)(7,"div",26),L(8,"ngx-skeleton-loader",5),p(),m(9,"div",26),L(10,"ngx-skeleton-loader",5),p(),m(11,"div",26),L(12,"ngx-skeleton-loader",5),p()()()())}var e0=(()=>{let c=class c{constructor(){this.myArrs=[,,,,,,]}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=N({type:c,selectors:[["app-skeleton-loader"]],decls:39,vars:2,consts:[[1,"py-3"],[1,"px-20","flex","flex-wrap"],[1,"w-3/12","flex","justify-center","align-middle"],[1,"w-[100%]","rounded-full","flex","flex-col","justify-center","align-middle"],["count","1","appearance","circle",3,"theme"],["count","1","appearance","line"],[1,"w-9/12","ps-12","flex","justify-start","align-middle"],[1,"pt-10","pb-10","w-[100%]"],[1,"w-5/12"],[1,"w-4/12"],[1,"w-6/12"],[1,"w-7/12"],[1,"px-20"],[1,"flex"],[1,"w-3/12","me-2"],[1,"w-11/12"],[1,"w-1/12"],[1,"w-1/2"],[1,"flex","flex-wrap","pt-8"],[1,"w-6/12","py-4","px-3"],[1,"flex","justify-center","align-middle","pt-8","mb-4"],[1,"w-[100%]","flex","justify-center"],[1,"w-1/12","flex","justify-center"],[1,"w-1/3"],[1,"border-[1px]","p-3","border-black","h-[100%]"],[1,"w-10/12"],[1,"w-2/12","me-2"]],template:function(r,n){r&1&&(m(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),L(4,"ngx-skeleton-loader",4)(5,"ngx-skeleton-loader",5),p()(),m(6,"div",6)(7,"div",7)(8,"div",8),L(9,"ngx-skeleton-loader",5),p(),m(10,"div",9),L(11,"ngx-skeleton-loader",5),p(),m(12,"div",10),L(13,"ngx-skeleton-loader",5),p(),m(14,"div",11),L(15,"ngx-skeleton-loader",5),p()()()()(),m(16,"section")(17,"div",12)(18,"div",13)(19,"div",14)(20,"div",15),L(21,"ngx-skeleton-loader",5),p()(),m(22,"div",16)(23,"div",17),L(24,"ngx-skeleton-loader",5),p()()(),m(25,"div",18),i1(26,n7,13,0,"div",19,B3),p(),m(28,"div",20)(29,"div",21)(30,"div",22)(31,"div",23),L(32,"ngx-skeleton-loader",5),p()(),m(33,"div",22)(34,"div",23),L(35,"ngx-skeleton-loader",5),p()(),m(36,"div",22)(37,"div",23),L(38,"ngx-skeleton-loader",5),p()()()()()()),r&2&&(d(4),g("theme",t1(1,r7)),d(22),r1(n.myArrs))},dependencies:[c0]});let a=c;return a})();function t7(a,c){if(a&1&&(m(0,"section",1)(1,"div",2),C(2),p(),m(3,"div",2),C(4),p()()),a&2){let i=M();d(2),X(" ",i.herosError," "),d(2),X(" ",i.reposError," ")}}function o7(a,c){a&1&&L(0,"app-skeleton-loader")}function l7(a,c){if(a&1&&L(0,"app-profile-body",5),a&2){let i=M(2);g("herosApi",i.herosData)("reposApi",i.reposData)}}function f7(a,c){if(a&1&&(m(0,"section",1),w(1,o7,1,0,"app-skeleton-loader",3)(2,l7,1,2,"app-profile-body",4),p()),a&2){let i=M();d(),g("ngIf",!i.loaded),d(),g("ngIf",i.loaded)}}var k3=(()=>{let c=class c{constructor(){this.usersService=U1(W6),this.loaded=!0,this.showbody=!1}ngOnInit(){}userSearch(e){e&&(this.loaded=!1,this.showbody=!0,this.usersService.getUserDetails(e).subscribe({next:r=>{console.log(r),this.herosData=r,this.herosData&&(this.loaded=!0)},error:r=>{this.herosError=r}}),this.usersService.getUserRepos(e).subscribe({next:r=>{console.log(r),this.reposData=r,this.reposData&&(this.loaded=!0)},error:r=>{this.reposError=r}}))}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=N({type:c,selectors:[["app-home"]],decls:3,vars:1,consts:[[3,"usernameEntered"],[1,"border","border-black","m-2"],[1,"bg-red-300","m-2"],[4,"ngIf"],[3,"herosApi","reposApi",4,"ngIf"],[3,"herosApi","reposApi"]],template:function(r,n){r&1&&(m(0,"app-profile-search",0),_("usernameEntered",function(t){return n.userSearch(t)}),p(),w(1,t7,5,2,"section",1)(2,f7,3,2)),r&2&&(d(),K(1,n.herosError||n.reposError?1:n.showbody?2:-1))},dependencies:[f1,Q6,J6,e0]});let a=c;return a})();var m7=[{path:"",component:k3},{path:"**",component:k3}],i0=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=B({type:c}),c.\u0275inj=E({imports:[q1.forRoot(m7),q1]});let a=c;return a})();var I1=(()=>{let c=class c{constructor(){this.title="fyle-coding-test"}ngOnInit(){}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=N({type:c,selectors:[["app-root"]],decls:1,vars:0,template:function(r,n){r&1&&L(0,"router-outlet")},dependencies:[l4]});let a=c;return a})();var r0=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=B({type:c,bootstrap:[I1]}),c.\u0275inj=E({providers:[t4(),e4(i4())],imports:[n4,i0,h6,$6,r4,U6,a0]});let a=c;return a})();var h7=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=B({type:c,bootstrap:[I1]}),c.\u0275inj=E({imports:[r0,o4]});let a=c;return a})();export{h7 as a};
