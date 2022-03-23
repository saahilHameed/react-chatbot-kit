(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Chatbot:()=>A,createChatBotMessage:()=>i,createClientMessage:()=>u,createCustomMessage:()=>l,default:()=>B,useChatbot:()=>T});const r=require("react");var a=e.n(r);const n=require("react-conditionally-render");var o=e.n(n),s=function(){return s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},c=function(e,t){return{message:e,type:t,id:Math.round(Date.now()*Math.random())}},i=function(e,t){return s(s(s({},c(e,"bot")),t),{loading:!0})},l=function(e,t,r){return s(s({},c(e,t)),r)},u=function(e,t){return s(s({},c(e,"user")),t)},m=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(e)return e.apply(void 0,t)};const d=function(e){var t=e.message,r=e.customComponents;return a().createElement("div",{className:"react-chatbot-kit-user-chat-message-container"},a().createElement(o(),{condition:!!r.userChatMessage,show:m(r.userChatMessage,{message:t}),elseShow:a().createElement("div",{className:"react-chatbot-kit-user-chat-message"},t,a().createElement("div",{className:"react-chatbot-kit-user-chat-message-arrow"}))}),a().createElement(o(),{condition:!!r.userAvatar,show:m(r.userAvatar),elseShow:a().createElement("div",{className:"react-chatbot-kit-user-avatar"},a().createElement("div",{className:"react-chatbot-kit-user-avatar-container"},a().createElement("p",{className:"react-chatbot-kit-chat-bot-avatar-letter"},"U")))}))},g=function(){return a().createElement("div",{className:"react-chatbot-kit-chat-bot-avatar"},a().createElement("div",{className:"react-chatbot-kit-chat-bot-avatar-container"},a().createElement("p",{className:"react-chatbot-kit-chat-bot-avatar-letter"},"!")))},f=function(){return a().createElement("div",{className:"chatbot-loader-container"},a().createElement("svg",{id:"dots",width:"50px",height:"21px",viewBox:"0 0 132 58",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a().createElement("g",{stroke:"none",fill:"none"},a().createElement("g",{id:"chatbot-loader",fill:"#fff"},a().createElement("circle",{id:"chatbot-loader-dot1",cx:"25",cy:"30",r:"13"}),a().createElement("circle",{id:"chatbot-loader-dot2",cx:"65",cy:"30",r:"13"}),a().createElement("circle",{id:"chatbot-loader-dot3",cx:"105",cy:"30",r:"13"})))))};var h=function(){return h=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},h.apply(this,arguments)};const p=function(e){var t=e.message,n=e.withAvatar,s=void 0===n||n,c=e.loading,i=e.messages,l=e.customComponents,u=e.setState,d=e.customStyles,p=e.delay,v=e.id,y=(0,r.useState)(!1),b=y[0],E=y[1];(0,r.useEffect)((function(){var e;return function(t,r){var a=750;p&&(a+=p),e=setTimeout((function(){var e=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}([],t,!0).find((function(e){return e.id===v}));e&&(e.loading=!1,e.delay=void 0,r((function(t){var r=t.messages,a=r.findIndex((function(e){return e.id===v}));return r[a]=e,h(h({},t),{messages:r})})))}),a)}(i,u),function(){clearTimeout(e)}}),[p,v]),(0,r.useEffect)((function(){p?setTimeout((function(){return E(!0)}),p):E(!0)}),[p]);var w={backgroundColor:""},P={borderRightColor:""};return d&&(w.backgroundColor=d.backgroundColor,P.borderRightColor=d.backgroundColor),a().createElement(o(),{condition:b,show:a().createElement("div",{className:"react-chatbot-kit-chat-bot-message-container"},a().createElement(o(),{condition:s,show:a().createElement(o(),{condition:!!(null==l?void 0:l.botAvatar),show:m(null==l?void 0:l.botAvatar),elseShow:a().createElement(g,null)})}),a().createElement(o(),{condition:!!(null==l?void 0:l.botChatMessage),show:m(null==l?void 0:l.botChatMessage,{message:t,loader:a().createElement(f,null)}),elseShow:a().createElement("div",{className:"react-chatbot-kit-chat-bot-message",style:w},a().createElement(o(),{condition:c,show:a().createElement(f,null),elseShow:a().createElement("span",null,t)}),a().createElement(o(),{condition:s,show:a().createElement("div",{className:"react-chatbot-kit-chat-bot-message-arrow",style:P})}))}))})},v=require("react-icons/im");function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},y.apply(this,arguments)}const b=({styles:e={},...t})=>a().createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),a().createElement("path",{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}));var E=function(){return E=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},E.apply(this,arguments)},w=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const P=function(e){var t=e.state,n=e.setState,s=e.widgetRegistry,i=e.messageParser,l=e.parse,u=e.customComponents,m=e.actionProvider,g=e.botName,f=e.customStyles,h=e.headerText,y=e.customMessages,P=e.placeholderText,S=e.validator,M=e.setMessageContainerRef,k=e.disableScrollToBottom,O=e.messageHistory,C=e.actions,N=t.messages,x=(0,r.useRef)(null),T=(0,r.useState)(""),j=T[0],A=T[1],B=function(){setTimeout((function(){var e;x.current&&(x.current.scrollTop=null===(e=null==x?void 0:x.current)||void 0===e?void 0:e.scrollHeight)}),50)};(0,r.useEffect)((function(){k||B()})),(0,r.useEffect)((function(){M(x)}),[x.current]);var I=function(){n((function(e){return E(E({},e),{messages:w(w([],e.messages,!0),[c(j,"user")],!1)})})),B(),A("")},H={backgroundColor:""};f&&f.chatButton&&(H.backgroundColor=f.chatButton.backgroundColor);var R=g+"-Your E-Assistant";h&&(R=h);var W="Write your message here";return P&&(W=P),a().createElement("div",{className:"react-chatbot-kit-chat-container"},a().createElement("div",{className:"react-chatbot-kit-chat-inner-container"},a().createElement(o(),{condition:!!u.header,show:u.header&&u.header(m),elseShow:a().createElement("div",{className:"react-chatbot-kit-chat-header"},R)}),a().createElement("div",{className:"react-chatbot-kit-chat-message-container",ref:x},a().createElement(o(),{condition:"string"==typeof O&&Boolean(O),show:a().createElement("div",{dangerouslySetInnerHTML:{__html:O}})}),N.map((function(e,r){return"bot"===e.type?a().createElement(a().Fragment,{key:e.id},function(e,r){var c;c=e.withAvatar?e.withAvatar:function(e,t){if(0===t)return!0;var r=e[t-1];return!("bot"===r.type&&!r.widget)}(N,r);var i=E(E({},e),{setState:n,state:t,customComponents:u,widgetRegistry:s,messages:N,actions:C});if(e.widget){var l=s.getWidget(i.widget,E(E({},t),{scrollIntoView:B,payload:e.payload,actions:C}));return a().createElement(a().Fragment,null,a().createElement(p,E({customStyles:f.botMessageBox,withAvatar:c},i,{key:e.id})),a().createElement(o(),{condition:!i.loading,show:l||null}))}return a().createElement(p,E({customStyles:f.botMessageBox,key:e.id,withAvatar:c},i,{customComponents:u,messages:N,setState:n}))}(e,r)):"user"===e.type?a().createElement(a().Fragment,{key:e.id},function(e){var r=s.getWidget(e.widget,E(E({},t),{scrollIntoView:B,payload:e.payload,actions:C}));return a().createElement(a().Fragment,null,a().createElement(d,{message:e.message,key:e.id,customComponents:u}),r||null)}(e)):function(e,t){return!!t[e.type]}(e,y)?a().createElement(a().Fragment,{key:e.id},function(e){var r=y[e.type],o={setState:n,state:t,scrollIntoView:B,actionProvider:m,payload:e.payload,actions:C};if(e.widget){var c=s.getWidget(e.widget,E(E({},t),{scrollIntoView:B,payload:e.payload,actions:C}));return a().createElement(a().Fragment,null,r(o),c||null)}return r(o)}(e)):void 0})),a().createElement("div",{style:{paddingBottom:"15px"}})),a().createElement("div",{className:"react-chatbot-kit-chat-input-container"},a().createElement("form",{className:"react-chatbot-kit-chat-input-form",onSubmit:function(e){if(e.preventDefault(),S&&"function"==typeof S){if(S(j)){if(I(),l)return l(j);i.parse(j)}}else{if(I(),l)return l(j);i.parse(j)}}},a().createElement("div",{className:"react-chatbot-kit-main-menu"},a().createElement(v.ImMenu,null)),a().createElement("input",{className:"react-chatbot-kit-chat-input",placeholder:W,value:j,onChange:function(e){return A(e.target.value)}}),a().createElement("button",{className:"react-chatbot-kit-chat-btn-send",style:H},a().createElement(b,{className:"react-chatbot-kit-chat-btn-send-icon"}))))))},S=function(e){var t=e.message;return a().createElement("div",{className:"react-chatbot-kit-error"},a().createElement("h1",{className:"react-chatbot-kit-error-header"},"Ooops. Something is missing."),a().createElement("div",{className:"react-chatbot-kit-error-container"},a().createElement(p,{message:t,withAvatar:!0,loading:!1,id:1,customStyles:{backgroundColor:""},messages:[]})),a().createElement("a",{href:"https://fredrikoseberg.github.io/react-chatbot-kit-docs/",rel:"noopener norefferer",target:"_blank",className:"react-chatbot-kit-error-docs"},"View the docs"))};var M=function(e){return e.widgets?e.widgets:[]},k=function(e){try{new e}catch(e){return!1}return!0},O=function(){return O=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},O.apply(this,arguments)};const C=function(e,t){var r=this;this.addWidget=function(e,t){var a=e.widgetName,n=e.widgetFunc,o=e.mapStateToProps,s=e.props;r[a]={widget:n,props:s,mapStateToProps:o,parentProps:O({},t)}},this.getWidget=function(e,t){var a=r[e];if(a){var n,o=O(O(O(O({scrollIntoView:t.scrollIntoView},a.parentProps),"object"==typeof(n=a.props)?n:{}),r.mapStateToProps(a.mapStateToProps,t)),{setState:r.setState,actionProvider:r.actionProvider||t.actions,actions:t.actions,state:t,payload:t.payload});return a.widget(o)||null}},this.mapStateToProps=function(e,t){if(e)return e.reduce((function(e,r){return e[r]=t[r],e}),{})},this.setState=e,this.actionProvider=t};var N=function(){return N=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},N.apply(this,arguments)},x=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const T=function(e){var t=e.config,n=e.actionProvider,o=e.messageParser,s=e.messageHistory,c=e.runInitialMessagesWithHistory,m=e.saveMessages,d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["config","actionProvider","messageParser","messageHistory","runInitialMessagesWithHistory","saveMessages"]),g="",f="";if(!t||!n||!o)return{configurationError:g="I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?"};var h=function(e,t){var r=[];return e.initialMessages||r.push("Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."),r}(t);if(h.length)return{invalidPropsError:f=h.reduce((function(e,t){return e+t}),"")};var p=(0,r.useState)({}),v=p[0],y=p[1],b=function(e){return e.state?e.state:{}}(t);s&&Array.isArray(s)?t.initialMessages=x([],s,!0):"string"==typeof s&&Boolean(s)&&(c||(t.initialMessages=[]));var E,w,P,S=a().useState(N({messages:x([],t.initialMessages,!0)},b)),O=S[0],T=S[1],j=a().useRef(O.messages),A=a().useRef();(0,r.useEffect)((function(){j.current=O.messages})),(0,r.useEffect)((function(){s&&Array.isArray(s)&&T((function(e){return N(N({},e),{messages:s})}))}),[]),(0,r.useEffect)((function(){return function(){var e;if(m&&"function"==typeof m){var t=null===(e=null==v?void 0:v.current)||void 0===e?void 0:e.innerHTML.toString();if(!v.current)return;m(j.current,t)}}}),[v.current]),(0,r.useEffect)((function(){A.current=O}),[O]);var B=n,I=o;return k(B)&&k(I)?(E=new n(i,T,u,A.current,l,d),w=new C(T,E),P=new o(E,A.current),M(t).forEach((function(e){return null==w?void 0:w.addWidget(e,d)}))):(E=n,P=o,w=new C(T,null),M(t).forEach((function(e){return null==w?void 0:w.addWidget(e,d)}))),{widgetRegistry:w,actionProv:E,messagePars:P,configurationError:g,invalidPropsError:f,state:O,setState:T,setMessageContainerRef:y,ActionProvider:B,MessageParser:I}};var j=function(){return j=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},j.apply(this,arguments)};const A=function(e){var t=e.actionProvider,r=e.messageParser,n=e.config,o=e.headerText,s=e.placeholderText,c=e.saveMessages,l=e.messageHistory,u=e.runInitialMessagesWithHistory,m=e.disableScrollToBottom,d=e.validator,g=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["actionProvider","messageParser","config","headerText","placeholderText","saveMessages","messageHistory","runInitialMessagesWithHistory","disableScrollToBottom","validator"]),f=T(j({config:n,actionProvider:t,messageParser:r,messageHistory:l,saveMessages:c,runInitialMessagesWithHistory:u},g)),h=f.configurationError,p=f.invalidPropsError,v=f.ActionProvider,y=f.MessageParser,b=f.widgetRegistry,E=f.actionProv,w=f.messagePars,M=f.state,O=f.setState,C=f.setMessageContainerRef;if(h)return a().createElement(S,{message:h});if(p.length)return a().createElement(S,{message:p});var N=function(e){return e.customStyles?e.customStyles:{}}(n),x=function(e){return e.customComponents?e.customComponents:{}}(n),A=function(e){return e.botName?e.botName:"Bot"}(n),B=function(e){return e.customMessages?e.customMessages:{}}(n);return k(v)&&k(y)?a().createElement(P,{state:M,setState:O,widgetRegistry:b,actionProvider:E,messageParser:w,customMessages:B,customComponents:j({},x),botName:A,customStyles:j({},N),headerText:o,placeholderText:s,setMessageContainerRef:C,validator:d,messageHistory:l,disableScrollToBottom:m}):a().createElement(v,{setState:O,createChatBotMessage:i},a().createElement(y,null,a().createElement(P,{state:M,setState:O,widgetRegistry:b,actionProvider:v,messageParser:y,customMessages:B,customComponents:j({},x),botName:A,customStyles:j({},N),headerText:o,placeholderText:s,setMessageContainerRef:C,validator:d,messageHistory:l,disableScrollToBottom:m})))},B=A;module.exports=t})();