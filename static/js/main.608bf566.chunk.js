(this["webpackJsonpjochana-homepage"]=this["webpackJsonpjochana-homepage"]||[]).push([[0],{39:function(e){e.exports=JSON.parse('{"hello":"Hello!"}')},40:function(e){e.exports=JSON.parse('{"hello":"\uc548\ub155!"}')},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),o=n(22),a=n.n(o),s=n(76),c=n(5),l=n(20),d=n(33),b={en:{translation:n(39)},ko:{translation:n(40)}};d.a.use(l.e).init({resources:b,lng:"ko",fallbackLng:"ko",debug:!0,interpolation:{escapeValue:!1}});d.a;var j=n(45),u=n(4),g=n(0);function p(){return Object(g.jsx)(g.Fragment,{})}var h=n(2),m=60,O=24,x={extraSmall:12,small:16,medium:24,semiLarge:32,large:48,g1:80,g2:120,bg:240},f={extraSmall:8,small:12,medium:16,semiLarge:24,large:32,g1:48,g2:60,bg:100},v=n(16),k=n.n(v),y=n(26),w=n(6),C=n(31);function T(){return Object(C.useMediaQuery)({query:"(max-width: 767px)"})}function z(){return Object(C.useMediaQuery)({query:"(min-width: 1281px)"})}var S=n(14),F=Object(S.b)({name:"color",initialState:"galaxy",reducers:{setColorKey:function(e,t){return t.payload,t.payload}}}),E=F.actions.setColorKey,B=function(e){return e.color},A=F.reducer,D={blue:"#31BFF3",purple:"#A484E9",red:"#F4889A",orange:"#FFAF68",yellow:"#F6E683",green:"#79D45E"},I={white:"#FAFFFD",skyBlue:"#E6FEFF",blue:"#D9F6FF",purple:"#D9D0FF",pink:"#F8DAEE",basie:"#FEE7EB"},R={one:"#BBD3FB",two:"#9FBFF5",three:"#81A9EE",four:"#6A96E1",five:"#5985D0",six:"#3B69B7"},M={one:"#FFE3DE",two:"#F1CCCA",three:"#E2B4B5",four:"#D49DA1",five:"#C5858C",six:"#B76E78"},L={blue:"#2AA8F2",green:"#8BD448",yellow:"#FAE442",orange:"#FBA949",red:"#FF6355",purple:"#9C4F96"},H={one:"#FEFFE7",two:"#FED2A1",three:"#A97953",four:"#644431",five:"#47362C",six:"#32281F"},W={one:"#7A00B2",two:"#5E00A0",three:"#42008D",four:"#26007B",five:"#0A0068",six:"#000000"},G={"pastel-bright":D,"pastel-rainbow":L,"pastel-rosegold":M,"pastel-angel":I,"pastel-blue":R,cafe:H,galaxy:W};function J(e){return{width:e,height:e,borderRadius:e}}function P(e){return{paddingTop:e,paddingBottom:e}}function N(e){return{paddingLeft:e,paddingRight:e}}var K=0;function U(){return 0===K&&(K=window.innerWidth),K}var V=0;function _(){return 0===V&&(V=window.innerHeight),V}function Q(){var e,t,n,i,r,o,a=Object(c.b)(B),s=G[a];switch(s){case D:case L:e=s.yellow,t=s.orange,n=s.blue,i=s.green,r=s.red,o=s.purple;break;case M:case R:case H:case W:e=s.one,t=s.two,n=s.four,i=s.three,r=s.six,o=s.five;break;case I:e=s.white,t=s.skyBlue,n=s.purple,i=s.blue,r=s.pink,o=s.basie}return{background1:e,background2:t,primary:n,secondary:i,point1:r,point2:o}}function Y(e,t){return{justifyContent:e,display:"flex",alignItems:"center",gap:t}}function q(){return T()?f:x}function Z(){var e,t;switch(Object(c.b)(B)){case"pastel-angel":e="#2C5D87",t="#2C5D87";break;case"pastel-rosegold":e="#B76E78",t="#ffffff";break;case"pastel-bright":e="black",t="black";break;case"cafe":e="#644431",t="#ffffff";break;default:e="#ffffff",t="#ffffff"}return{bright:e,dark:t}}function X(){return T()?O:m}var $=n(12);function ee(e){var t=e.msg,n=e.size,i=void 0===n?"medium":n,r=e.weight,o=void 0===r?"normal":r,a=e.style,s=e.dark,c=void 0!==s&&s,l=e.lineGap,d=void 0===l?0:l,b=e.align,j=void 0===b?"start":b,u=e.cls,p=void 0===u?"":u,m=e.onClick,O=Z(),x=q(),f=(null===t||void 0===t?void 0:t.split("\n"))||[],v=Object(h.a)({fontFamily:"Gmarket sans",color:c?O.dark:O.bright,fontSize:x[i],fontWeight:o},a);return Object(g.jsx)("div",{onClick:m,className:p,style:v,children:f.map((function(e,t){return Object(g.jsxs)("p",{style:{width:"100%",textAlign:j,marginTop:0!==t?d:0},children:[e,t!==f.length-1&&Object(g.jsx)("br",{})]},t)}))})}var te=n.p+"static/media/imcoding.d07aec5a.jpg",ne=n.p+"static/media/kma.d737c27a.jpg",ie=n.p+"static/media/laboratory.c127e2fd.jpg",re=n.p+"static/media/linder.436b24e5.png",oe=n.p+"static/media/monitors.e05d2ac3.png",ae=n.p+"static/media/profile.e9fe15e7.png",se=Object(S.b)({name:"page",initialState:"home",reducers:{setPage:function(e,t){return t.payload,t.payload}}}),ce=se.actions.setPage,le=function(e){return e.page},de=se.reducer,be=Object(S.b)({name:"sidebar",initialState:!1,reducers:{sidebarClick:function(e){return!e},sidebarOpen:function(){return!0},sidebarClose:function(){return!1}}}),je=be.actions,ue=je.sidebarClick,ge=(je.sidebarOpen,je.sidebarClose,function(e){return e.sidebar}),pe=be.reducer,he=Object(S.a)({reducer:{sidebar:pe,color:A,page:de},middleware:function(e){return e({serializableCheck:!1})}}),me=he.dispatch,Oe=3*_(),xe=["2019.5","2020.1","2020.5","2020.10","2021.3","NOW"],fe=["I dropped out of the KMA\n(Korea Military Academy)\nto become a developer.","Then, all I did was\nto stay up all night\nstudying or coding.","Even when my friend\ncame to my house,\nI CODED.\n\n(I treated him later)","Fortunately,\nI also worked\nwith support from\na national research institute.",'And then,\nI joined the team\nHIDDENTRACK,\ndeveloped a service\ncalled "Linder".',"I have constantly\ntried to grow\nas a great developer\nfor 2 years,\nand I am still doing so."],ve=[ne,oe,te,ie,re,ae];function ke(e){if(e>=.75)return fe[fe.length-1];var t=.75/fe.length;return fe[Math.floor(e/t)]}function ye(e){if(e>=.75)return xe[xe.length-1];var t=.75/xe.length;return xe[Math.floor(e/t)]}function we(e){if(e<0)return ve[0];if(e>=.75)return ve[ve.length-1];var t=.75/ve.length;return ve[Math.floor(e/t)]}function Ce(){var e=X(),t=T(),n=Q(),r=Object(i.useState)(""),o=Object(w.a)(r,2),a=o[0],s=o[1],l=Object(i.useCallback)((function(e){e<1?"fadeOut animated"===a&&s("fadeIn animated"):"fadeOut animated"!==a&&s("fadeOut animated")}),[a]),d=Object(c.b)(le),b=Object(i.useCallback)((function(e){e>0&&e<1&&"about"!==d&&me(ce("about"))}),[d]);return Object(g.jsx)($.b,{duration:Oe,pin:!0,triggerHook:0,children:function(i){return l(i),b(i),Object(g.jsxs)("div",{className:"about ".concat(a),style:Object(h.a)({height:"100vh",backgroundColor:n.background2,position:"relative",overflow:"hidden",paddingTop:80},N(e)),children:[Object(g.jsx)("img",{style:{position:"absolute",objectFit:"cover",top:0,right:0,opacity:"".concat((t?.3:.7)*(2*Math.min(3*i,.5))),width:t?"100vw":"50vw",height:"100vh"},src:we(i-.25)}),Object(g.jsx)(ee,{size:"g1",msg:"About Me",style:{position:t?"relative":"absolute",top:t?20:140,left:t?void 0:"5vw",letterSpacing:t?0:30,transform:"translate3d(-".concat(Oe*(.5-Math.min(2*i,.5)),"px, 0, 0)")}}),Object(g.jsx)("div",{style:{position:"absolute",width:"100vw",height:2,bottom:128,left:0},children:Object(g.jsx)("div",{style:Object(h.a)(Object(h.a)(Object(h.a)({},J(t?24:48)),Y("center")),{},{position:"relative",top:2,backgroundColor:n.point1,transform:"translate3d(".concat((i-.25)/.75*U(),"px, 0, 0)")}),children:Object(g.jsx)("div",{style:Object(h.a)(Object(h.a)({},J(t?20:40)),{},{transform:"rotate(".concat(5*i*360,"deg)"),backgroundColor:n.background1},Y("center")),children:Object(g.jsx)(ee,{msg:":)"})})})}),Object(g.jsx)(ee,{size:"large",msg:ye(i-.25),style:{position:"absolute",top:"40vh",height:40,right:t?"10vw":"55vw",letterSpacing:10}}),Object(g.jsx)(ee,{size:"medium",msg:ke(i-.25),align:"end",lineGap:10,style:{position:"absolute",top:"50vh",height:40,right:t?"10vw":"55vw",letterSpacing:3}})]})}})}function Te(e){var t=e.progress,n=Q(),i="absolute",r=T();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{style:{backgroundColor:n.background2,position:i,top:0,right:0,width:"50vw",height:"100vh",zIndex:0,transform:"translate3d(".concat(ze*t*1.5,"px, 0, 0)")}}),Object(g.jsx)(ee,{size:"bg",weight:"bolder",msg:"Software",style:{fontFamily:"Hendrickson",color:n.secondary,position:i,right:0,top:"50vh",zIndex:0,letterSpacing:r?20:50,transform:"translate3d(".concat(ze*t,"px, 0, 0)")}}),Object(g.jsx)(ee,{size:"bg",msg:"DEVELOPER",style:{fontFamily:"Hendrickson",color:n.primary,position:i,right:0,top:"65vh",zIndex:0,letterSpacing:r?0:10,transform:"translate3d(".concat(ze*t*2.5,"px, 0, 0)")}}),Object(g.jsx)(ee,{size:"g1",msg:"portfolio",style:{fontFamily:"paint",color:n.point2,position:i,right:0,zIndex:0,letterSpacing:50,transform:"rotate(90deg) translate3d(".concat(ze*t*1.5,"px, 0, 0)")}})]})}var ze=_();function Se(){var e=T(),t=X(),n=Q(),r=Object(c.b)(le),o=Object(i.useCallback)((function(e){e>0&&e<1&&"home"!==r&&me(ce("home"))}),[r]);return Object(g.jsx)($.b,{duration:ze,pin:!0,triggerHook:0,children:function(i){return o(i),Object(g.jsxs)("div",{style:{height:"100vh",paddingTop:80,backgroundColor:n.background1,opacity:1-2*Math.max(i-.5,0),position:"relative",overflow:"hidden"},children:[Object(g.jsxs)("div",{style:Object(h.a)(Object(h.a)({paddingTop:120},N(t)),{},{display:"flex",flexDirection:"column",gap:24,position:"relative",zIndex:1,opacity:"".concat(1-2*i)}),children:[Object(g.jsx)(ee,{style:{transform:"translate3d(-".concat(ze*i*.5,"px, 0, 0)")},size:"g1",msg:"Hi !"}),Object(g.jsxs)("div",{style:Object(h.a)(Object(h.a)({},e?{}:Y("flex-start",20)),{},{transform:"translate3d(-".concat(ze*i*.5,"px, 0, 0)")}),children:[Object(g.jsx)(ee,{size:"g1",msg:"My name is"}),Object(g.jsx)(ee,{size:"g2",weight:"bolder",msg:"Chana"})]})]}),Object(g.jsx)(Te,{progress:i})]})}})}var Fe=n(21),Ee=n.n(Fe),Be=n.p+"static/media/avocado-graph.ea87bc8f.png",Ae=n.p+"static/media/avocado-graph2.451e6977.png",De=n.p+"static/media/chika.64ebffef.png",Ie=n.p+"static/media/chika2.9b44362b.png",Re=n.p+"static/media/popol3d.02c56bfc.png",Me={background:"rgba( 255, 255, 255, 0.35 )",boxShadow:"0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",borderRadius:10,border:"1px solid rgba( 255, 255, 255, 0.18 )",backdropFilter:"blur( 5.5px )",WebkitBackdropFilter:"blur(5.5px)"};function Le(e){var t=e.progress,n=e.index,i=e.children,r=T(),o=r?2*U()/3:400,a=r?2*_()/3:600;return Object(g.jsx)("div",{style:Object(h.a)({width:o,height:a,position:"absolute",padding:12,top:"24vh",boxSizing:"border-box",right:-o*n-60*n,transform:"translate3d(".concat(-Ue*t*1.5+3*o+120,"px, 0, 0)")},Me),children:i})}function He(e){var t=e.progress,n=e.index;return Object(g.jsx)(Le,{progress:t,index:n,children:Object(g.jsxs)("div",{onClick:function(){return window.open("https://chana.tistory.com/entry/Colab-Keras-Avocado-Price-%EC%98%88%EC%B8%A1-%EB%AA%A8%EB%8D%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-2?category=858961")},children:[Object(g.jsx)("img",{src:Be,style:{width:"100%",borderTopRightRadius:10,borderTopLeftRadius:10}}),Object(g.jsx)("img",{src:Ae,style:{width:"100%",borderBottomLeftRadius:10,borderBottomRightRadius:10}}),Object(g.jsx)(ee,{dark:!0,msg:"Avocado price",style:{marginTop:12,fontWeight:"bold"}}),Object(g.jsx)(ee,{size:"small",dark:!0,msg:"Predict avocado price using keras",style:{marginTop:24}}),Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:12},children:[Object(g.jsx)(ee,{size:"small",dark:!0,msg:" - Data visuallization"}),Object(g.jsx)(ee,{size:"small",dark:!0,msg:" - Machine learning"})]}),Object(g.jsx)(ee,{size:"small",dark:!0,msg:"VISIT BLOG",style:{position:"absolute",bottom:18,letterSpacing:5}})]})})}function We(e){var t=e.progress,n=e.index;return Object(g.jsx)(Le,{progress:t,index:n,children:Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:Re,style:{width:"100%",borderRadius:10}}),Object(g.jsx)(ee,{dark:!0,msg:"Statue",style:{marginTop:12,fontWeight:"bold"}}),Object(g.jsx)(ee,{size:"small",dark:!0,msg:"Practice three.js",style:{marginTop:24}}),Object(g.jsxs)("div",{style:{position:"absolute",bottom:18},children:[Object(g.jsx)(ee,{onClick:function(){return window.open("https://github.com/Jo-chana/portfolio")},size:"small",dark:!0,msg:"GITHUB",style:{letterSpacing:5,marginBottom:10}}),Object(g.jsx)(ee,{onClick:function(){return window.open("https://portfolio.chana.world")},size:"small",dark:!0,msg:"WEBSITE",style:{letterSpacing:5}})]})]})})}function Ge(e){var t=e.progress,n=e.index,i=(T()?2*U()/3:400)-24;return Object(g.jsx)(Le,{progress:t,index:n,children:Object(g.jsxs)("div",{onClick:function(){return window.open("https://github.com/Jo-chana/footprint-v2")},children:[Object(g.jsx)(Ee.a,{width:i,height:i,url:"https://www.youtube.com/watch?v=m-h2F6aQGJ4",style:{borderRadius:10}}),Object(g.jsx)(ee,{style:{marginTop:18},weight:"bold",dark:!0,msg:"Foot Print"}),Object(g.jsx)(ee,{style:{marginTop:24},size:"small",dark:!0,msg:"Location-based memory sharing service"}),Object(g.jsx)(ee,{style:{marginTop:12},size:"small",dark:!0,msg:"- Android app"}),Object(g.jsx)(ee,{size:"small",dark:!0,msg:"GITHUB",style:{position:"absolute",bottom:18,letterSpacing:5}})]})})}function Je(e){var t=e.progress,n=e.index,i=(T()?2*U()/3:400)-24;return Object(g.jsx)(Le,{progress:t,index:n,children:Object(g.jsxs)("div",{onClick:function(){return window.open("https://github.com/Jo-chana/FoodDeal")},children:[Object(g.jsx)(Ee.a,{width:i,height:i,url:"https://youtu.be/T-P_hIjU6Nk",style:{borderRadius:10}}),Object(g.jsx)(ee,{style:{marginTop:18},weight:"bold",dark:!0,msg:"Food Deal"}),Object(g.jsx)(ee,{style:{marginTop:24},size:"small",dark:!0,msg:"Location-based food sharing service for single-person households."}),Object(g.jsx)(ee,{style:{marginTop:12},size:"small",dark:!0,msg:"- Android app"}),Object(g.jsx)(ee,{size:"small",dark:!0,msg:"GITHUB",style:{position:"absolute",bottom:18,letterSpacing:5}})]})})}function Pe(e){var t=e.progress,n=e.index,i=(T()?2*U()/3:400)-24;return Object(g.jsx)(Le,{progress:t,index:n,children:Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:De,style:{width:"100%",borderTopLeftRadius:10,borderTopRightRadius:10,height:i/2}}),Object(g.jsx)("img",{src:Ie,style:{width:"100%",borderBottomRightRadius:10,borderBottomLeftRadius:10,height:i/2}}),Object(g.jsx)(ee,{style:{marginTop:18},weight:"bold",dark:!0,msg:"Chika Lab"}),Object(g.jsx)(ee,{style:{marginTop:24},size:"small",dark:!0,msg:"(For fun) Website to check your teeth"}),Object(g.jsx)(ee,{style:{marginTop:12},size:"small",dark:!0,msg:"- Android app, website"}),Object(g.jsx)(ee,{size:"small",dark:!0,msg:"VISIT BLOG",style:{position:"absolute",bottom:18,letterSpacing:5},onClick:function(){return window.open("https://chana.tistory.com/entry/DlibCloud-RunAndroid-%EC%B9%98%EC%95%84-%EC%83%81%ED%83%9C-%EC%A0%90%EA%B2%80-AI-%EC%84%9C%EB%B9%84%EC%8A%A4-%EB%B0%B0%ED%8F%AC-%EA%B8%B0%EB%A1%9D%EC%9A%A9?category=893278")}})]})})}function Ne(e){var t=e.progress,n=e.index,i=(T()?2*U()/3:400)-24;return Object(g.jsx)(Le,{progress:t,index:n,children:Object(g.jsxs)("div",{children:[Object(g.jsx)(Ee.a,{width:i,height:i,url:"https://youtu.be/kydYotiUJZ8",style:{borderRadius:10}}),Object(g.jsx)(ee,{style:{marginTop:18},weight:"bold",dark:!0,msg:"Linder"}),Object(g.jsx)(ee,{style:{marginTop:24},size:"small",dark:!0,msg:"Social Calendar, Linder."}),Object(g.jsx)(ee,{style:{marginTop:12},size:"small",dark:!0,msg:"- Server, iOS/Android app"}),Object(g.jsxs)("div",{style:{position:"absolute",bottom:18},children:[Object(g.jsx)(ee,{size:"small",dark:!0,style:{letterSpacing:5,marginBottom:10},msg:"WEBSITE",onClick:function(){return window.open("https://linder.kr")}}),Object(g.jsx)(ee,{size:"small",dark:!0,style:{letterSpacing:5},msg:"ABOUT MORE",onClick:function(){return window.open("/popol.pdf")}})]})]})})}function Ke(e){var t=e.progress,n=e.index,i=(T()?2*U()/3:400)-24;return Object(g.jsx)(Le,{progress:t,index:n,children:Object(g.jsxs)("div",{children:[Object(g.jsx)(Ee.a,{width:i,height:i,url:"https://youtu.be/MrGD0cg3SdI",style:{borderRadius:10}}),Object(g.jsx)(ee,{style:{marginTop:18},weight:"bold",dark:!0,msg:"Buv"}),Object(g.jsx)(ee,{style:{marginTop:24},size:"small",dark:!0,msg:"Broden Music Lives."}),Object(g.jsx)(ee,{style:{marginTop:12},size:"small",dark:!0,msg:"- Server, Admin, website"}),Object(g.jsxs)("div",{style:{position:"absolute",bottom:18},children:[Object(g.jsx)(ee,{size:"small",dark:!0,style:{letterSpacing:5,marginBottom:10},msg:"WEBSITE",onClick:function(){return window.open("https://buv.co.kr")}}),Object(g.jsx)(ee,{size:"small",dark:!0,style:{letterSpacing:5},msg:"ABOUT MORE",onClick:function(){return window.open("/popol.pdf")}})]})]})})}var Ue=7*Math.min(2*U()/3,400)*1.5+360;function Ve(){var e=Q(),t=X(),n=Object(c.b)(le),r=Object(i.useCallback)((function(e){e>0&&e<1&&"works"!==n&&me(ce("works"))}),[n]);return Object(g.jsx)($.b,{duration:Ue,pin:!0,triggerHook:0,children:function(n){return r(n),Object(g.jsxs)("div",{style:{height:Ue,backgroundColor:e.primary,width:"100%",opacity:1-Math.max(n-.8,0)/.2,position:"relative",overflow:"hidden"},children:[Object(g.jsx)(ee,{dark:!0,size:"g2",weight:"bold",msg:"MY WORKS",style:{position:"absolute",top:"20vh",left:t,transform:"translate3d(-".concat(Ue*(.5-Math.min(n/.2,.5)),"px, 0, 0)"),letterSpacing:20}}),Object(g.jsx)(He,{progress:n,index:0}),Object(g.jsx)(Pe,{progress:n,index:1}),Object(g.jsx)(We,{progress:n,index:2}),Object(g.jsx)(Ge,{progress:n,index:3}),Object(g.jsx)(Je,{progress:n,index:4}),Object(g.jsx)(Ne,{progress:n,index:5}),Object(g.jsx)(Ke,{progress:n,index:6})]})}})}var _e=n(18),Qe=n(43);function Ye(){var e=Object(c.b)(B),t=Object(i.useState)(!1),n=Object(w.a)(t,2),r=n[0],o=n[1],a=Object(i.useCallback)((function(e){me(E(e)),o(!1)}),[]);return Object(g.jsxs)("div",{onClick:function(){return o(!r)},style:Object(h.a)({boxShadow:"0 2px 16px 0 rgba(0, 0, 0, 0.2)",position:"relative",height:30,width:80},Y("center")),children:[Object.values(G[e]).map((function(e){return Object(g.jsx)("div",{style:{flex:1,height:"100%",backgroundColor:e}},e)})),r&&Object(g.jsx)("div",{style:{position:"absolute",top:38,width:120,right:0},children:Object.keys(G).map((function(e){return Object(g.jsx)("div",{onClick:function(){return a(e)},style:Object(h.a)(Object(h.a)({},Y("flex-start")),{},{height:32}),children:Object.values(G[e]).map((function(t){return Object(g.jsx)("div",{style:{backgroundColor:t,flex:1,height:"100%"}},"".concat(e,":").concat(t))}))},e)}))})]})}var qe={root:{position:void 0,zIndex:"20",innerWidth:0},sidebar:{position:"fixed",width:"".concat(310,"px"),height:"100vh",top:"0px",zIndex:"20"},content:{position:void 0,top:void 0,left:void 0,right:void 0,bottom:void 0}};function Ze(e){var t=e.style,n=Object(i.useCallback)((function(){return me(ue())}),[]),r=T(),o=Z(),a="works"===Object(c.b)(le)?o.dark:o.bright,s=Object(h.a)({width:32,height:32,borderRadius:32},t);return r?Object(g.jsx)(_e.e,{onClick:n,size:32,color:a}):Object(g.jsx)("img",{src:ae,onClick:n,style:s})}function Xe(){var e=Q(),t=Z(),n=Object(i.useCallback)((function(){window.scrollTo({top:0})}),[]),r=Object(i.useCallback)((function(){var e=5*Oe/4+ze;window.scrollTo({top:e})}),[]),o=Object(i.useCallback)((function(){var e=Oe+ze+Ue;window.scrollTo({top:e})}),[]),a=Object(i.useCallback)((function(){var e=Oe+ze+Ue+10*_();window.scrollTo({top:e})}),[]);return Object(g.jsxs)("div",{style:Object(h.a)(Object(h.a)({height:"100%",width:"100%",backgroundColor:e.background1,flexDirection:"column"},P(100)),Y("flex-start",12)),children:[Object(g.jsx)("img",{src:ae,style:Object(h.a)(Object(h.a)({},J(150)),{},{boxShadow:"0 2px 16px 0 rgba(0, 0, 0, 0.2)"})}),Object(g.jsx)(ee,{size:"small",msg:"@jochana",weight:"bold"}),Object(g.jsx)(ee,{size:"small",msg:"Software developer"}),Object(g.jsx)(ee,{onClick:n,size:"small",msg:"HOME",style:{marginTop:32,letterSpacing:10}}),Object(g.jsx)(ee,{onClick:r,size:"small",msg:"ABOUT",style:{marginTop:12,letterSpacing:10}}),Object(g.jsx)(ee,{onClick:o,size:"small",msg:"WORKS",style:{marginTop:12,letterSpacing:10}}),Object(g.jsx)(ee,{onClick:a,size:"small",msg:"CONTACT",style:{marginTop:12,letterSpacing:6}}),Object(g.jsx)(ee,{size:"small",msg:"Theme",style:{letterSpacing:4,marginTop:32}}),Object(g.jsx)(Ye,{}),Object(g.jsxs)("div",{style:Object(h.a)(Object(h.a)({flex:1},Y("center",12)),{},{alignItems:"flex-end"}),children:[Object(g.jsx)(_e.a,{onClick:function(){return window.open("https://github.com/Jo-chana")},size:32,color:t.bright}),Object(g.jsx)(_e.c,{onClick:function(){return window.open("https://www.linkedin.com/in/chana-good/")},size:32,color:t.bright}),Object(g.jsx)(_e.b,{onClick:function(){return window.open("https://www.instagram.com/jochxna/")},size:32,color:t.bright}),Object(g.jsx)(_e.d,{onClick:function(){return window.open("https://chana.tistory.com")},size:32,color:t.bright})]}),Object(g.jsx)(ee,{style:{marginTop:8},size:"extraSmall",msg:"\xa9 2021. Jo Chana. All rights reserved."})]})}function $e(){var e=Object(c.b)(ge),t=Object(i.useCallback)((function(){me(ue())}),[]),n=z();return Object(g.jsx)(Qe.a,{docked:n,onSetOpen:t,styles:qe,sidebar:Object(g.jsx)(Xe,{}),open:e,children:Object(g.jsx)(g.Fragment,{})})}function et(){var e=X(),t="works"===Object(c.b)(le),n=T(),r=z(),o=Object(i.useCallback)((function(){window.scrollTo({top:0})}),[]),a=Object(i.useCallback)((function(){var e=5*Oe/4+ze;window.scrollTo({top:e})}),[]),s=Object(i.useCallback)((function(){var e=Oe+ze+Ue;window.scrollTo({top:e})}),[]),l=Object(i.useCallback)((function(){var e=Oe+ze+Ue+10*_();window.scrollTo({top:e})}),[]);return Object(g.jsx)("div",{style:Object(h.a)(Object(h.a)({width:"100%",height:80,backgroundColor:"transparent",position:"fixed",top:0,zIndex:5},N(e)),Y("space-between")),children:Object(g.jsxs)("div",{style:Y("flex-start",32),children:[!r&&Object(g.jsx)(Ze,{}),!n&&Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{style:Y("flex-start",24),children:[Object(g.jsx)("div",{onClick:o,children:Object(g.jsx)(ee,{dark:t,size:"small",msg:"HOME"})}),Object(g.jsx)("div",{onClick:a,children:Object(g.jsx)(ee,{dark:t,size:"small",msg:"ABOUT"})}),Object(g.jsx)("div",{onClick:s,children:Object(g.jsx)(ee,{dark:t,size:"small",msg:"WORKS"})}),Object(g.jsx)("div",{onClick:l,children:Object(g.jsx)(ee,{dark:t,size:"small",msg:"CONTACT"})})]})})]})})}var tt=n(48);function nt(e){var t=e.onChange,n=e.size,r=void 0===n?"medium":n,o=e.multiline,a=void 0!==o&&o,s=e.placeholder,c=void 0===s?"":s,l=e.style,d=e.dark,b=void 0===d||d,j=e.fontColor,u=Z(),p=Q(),m=b?u.dark:u.bright,O=q(),x=Object(i.useState)(!1),f=Object(w.a)(x,2),v=f[0],k=f[1],y=Object(i.useCallback)((function(e){t&&t(e.target.value)}),[t]),C=Object(i.useCallback)((function(e){t&&t(e.target.value)}),[t]),T=Object(h.a)(Object(h.a)(Object(h.a)({backgroundColor:m,border:"solid ".concat(m),width:"100%",color:null!==j&&void 0!==j?j:p.point1,fontSize:O[r],"--placeholder-color":null!==j&&void 0!==j?j:p.point1,boxSizing:"border-box"},N(12)),P(8)),{},{borderRadius:4},l);return a?Object(g.jsx)("textarea",{spellCheck:!1,onFocus:function(){return k(!0)},onBlur:function(){return k(!1)},placeholder:v?"":c,style:Object(h.a)(Object(h.a)({},T),{},{fontFamily:"Gmarket sans",resize:"none",height:10*O[r]}),onChange:y}):Object(g.jsx)("input",{onFocus:function(){return k(!0)},onBlur:function(){return k(!1)},placeholder:v?"":c,spellCheck:!1,style:T,onChange:C})}function it(){var e=Q(),t=T(),n=Object(i.useState)(""),r=Object(w.a)(n,2),o=r[0],a=r[1],s=Object(i.useState)(""),c=Object(w.a)(s,2),l=c[0],d=c[1],b=Object(i.useState)(""),j=Object(w.a)(b,2),u=j[0],p=j[1],m=Object(i.useState)(!1),O=Object(w.a)(m,2),x=O[0],f=O[1],v=Object(i.useState)("none"),C=Object(w.a)(v,2),z=C[0],S=C[1],F=Object(i.useState)(!1),E=Object(w.a)(F,2),B=E[0],A=E[1],D=Object(i.useState)(!1),I=Object(w.a)(D,2),R=I[0],M=I[1],L=Z();Object(i.useEffect)((function(){B||o.length>0&&(u.length>0||l.length>0)&&(S("zoomInDown animated"),A(!0))}),[u.length,B,l.length,o.length]),Object(i.useEffect)((function(){x&&S("flip animated")}),[x]);var H=Object(i.useCallback)(Object(y.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S("bounceOutRight animated"),e.prev=1,e.next=4,tt.a.send("chana_mail","template_pyc0z1s",{name:o,message:l,contact:u},"user_XEtxHL5Zl5TYnohRjfShn");case 4:M(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])}))),[u,l,o]);return Object(g.jsx)($.b,{duration:_(),pin:!0,triggerHook:0,children:Object(g.jsxs)("div",{style:{backgroundColor:e.point1,width:"100%",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:100},children:[Object(g.jsx)(ee,{size:"g1",msg:"Thanks!",dark:!0,style:{letterSpacing:15}}),Object(g.jsx)(ee,{msg:"Contact me?",dark:!0,style:{marginTop:32,letterSpacing:15}}),Object(g.jsx)("div",{style:{marginTop:60},children:R?Object(g.jsx)(g.Fragment,{}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{style:{display:"flex",flexDirection:t?"column":"row",gap:12},children:[Object(g.jsx)(nt,{style:{width:300},placeholder:"name",onChange:a}),Object(g.jsx)(nt,{style:{width:300},placeholder:"contact",onChange:p})]}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:12,marginTop:12},children:Object(g.jsx)(nt,{style:{width:t?300:612},placeholder:"message",onChange:d,multiline:!0})})]})}),R?Object(g.jsx)(ee,{style:{marginTop:60},lineGap:20,msg:"The message arrived safely!\nI will check it\nand contact you ASAP :)"}):Object(g.jsx)("div",{onClick:H,className:z,onMouseOver:function(){return f(!0)},onMouseLeave:function(){return f(!1)},style:Object(h.a)({marginTop:48,backgroundColor:L.dark,width:t?150:300,height:t?50:100,borderRadius:100},Y("center")),children:Object(g.jsx)(ee,{msg:"Send Message",style:{color:e.point1}})})]})})}var rt=[{name:"main",exact:!0,component:function(){return Object(g.jsxs)($.a,{children:[Object(g.jsx)(Se,{}),Object(g.jsx)(Ce,{}),Object(g.jsx)(Ve,{}),Object(g.jsx)(it,{})]})},path:"/"},{name:"Work",exact:!0,component:function(){return Object(g.jsx)(g.Fragment,{})},path:"/work"}],ot={home:"background2",about:"primary",works:"point1",contact:"point1"};function at(){var e=Object(c.b)(le),t=Q()[ot[e]],n=z();return Object(g.jsx)(j.a,{children:Object(g.jsxs)("div",{style:{minHeight:"100vh",backgroundColor:t,paddingLeft:n?310:void 0},children:[Object(g.jsx)(et,{}),rt.map((function(e){var t;return Object(g.jsx)(u.a,{exact:null!==(t=e.exact)&&void 0!==t&&t,path:e.path,component:e.component},e.name)})),Object(g.jsx)(p,{}),Object(g.jsx)($e,{})]})})}var st=Object(s.a)()((function(){return Object(g.jsx)(c.a,{store:he,children:Object(g.jsx)(at,{})})})),ct=(n(74),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),o(e),a(e)}))});a.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(st,{})}),document.getElementById("root")),ct()}},[[75,1,2]]]);
//# sourceMappingURL=main.608bf566.chunk.js.map