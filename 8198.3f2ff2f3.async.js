"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8198],{33494:function(N,S,e){e.d(S,{FN:function(){return o},WF:function(){return E}});var x=e(5574),_=e.n(x),f=e(67294);function P(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}function n(i){if(typeof window!="undefined"){var t=document.createElement("div");t.style.display="none",document.body.appendChild(t),i.forEach(function(b){var h=new Image;h.src=b,t.appendChild(h)})}}function E(){var i=f.useState({}),t=_()(i,2),b=t[0],h=t[1],y=f.useState(!1),C=_()(y,2),v=C[0],u=C[1];return f.useEffect(function(){Object.keys(b!=null?b:{}).length===0&&typeof fetch!="undefined"&&(u(!0),fetch("https://render.alipay.com/p/h5data/antd4-config_website-h5data.json").then(function(l){return l.json()}).then(function(l){h(l),u(!1)}))},[]),[b,v]}var a={name:"pe4q6k",styles:".slick-dots.slick-dots-bottom{bottom:-22px;li{width:6px;height:6px;background:#e1eeff;border-radius:50%;button{height:6px;background:#e1eeff;border-radius:50%;}&.slick-active{background:#4b9cff;button{background:#4b9cff;}}}}"},o=function(){return{carousel:a}}},74399:function(N,S,e){var x=e(67294),_=function(){return ___EmotionJSX(React.Fragment,null,"API Table")},f=null},2068:function(N,S,e){var x=e(67333),_=e.n(x),f=e(97857),P=e.n(f),n=e(13769),E=e.n(n),a=e(13669),o=e(67294),i=e(96923),t=["style"],b=function(y){var C=y.style,v=E()(y,t);return(0,i.tZ)(a.Alert,_()({},v,{style:P()({margin:"24px 0"},C)}))};S.Z=b},63942:function(N,S,e){var x=e(67294),_=e(10274),f=e(96923),P=e(52180),n=function(){var o=(0,P.Z)(),i=o.token;return{codeSpan:(0,f.iv)("padding:0.2em 0.4em;font-size:0.9em;background:",i.siteMarkdownCodeBg,";border-radius:",i.borderRadius,"px;font-family:monospace;",""),dot:(0,f.iv)("display:inline-block;width:6px;height:6px;border-radius:",i.borderRadiusSM,"px;margin-inline-end:4px;border:1px solid ",i.colorSplit,";","")}},E=function(o){var i=n(),t=o.color,b=o.children,h=x.useMemo(function(){var y=new _.C(t).toHex8String();return y.endsWith("ff")?y.slice(0,-2):y},[t]);return(0,f.tZ)("span",{css:i.codeSpan},(0,f.tZ)("span",{css:i.dot,style:{backgroundColor:h}}),b!=null?b:h)};S.Z=E},24628:function(N,S,e){e.d(S,{Z:function(){return h}});var x=e(5574),_=e.n(x),f=e(67294),P=e(94065),n=e(34081),E=e(37472),a=e(96923),o=70,i=70,t=function(){var C=(0,f.useState)("#1890ff"),v=_()(C,2),u=v[0],l=v[1],r=(0,f.useState)(null),D=_()(r,2),c=D[0],s=D[1],R=function(m,A){var d=m.target?m.target.value:m;l(d),s(A)},B=(0,f.useMemo)(function(){var O="";return c&&(c.hsv.s*100<o&&(O+=" \u9971\u548C\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(o,"\uFF08\u73B0\u5728 ").concat((c.hsv.s*100).toFixed(2),"\uFF09")),c.hsv.v*100<i&&(O+=" \u4EAE\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(i,"\uFF08\u73B0\u5728 ").concat((c.hsv.v*100).toFixed(2),"\uFF09"))),(0,a.tZ)("span",{className:"color-palette-picker-validation"},O.trim())},[c,o,i]);return(0,a.tZ)("div",{className:"color-palette-horizontal"},(0,a.tZ)("div",{className:"color-palette-pick"},(0,a.tZ)(P._H,{id:"app.docs.color.pick-primary"})),(0,a.tZ)("div",{className:"main-color"},(0,E.Z)({color:u})),(0,a.tZ)("div",{className:"color-palette-picker"},(0,a.tZ)("span",{style:{display:"inline-block",verticalAlign:"middle"}},(0,a.tZ)(n.Z,{color:u,onChange:R})),(0,a.tZ)("span",{className:"color-palette-picker-value"},u),B))},b=t,h=b},19260:function(N,S,e){e.d(S,{Z:function(){return y}});var x=e(5574),_=e.n(x),f=e(67294),P=e(94065),n=e(13669),E=e(34081),a=e(37472),o=e(96923),i=70,t=70,b=function(){var v=(0,f.useState)("#1890ff"),u=_()(v,2),l=u[0],r=u[1],D=(0,f.useState)("#141414"),c=_()(D,2),s=c[0],R=c[1],B=(0,f.useState)(null),O=_()(B,2),m=O[0],A=O[1],d=function(g,L){var U=g.target?g.target.value:g;r(U),A(L)},p=function(g){var L=g.target?g.target.value:g;R(L)},M=(0,f.useMemo)(function(){var T="";return m&&(m.hsv.s*100<i&&(T+=" \u9971\u548C\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(i,"\uFF08\u73B0\u5728 ").concat((m.hsv.s*100).toFixed(2),"\uFF09")),m.hsv.v*100<t&&(T+=" \u4EAE\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(t,"\uFF08\u73B0\u5728 ").concat((m.hsv.v*100).toFixed(2),"\uFF09"))),(0,o.tZ)("span",{className:"color-palette-picker-validation color-palette-picker-validation-dark"},T.trim())},[m]);return(0,o.tZ)("div",{className:"color-palette-horizontal color-palette-horizontal-dark"},(0,o.tZ)("div",{className:"main-color"},(0,a.Z)({color:l,dark:!0,backgroundColor:s})),(0,o.tZ)("div",{className:"color-palette-picker"},(0,o.tZ)(n.Row,null,(0,o.tZ)(n.Col,{span:12},(0,o.tZ)("div",{className:"color-palette-pick"},(0,o.tZ)(P._H,{id:"app.docs.color.pick-primary"})),(0,o.tZ)("span",{style:{display:"inline-block",verticalAlign:"middle"}},(0,o.tZ)(n.Row,null,(0,o.tZ)(n.Col,{span:18},(0,o.tZ)(E.Z,{color:l,onChange:d})),(0,o.tZ)(n.Col,{span:6},(0,o.tZ)("span",{className:"color-palette-pick-hex"},l))))),(0,o.tZ)(n.Col,{span:12},(0,o.tZ)("div",{className:"color-palette-pick"},(0,o.tZ)(P._H,{id:"app.docs.color.pick-background"})),(0,o.tZ)("span",{style:{display:"inline-block",verticalAlign:"middle"}},(0,o.tZ)(n.Row,null,(0,o.tZ)(n.Col,{span:18},(0,o.tZ)(E.Z,{color:s,onChange:p})),(0,o.tZ)(n.Col,{span:6},(0,o.tZ)("span",{className:"color-palette-pick-hex"},s)))))),M))},h=b,y=h},16073:function(N,S,e){e.d(S,{Z:function(){return i}});var x=e(67294),_=e(94184),f=e.n(_),P=e(63379),n=e(96923),E=[{name:"red",english:"Dust Red",chinese:"\u8584\u66AE",description:"\u6597\u5FD7\u3001\u5954\u653E"},{name:"volcano",english:"Volcano",chinese:"\u706B\u5C71",description:"\u9192\u76EE\u3001\u6F8E\u6E43"},{name:"orange",english:"Sunset Orange",chinese:"\u65E5\u66AE",description:"\u6E29\u6696\u3001\u6B22\u5FEB"},{name:"gold",english:"Calendula Gold",chinese:"\u91D1\u76CF\u82B1",description:"\u6D3B\u529B\u3001\u79EF\u6781"},{name:"yellow",english:"Sunrise Yellow",chinese:"\u65E5\u51FA",description:"\u51FA\u751F\u3001\u9633\u5149"},{name:"lime",english:"Lime",chinese:"\u9752\u67E0",description:"\u81EA\u7136\u3001\u751F\u673A"},{name:"green",english:"Polar Green",chinese:"\u6781\u5149\u7EFF",description:"\u5065\u5EB7\u3001\u521B\u65B0"},{name:"cyan",english:"Cyan",chinese:"\u660E\u9752",description:"\u5E0C\u671B\u3001\u575A\u5F3A"},{name:"blue",english:"Daybreak Blue",chinese:"\u62C2\u6653\u84DD",description:"\u5305\u5BB9\u3001\u79D1\u6280\u3001\u666E\u60E0"},{name:"geekblue",english:"Geek Blue",chinese:"\u6781\u5BA2\u84DD",description:"\u63A2\u7D22\u3001\u94BB\u7814"},{name:"purple",english:"Golden Purple",chinese:"\u9171\u7D2B",description:"\u4F18\u96C5\u3001\u6D6A\u6F2B"},{name:"magenta",english:"Magenta",chinese:"\u6CD5\u5F0F\u6D0B\u7EA2",description:"\u660E\u5FEB\u3001\u611F\u6027"}],a=function(b){var h=b.dark,y=f()("color-palettes",{"color-palettes-dark":!!h});return(0,n.tZ)("div",{className:y},E.map(function(C){return(0,n.tZ)(P.Z,{key:C.name,color:C,dark:h,showTitle:!0})}))},o=a,i=o},56140:function(N,S,e){e.d(S,{Z:function(){return A}});var x=e(97857),_=e.n(x),f=e(5574),P=e.n(f),n=e(67294),E=e(94065),a=e(96923),o=e(23279),i=e.n(o),t=e(13669),b=e(40110),h=[{cover:"https://gw.alipayobjects.com/zos/antfincdn/4n5H%24UX%24j/bianzu%2525204.svg",link:"https://procomponents.ant.design/components/layout",subtitle:"\u9AD8\u7EA7\u5E03\u5C40",title:"ProLayout",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/mStei5BFC/bianzu%2525207.svg",link:"https://procomponents.ant.design/components/form",subtitle:"\u9AD8\u7EA7\u8868\u5355",title:"ProForm",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/AwU0Cv%26Ju/bianzu%2525208.svg",link:"https://procomponents.ant.design/components/table",subtitle:"\u9AD8\u7EA7\u8868\u683C",title:"ProTable",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/H0%26LSYYfh/bianzu%2525209.svg",link:"https://procomponents.ant.design/components/descriptions",subtitle:"\u9AD8\u7EA7\u5B9A\u4E49\u5217\u8868",title:"ProDescriptions",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/uZUmLtne5/bianzu%2525209.svg",link:"https://procomponents.ant.design/components/list",subtitle:"\u9AD8\u7EA7\u5217\u8868",title:"ProList",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"},{cover:"https://gw.alipayobjects.com/zos/antfincdn/N3eU432oA/bianzu%2525209.svg",link:"https://procomponents.ant.design/components/editable-table",subtitle:"\u53EF\u7F16\u8F91\u8868\u683C",title:"EditableProTable",tag:"https://gw.alipayobjects.com/zos/antfincdn/OG4ajVYzh/bianzu%2525202.svg"}],y=h,C=e(52180),v=e(38199);function u(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var l={name:"1lyd58t",styles:"display:flex;transition:all 0.3s;justify-content:space-between"},r={name:"l0aeht",styles:"cursor:pointer;transition:all 0.5s;&:hover{box-shadow:0 6px 16px -8px #00000014,0 9px 28px #0000000d,0 12px 48px 16px #00000008;}"},D={name:"eyizcg",styles:"display:flex;align-items:center;justify-content:center;height:152px"},c={name:"smln73",styles:"margin-bottom:24px!important"},s=function(){var p=(0,C.Z)(),M=p.token;return{componentsOverviewGroupTitle:c,componentsOverviewTitle:(0,a.iv)("overflow:hidden;color:",M.colorTextHeading,";text-overflow:ellipsis;",""),componentsOverviewImg:D,componentsOverviewCard:r,componentsOverviewAffix:l,componentsOverviewSearch:(0,a.iv)("padding:0;.anticon-search{color:",M.colorTextDisabled,";}",""),componentsOverviewContent:(0,a.iv)("&:empty:after{display:block;padding:16px 0 40px;color:",M.colorTextDisabled,";text-align:center;border-bottom:1px solid ",M.colorSplit,";content:'Not Found';}","")}},R=function(p){window.gtag&&window.gtag("event","\u70B9\u51FB",{event_category:"\u7EC4\u4EF6\u603B\u89C8\u5361\u7247",event_label:p})},B=i()(function(d){window.gtag&&window.gtag("event","\u641C\u7D22",{event_category:"\u7EC4\u4EF6\u603B\u89C8\u5361\u7247",event_label:d})},2e3),O=t.Typography.Title,m=function(){var p=s(),M=(0,n.useContext)(v.Z),T=M.theme,g=(0,E.tx)(),L=(0,n.useState)(!1),U=P()(L,2),F=U[0],G=U[1],de=(0,C.Z)(),te=de.token,Q=te.borderRadius,oe=te.colorBgContainer,z=te.fontSizeXL,H={boxShadow:"rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px",padding:8,margin:-8,borderRadius:Q,backgroundColor:oe},Y=(0,E.TH)(),ue=Y.search,se=(0,E.YB)(),ce=se.locale,me=se.formatMessage,pe=(0,n.useState)(""),_e=P()(pe,2),W=_e[0],k=_e[1],K=(0,n.useRef)(null),ne=function(j){if(j.keyCode===13&&W.trim().length){var w,Z;(w=K.current)===null||w===void 0||(Z=w.querySelector(".components-overview-card"))===null||Z===void 0||Z.click()}},ae=(0,n.useMemo)(function(){return g.filter(function(I){return I==null?void 0:I.title}).map(function(I){return{title:I==null?void 0:I.title,children:I.children.map(function(j){var w;return{title:(w=j.frontmatter)===null||w===void 0?void 0:w.title,subtitle:j.frontmatter.subtitle,cover:j.frontmatter.cover,coverDark:j.frontmatter.coverDark,link:j.link}})}}).concat([{title:ce==="zh-CN"?"\u91CD\u578B\u7EC4\u4EF6":"Others",children:ce==="zh-CN"?y:y.map(function(I){return _()(_()({},I),{},{subtitle:""})})}])},[g,ce]);return(0,a.tZ)("section",{className:"markdown",ref:K},(0,a.tZ)(t.Divider,null),(0,a.tZ)(t.Affix,{offsetTop:24,onChange:G},(0,a.tZ)("div",{css:p.componentsOverviewAffix,style:F?H:{}},(0,a.tZ)(t.Input,{autoFocus:!0,value:W,placeholder:me({id:"app.components.overview.search"}),css:p.componentsOverviewSearch,onChange:function(j){k(j.target.value),B(j.target.value)},onKeyDown:ne,bordered:!1,suffix:(0,a.tZ)(b.Z,null),style:{fontSize:F?z-2:z}}))),(0,a.tZ)(t.Divider,null),(0,a.tZ)("div",{css:p.componentsOverviewContent},ae.filter(function(I){return I==null?void 0:I.title}).map(function(I){var j,w=I==null||(j=I.children)===null||j===void 0?void 0:j.filter(function(Z){var V,$;return!W.trim()||(Z==null||(V=Z.title)===null||V===void 0||($=V.toLowerCase())===null||$===void 0?void 0:$.includes(W.trim().toLowerCase()))||((Z==null?void 0:Z.subtitle)||"").toLowerCase().includes(W.trim().toLowerCase())});return w!=null&&w.length?(0,a.tZ)("div",{key:I==null?void 0:I.title},(0,a.tZ)(O,{level:2,css:p.componentsOverviewGroupTitle},(0,a.tZ)(t.Space,{align:"center"},(0,a.tZ)("span",{style:{fontSize:24}},I==null?void 0:I.title),(0,a.tZ)(t.Tag,{style:{display:"block"}},w.length))),(0,a.tZ)(t.Row,{gutter:[24,24]},w.map(function(Z){var V=Z.link.startsWith("http"),$="".concat(Z.link);V||($+=ue);var J=V?"a":E.rU;return(0,a.tZ)(t.Col,{xs:24,sm:12,lg:8,xl:6,key:Z==null?void 0:Z.title},(0,a.tZ)(J,{to:$,href:$,onClick:function(){return R($)}},(0,a.tZ)(t.Card,{bodyStyle:{backgroundRepeat:"no-repeat",backgroundPosition:"bottom right",backgroundImage:"url(".concat((Z==null?void 0:Z.tag)||"",")")},size:"small",css:p.componentsOverviewCard,title:(0,a.tZ)("div",{css:p.componentsOverviewTitle},Z==null?void 0:Z.title," ",Z.subtitle)},(0,a.tZ)("div",{css:p.componentsOverviewImg},(0,a.tZ)("img",{src:T.includes("dark")&&Z.coverDark?Z.coverDark:Z.cover,alt:Z==null?void 0:Z.title})))))}))):null})))},A=(0,n.memo)(m)},5388:function(N,S,e){var x=e(97857),_=e.n(x),f=e(5574),P=e.n(f),n=e(67294),E=e(94065),a=e(13669),o=e(39020),i=e(89035),t=e(2659),b=e(37993),h=e(94184),y=e.n(h),C=e(24229),v=e(96923),u=function(r){var D=r.items,c=(0,n.useContext)(C.Z),s=c.showDebug,R=c.setShowDebug,B=(0,n.useState)(!1),O=P()(B,2),m=O[0],A=O[1],d=y()("code-box-expand-trigger",{"code-box-expand-trigger-active":m}),p=function(){R==null||R(!s)},M=function(){A(!m)},T=n.useMemo(function(){return D.reduce(function(g,L){var U=L.previewerProps,F=U.debug;return F&&!s?g:g.concat(_()(_()({},L),{},{previewerProps:_()(_()({},U),{},{expand:m,debug:!1,originDebug:F})}))},[])},[m,s]);return(0,v.tZ)("div",{className:"demo-wrapper"},(0,v.tZ)("span",{className:"all-code-box-controls"},(0,v.tZ)(a.Tooltip,{title:(0,v.tZ)(E._H,{id:"app.component.examples.".concat(m?"collapse":"expand")})},m?(0,v.tZ)(o.Z,{className:d,onClick:M}):(0,v.tZ)(i.Z,{className:d,onClick:M})),(0,v.tZ)(a.Tooltip,{title:(0,v.tZ)(E._H,{id:"app.component.examples.".concat(s?"hide":"visible")})},s?(0,v.tZ)(t.Z,{className:d,onClick:p}):(0,v.tZ)(b.Z,{className:d,onClick:p}))),(0,v.tZ)(E.Z1,{items:T,key:"".concat(m).concat(s)}))};S.Z=u},49545:function(N,S,e){e.d(S,{Z:function(){return _e}});var x=e(97857),_=e.n(x),f=e(5574),P=e.n(f),n=e(67294),E=e(78005),a=e(16165),o=e(13669),i=e(94065),t=e(23279),b=e.n(t),h=e(9783),y=e.n(h),C=e(74855),v=e.n(C),u=e(94184),l=e.n(u),r=e(96923),D=E,c=function(k){var K=k.name,ne=k.isNew,ae=k.justCopied,I=k.onCopied,j=k.theme,w=l()(y()({copied:ae===K},j,!!j)),Z=function($,J){J?I(K,$):o.message.error("Copy icon name failed, please try again.")};return(0,r.tZ)(v(),{text:"<".concat(K," />"),onCopy:Z},(0,r.tZ)("li",{className:w},n.createElement(D[K]),(0,r.tZ)("span",{className:"anticon-class"},(0,r.tZ)(o.Badge,{dot:ne},K))))},s=c,R=function(k){var K=k.icons,ne=k.title,ae=k.newIcons,I=k.theme,j=(0,i.YB)(),w=n.useState(null),Z=P()(w,2),V=Z[0],$=Z[1],J=n.useRef(null),ve=n.useCallback(function(q,fe){o.message.success((0,r.tZ)("span",null,(0,r.tZ)("code",{className:"copied-code"},fe)," copied \u{1F389}")),$(q),J.current=setTimeout(function(){$(null)},2e3)},[]);return n.useEffect(function(){return function(){J.current&&clearTimeout(J.current)}},[]),(0,r.tZ)("div",null,(0,r.tZ)("h3",null,j.formatMessage({id:"app.docs.components.icon.category.".concat(ne)})),(0,r.tZ)("ul",{className:"anticons-list"},K.map(function(q){return(0,r.tZ)(s,{key:q,name:q,theme:I,isNew:ae.includes(q),justCopied:V,onCopied:ve})})))},B=R,O=e(67333),m=e.n(O),A=function(k){var K="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z";return(0,r.tZ)("svg",m()({},k,{viewBox:"0 0 1024 1024"}),(0,r.tZ)("path",{d:K}))},d=function(k){var K="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v680c0 6.6-5.4 12-12 12z";return(0,r.tZ)("svg",m()({},k,{viewBox:"0 0 1024 1024"}),(0,r.tZ)("path",{d:K}))},p=function(k){var K="M16 512c0 273.932 222.066 496 496 496s496-222.068 496-496S785.932 16 512 16 16 238.066 16 512z m496 368V144c203.41 0 368 164.622 368 368 0 203.41-164.622 368-368 368z";return(0,r.tZ)("svg",m()({},k,{viewBox:"0 0 1024 1024"}),(0,r.tZ)("path",{d:K}))},M=e(62816),T=Object.keys(M).map(function(W){return W.replace(/(Outlined|Filled|TwoTone)$/,"")}).filter(function(W,k,K){return K.indexOf(W)===k}),g=["StepBackward","StepForward","FastBackward","FastForward","Shrink","ArrowsAlt","Down","Up","Left","Right","CaretUp","CaretDown","CaretLeft","CaretRight","UpCircle","DownCircle","LeftCircle","RightCircle","DoubleRight","DoubleLeft","VerticalLeft","VerticalRight","VerticalAlignTop","VerticalAlignMiddle","VerticalAlignBottom","Forward","Backward","Rollback","Enter","Retweet","Swap","SwapLeft","SwapRight","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PlayCircle","UpSquare","DownSquare","LeftSquare","RightSquare","Login","Logout","MenuFold","MenuUnfold","BorderBottom","BorderHorizontal","BorderInner","BorderOuter","BorderLeft","BorderRight","BorderTop","BorderVerticle","PicCenter","PicLeft","PicRight","RadiusBottomleft","RadiusBottomright","RadiusUpleft","RadiusUpright","Fullscreen","FullscreenExit"],L=["Question","QuestionCircle","Plus","PlusCircle","Pause","PauseCircle","Minus","MinusCircle","PlusSquare","MinusSquare","Info","InfoCircle","Exclamation","ExclamationCircle","Close","CloseCircle","CloseSquare","Check","CheckCircle","CheckSquare","ClockCircle","Warning","IssuesClose","Stop"],U=["Edit","Form","Copy","Scissor","Delete","Snippets","Diff","Highlight","AlignCenter","AlignLeft","AlignRight","BgColors","Bold","Italic","Underline","Strikethrough","Redo","Undo","ZoomIn","ZoomOut","FontColors","FontSize","LineHeight","Dash","SmallDash","SortAscending","SortDescending","Drag","OrderedList","UnorderedList","RadiusSetting","ColumnWidth","ColumnHeight"],F=["AreaChart","PieChart","BarChart","DotChart","LineChart","RadarChart","HeatMap","Fall","Rise","Stock","BoxPlot","Fund","Sliders"],G=["Android","Apple","Windows","Ie","Chrome","Github","Aliwangwang","Dingding","WeiboSquare","WeiboCircle","TaobaoCircle","Html5","Weibo","Twitter","Wechat","Youtube","AlipayCircle","Taobao","Skype","Qq","MediumWorkmark","Gitlab","Medium","Linkedin","GooglePlus","Dropbox","Facebook","Codepen","CodeSandbox","CodeSandboxCircle","Amazon","Google","CodepenCircle","Alipay","AntDesign","AntCloud","Aliyun","Zhihu","Slack","SlackSquare","Behance","BehanceSquare","Dribbble","DribbbleSquare","Instagram","Yuque","Alibaba","Yahoo","Reddit","Sketch"],de=[].concat(g,L,U,F,G),te=T.filter(function(W){return!de.includes(W)}),Q={direction:g,suggestion:L,editor:U,data:F,logo:G,other:te},oe=null,z=e(52180);function H(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var Y;(function(W){W.Filled="Filled",W.Outlined="Outlined",W.TwoTone="TwoTone"})(Y||(Y={}));var ue=E,se={name:"1lyd58t",styles:"display:flex;transition:all 0.3s;justify-content:space-between"},ce=function(){return{iconSearchAffix:se}},me=function(k){return[{value:Y.Outlined,icon:(0,r.tZ)(a.Z,{component:d}),label:k.formatMessage({id:"app.docs.components.icon.outlined"})},{value:Y.Filled,icon:(0,r.tZ)(a.Z,{component:A}),label:k.formatMessage({id:"app.docs.components.icon.filled"})},{value:Y.TwoTone,icon:(0,r.tZ)(a.Z,{component:p}),label:k.formatMessage({id:"app.docs.components.icon.two-tone"})}]},pe=function(){var k=(0,i.YB)(),K=ce(),ne=K.iconSearchAffix,ae=(0,n.useState)({searchKey:"",theme:Y.Outlined}),I=P()(ae,2),j=I[0],w=I[1],Z=[],V=b()(function(le){w(function(ie){return _()(_()({},ie),{},{searchKey:le.target.value})})},300),$=(0,n.useCallback)(function(le){w(function(ie){return _()(_()({},ie),{},{theme:le})})},[]),J=(0,n.useMemo)(function(){var le=j.searchKey,ie=le===void 0?"":le,Ce=j.theme,Ee=Object.keys(Q).map(function(re){var X=Q[re];if(ie){var ge=ie.replace(new RegExp("^<([a-zA-Z]*)\\s/>$","gi"),function(ee,Me){return Me}).replace(/(Filled|Outlined|TwoTone)$/,"").toLowerCase();X=X.filter(function(ee){return ee.toLowerCase().includes(ge)})}return X=X.filter(function(ee){return ee!=="CopyrightCircle"}),{category:re,icons:X.map(function(ee){return ee+Ce}).filter(function(ee){return ue[ee]})}}).filter(function(re){var X=re.icons;return!!X.length}).map(function(re){var X=re.category,ge=re.icons;return(0,r.tZ)(B,{key:X,title:X,theme:Ce,icons:ge,newIcons:Z})});return Ee.length?Ee:(0,r.tZ)(o.Empty,{style:{margin:"2em 0"}})},[j.searchKey,j.theme]),ve=(0,n.useState)(!1),q=P()(ve,2),fe=q[0],be=q[1],ye=(0,z.Z)(),he=ye.token,Pe=he.borderRadius,De=he.colorBgContainer,Oe={boxShadow:"rgba(50, 50, 93, 0.25) 0 6px 12px -2px, rgba(0, 0, 0, 0.3) 0 3px 7px -3px",padding:8,margin:-8,borderRadius:Pe,backgroundColor:De};return(0,r.tZ)("div",{className:"markdown"},(0,r.tZ)(o.Affix,{offsetTop:24,onChange:be},(0,r.tZ)("div",{css:ne,style:fe?Oe:{}},(0,r.tZ)(o.Segmented,{size:"large",value:j.theme,options:me(k),onChange:$}),(0,r.tZ)(o.Input.Search,{placeholder:k.formatMessage({id:"app.docs.components.icon.search.placeholder"}),style:{flex:1,marginInlineStart:16},allowClear:!0,autoFocus:!0,size:"large",onChange:V}))),J)},_e=pe},6965:function(N,S,e){var x=e(67333),_=e.n(x),f=e(97857),P=e.n(f),n=e(67294),E=e(94184),a=e.n(E),o=e(13669),i=e(45598),t=e(96923);function b(l){return/\bgood\b/i.test(l)}function h(l){return/\bbad\b/i.test(l)}function y(l){return/\binline\b/i.test(l)}function C(l){return l.isGood||l.isBad}function v(l){return C(l)||l.inline}var u=function(r){var D=r.children,c=(0,i.default)(D).filter(function(d){return d.type==="img"}),s=c.map(function(d){var p=d.props,M=p.alt,T=p.description,g=p.src,L=p.className;return{className:L,alt:M,description:T,src:g,isGood:b(L),isBad:h(L),inline:y(L)}}),R=s.map(function(d,p){var M=P()({},d);return delete M.description,delete M.isGood,delete M.isBad,(0,t.tZ)("div",{key:p},(0,t.tZ)("div",{className:"image-modal-container"},(0,t.tZ)("img",_()({},M,{src:d.src,alt:d.alt}))))}),B=c.length===2&&s.every(v)||c.length>=2&&s.every(C),O=B?{width:"".concat((100/c.length).toFixed(3),"%")}:{},m=c.length>1&&!B,A=a()({"preview-image-boxes":!0,clearfix:!0,"preview-image-boxes-compare":B,"preview-image-boxes-with-carousel":m});return(0,t.tZ)("div",{className:A},R.map(function(d,p){if(!B&&p!==0)return null;var M=s[p],T=a()("preview-image-wrapper",{good:M.isGood,bad:M.isBad});return(0,t.tZ)("div",{className:"preview-image-box",style:O,key:p},(0,t.tZ)("div",{className:T},(0,t.tZ)(o.Image,{className:M.className,src:M.src,alt:M.alt})),(0,t.tZ)("div",{className:"preview-image-title"},M.alt),(0,t.tZ)("div",{className:"preview-image-description",dangerouslySetInnerHTML:{__html:M.description}}))}))};S.Z=u},49706:function(N,S,e){var x=e(63379);S.Z=x.Z},95127:function(N,S,e){var x=e(19632),_=e.n(x),f=e(5574),P=e.n(f),n=e(67294),E=e(27484),a=e.n(E),o=e(94065),i=e(13669),t=e(96923),b=e(33494),h=e(52180),y=function(){var u=(0,h.Z)(),l=u.token,r=l.antCls;return{articles:(0,t.iv)("h4{margin:40px 0 24px;font-weight:500;font-size:20px;}",r,"-skeleton{h3{margin:0;}ul li{display:block;margin-left:0;}}",r,"-tabs-nav::before{display:none;}table{width:100%;table-layout:fixed;td{width:50%;vertical-align:top;}}",""),articleList:(0,t.iv)("li{margin:1em 0;padding:0;font-size:14px;list-style:none;}",r,"-avatar>img{max-width:unset;}","")}},C=function(u){var l=u.name,r=u.data,D=r===void 0?[]:r,c=u.authors,s=c===void 0?[]:c,R=y(),B=R.articleList;return(0,t.tZ)("td",null,(0,t.tZ)("h4",null,l),(0,t.tZ)("ul",{css:B},D.length===0?(0,t.tZ)(i.Empty,{image:i.Empty.PRESENTED_IMAGE_SIMPLE}):D.map(function(O,m){var A=s.find(function(d){return d.name===O.author});return(0,t.tZ)("li",{key:m},(0,t.tZ)("a",{href:A==null?void 0:A.href,target:"_blank",rel:"noreferrer"},(0,t.tZ)(i.Avatar,{size:"small",src:A==null?void 0:A.avatar})),(0,t.tZ)(i.Divider,{type:"vertical"}),(0,t.tZ)("a",{href:O.href,target:"_blank",rel:"noreferrer"},O==null?void 0:O.title))})))};S.Z=function(){var v=(0,o.YB)(),u=v.locale,l=u==="zh-CN",r=(0,b.WF)(),D=P()(r,2),c=D[0],s=c.articles,R=s===void 0?{cn:[],en:[]}:s,B=c.authors,O=B===void 0?[]:B,m=D[1],A=y(),d=n.useMemo(function(){var T,g={};return(T=R[l?"cn":"en"])===null||T===void 0||T.forEach(function(L){var U=a()(L.date).year();g[U]=g[U]||{},g[U][L.type]=[].concat(_()(g[U][L.type]||[]),[L])}),g},[R]),p;if(m)p=(0,t.tZ)(i.Skeleton,{active:!0});else{var M=Object.keys(d).sort(function(T,g){return Number(g)-Number(T)});p=M.length?(0,t.tZ)(i.Tabs,null,M.map(function(T){return(0,t.tZ)(i.Tabs.TabPane,{tab:"".concat(T).concat(l?" \u5E74":""),key:T},(0,t.tZ)("table",null,(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)(C,{name:(0,t.tZ)(o._H,{id:"app.docs.resource.design"}),data:d[T].design,authors:O}),(0,t.tZ)(C,{name:(0,t.tZ)(o._H,{id:"app.docs.resource.develop"}),data:d[T].develop,authors:O})))))})):null}return(0,t.tZ)("div",{id:"articles",css:A.articles},p)}},74418:function(N,S,e){var x=e(5574),_=e.n(x),f=e(67294),P=e(13669),n=e(96923),E=e(11475),a=e(52180),o=e(2559);function i(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var t={name:"1rmwczg",styles:"margin:0 20px 20px;color:#697b8c;font-size:14px;line-height:22px"},b={name:"6nm2f1",styles:"margin:16px 20px 8px;color:#0d1a26;font-size:20px;line-height:28px"},h={name:"1i5lwbl",styles:"position:absolute;top:8px;right:8px;padding:4px 8px;color:#fff;font-size:12px;line-height:1;background:rgba(0, 0, 0, 0.65);border-radius:1px;box-shadow:0 0 2px rgba(255, 255, 255, 0.2);display:inline-flex;column-gap:4px"},y={name:"12391av",styles:"width:calc(100% + 2px);max-width:none;height:184px;margin:-1px -1px 0;object-fit:cover"},C=function(){var D=(0,a.Z)(),c=D.token,s=c.boxShadowSecondary;return{card:(0,n.iv)("position:relative;display:flex;flex-direction:column;height:100%;color:inherit;list-style:none;border:1px solid #e6e6e6;border-radius:2px;cursor:pointer;transition:box-shadow 0.3s;&:hover{box-shadow:",s,";}",""),image:y,badge:h,title:b,description:t}},v={cn:{official:"\u5B98\u65B9",thirdPart:"\u975E\u5B98\u65B9",thirdPartDesc:"\u975E\u5B98\u65B9\u4EA7\u54C1\uFF0C\u8BF7\u81EA\u884C\u786E\u8BA4\u53EF\u7528\u6027"},en:{official:"Official",thirdPart:"Third Part",thirdPartDesc:"Unofficial product, please take care confirm availability"}},u=function(D){var c=D.resource,s=C(),R=(0,o.Z)(v),B=_()(R,1),O=B[0],m=c.title,A=c.description,d=c.cover,p=c.src,M=c.official,T=null,g=m,L=m.match(/(.*)(#[\dA-Fa-f]{6})/);return L&&(g=L[1].trim(),T=L[2]),(0,n.tZ)(P.Col,{xs:24,sm:12,md:8,lg:6,style:{padding:12}},(0,n.tZ)("a",{css:s.card,target:"_blank",href:p,rel:"noreferrer"},(0,n.tZ)("img",{css:s.image,src:d,alt:g,style:T?{backgroundColor:T}:{}}),M?(0,n.tZ)("div",{css:s.badge},O.official):(0,n.tZ)(P.Tooltip,{title:O.thirdPartDesc},(0,n.tZ)("div",{css:s.badge},(0,n.tZ)(E.Z,null),O.thirdPart)),(0,n.tZ)("p",{css:s==null?void 0:s.title},g),(0,n.tZ)("p",{css:s.description},A)))},l=function(D){var c=D.resources;return(0,n.tZ)(P.Row,{style:{margin:"-12px -12px 0 -12px"}},c.map(function(s){return(0,n.tZ)(u,{resource:s,key:s==null?void 0:s.title})}))};S.Z=l},73024:function(N,S,e){var x=e(5574),_=e.n(x),f=e(67294),P=e(27693),n=e(97501),E=e(13669),a=e(96923),o=e(2559),i=e(52180),t=e(63942),b=(0,n.Z)(),h={cn:{token:"Token \u540D\u79F0",description:"\u63CF\u8FF0",type:"\u7C7B\u578B",value:"\u9ED8\u8BA4\u503C"},en:{token:"Token Name",description:"Description",type:"Type",value:"Default Value"}},y=function(){var u=(0,i.Z)(),l=u.token;return{codeSpan:(0,a.iv)("margin:0 1px;padding:0.2em 0.4em;font-size:0.9em;background:",l.siteMarkdownCodeBg,";border:1px solid ",l.colorSplit,";border-radius:3px;font-family:monospace;","")}},C=function(u){var l=u.type,r=y(),D=(0,o.Z)(h),c=_()(D,2),s=c[0],R=c[1],B=[{title:s.token,key:"name",dataIndex:"name"},{title:s.description,key:"desc",dataIndex:"desc"},{title:s.type,key:"type",dataIndex:"type",render:function(A,d){return(0,a.tZ)("span",{css:r.codeSpan},d.type)}},{title:s.value,key:"value",render:function(A,d){var p=typeof d.value=="string"&&(d.value.startsWith("#")||d.value.startsWith("rgb"));return p?(0,a.tZ)(t.Z,{color:d.value},d.value):typeof d.value!="string"?JSON.stringify(d.value):d.value}}],O=(0,f.useMemo)(function(){return Object.entries(P).filter(function(m){var A=_()(m,2),d=A[1];return d.source===l}).map(function(m){var A=_()(m,2),d=A[0],p=A[1];return{name:d,desc:R==="cn"?p.desc:p.descEn,type:p.type,value:b[d]}})},[l,R]);return(0,a.tZ)(E.Table,{dataSource:O,columns:B,pagination:!1,bordered:!0})};S.Z=C},37472:function(N,S,e){e.d(S,{Z:function(){return C}});var x=e(67294),_=e(16397),f=e(44908),P=e.n(f),n=e(5574),E=e.n(n),a=e(74855),o=e.n(a),i=e(13669),t=e(96923),b=function(u){var l=u.color,r=u.index,D=u.dark,c=(0,x.useMemo)(function(){var s={default:["#fff","unset"],dark:["#314659","#fff"]},R=D?s.dark:s.default,B=E()(R,2),O=B[0],m=B[1];return{background:l,color:r>5?O:m,fontWeight:r===6?"bold":"normal"}},[l,D,r]);return(0,t.tZ)(o(),{text:l,onCopy:function(){return i.message.success("Copied: ".concat(l))}},(0,t.tZ)("div",{className:"main-color-item",style:c},"color-",r,(0,t.tZ)("span",{className:"main-color-value"},l.toLowerCase())))},h=b,y=function(u){var l=u.color,r=u.dark,D=u.backgroundColor,c=(0,_.generate)(l,r?{theme:"dark",backgroundColor:D}:{});return P()(c).map(function(s,R){return(0,t.tZ)(h,{color:s,index:R+1,dark:r,key:s})})},C=y},34081:function(N,S,e){var x=e(5574),_=e.n(x),f=e(67294),P=e(713),n=e(96923),E=function(){},a=function(i){var t=i.small,b=i.position,h=b===void 0?"bottom":b,y=i.presetColors,C=i.onChange,v=C===void 0?E:C,u=i.onChangeComplete,l=u===void 0?E:u,r=(0,f.useState)(i.color),D=_()(r,2),c=D[0],s=D[1],R=(0,f.useState)(!1),B=_()(R,2),O=B[0],m=B[1],A=function(){m(function(G){return!G})},d=function(){m(!1)},p=function(G){s(G.hex),v(G.hex,G)},M=function(G){s(G.hex),l(G.hex)},T=t?80:120,g={color:{width:"".concat(T,"px"),height:t?"16px":"24px",borderRadius:"2px",background:c},swatch:{padding:"4px",background:"#fff",borderRadius:"2px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:10},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},wrapper:{position:"inherit",zIndex:100}};h==="top"&&(g.wrapper.transform="translate(calc(-100% + ".concat(T+8,"px), -100%)"),g.wrapper.paddingBottom=8);var L=(0,n.tZ)("div",{style:g.swatch,onClick:A},(0,n.tZ)("div",{style:g.color})),U=O?(0,n.tZ)("div",{style:g.popover},(0,n.tZ)("div",{style:g.cover,onClick:d}),(0,n.tZ)("div",{style:g.wrapper},(0,n.tZ)(P.xS,{presetColors:y,color:c,onChange:p,onChangeComplete:M}))):null;return h==="top"?(0,n.tZ)("div",null,U,L):(0,n.tZ)("div",null,L,U)};S.Z=a},63379:function(N,S,e){var x=e(5574),_=e.n(x),f=e(67294),P=e(13669),n=e(74855),E=e.n(n),a=e(16397),o=e(96923),i=function(h){var y=h.match(/\d+/g),C=parseInt(y[0],10).toString(16),v=parseInt(y[1],10).toString(16),u=parseInt(y[2],10).toString(16);return C=C.length===1?"0".concat(C):C,v=v.length===1?"0".concat(v):v,u=u.length===1?"0".concat(u):u,"#".concat(C).concat(v).concat(u)},t=function(h){var y=h.showTitle,C=h.direction,v=h.dark,u=h.color,l=u===void 0?{name:"gray",count:13}:u,r=l.name,D=l.count,c=D===void 0?10:D,s=l.description,R=l.english,B=l.chinese,O=f.useState({}),m=_()(O,2),A=m[0],d=m[1],p=f.useRef({});(0,f.useEffect)(function(){var oe={};Object.keys(p.current||{}).forEach(function(z){var H=getComputedStyle(p.current[z])["background-color"];H.includes("rgba")?oe[z]=H:oe[z]=i(H)}),d(oe)},[]);for(var M=C==="horizontal"?"color-palette-horizontal":"color-palette",T=[],g="".concat(R," / ").concat(B),L={dark:["#fff","unset"],default:["rgba(0,0,0,0.85)","#fff"]},U=v?L.dark:L.default,F=_()(U,2),G=F[0],de=F[1],te=function(z){var H="".concat(r,"-").concat(z),Y=v?a.presetDarkPalettes[r][z-1]:"";T.push((0,o.tZ)(E(),{text:A[H],onCopy:function(){return P.message.success("@".concat(H," copied: ").concat(A[H]))},key:H},(0,o.tZ)("div",{key:z,ref:function(se){p.current["".concat(r,"-").concat(z)]=se},className:"main-color-item palette-".concat(r,"-").concat(z),style:{color:(r==="yellow"?z>6:z>5)?de:G,fontWeight:z===6?"bold":"normal",backgroundColor:Y},title:"click to copy color"},(0,o.tZ)("span",{className:"main-color-text"},H),(0,o.tZ)("span",{className:"main-color-value"},A[H]))))},Q=1;Q<=c;Q+=1)te(Q);return(0,o.tZ)("div",{className:M},y&&(0,o.tZ)("div",{className:"color-title"},g,(0,o.tZ)("span",{className:"color-description"},s)),(0,o.tZ)("div",{className:"main-color"},T))};S.Z=t},24229:function(N,S,e){var x=e(67294),_=(0,x.createContext)({});S.Z=_}}]);
