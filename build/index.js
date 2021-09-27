(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Chatbot:()=>T,createChatBotMessage:()=>i,createClientMessage:()=>u,createCustomMessage:()=>l,default:()=>A,useChatbot:()=>j});const r=require("react");var a=e.n(r);const n=require("react-conditionally-render");var o=e.n(n),s=function(){return s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)},c=function(e,t){return{message:e,type:t,id:Math.round(Date.now()*Math.random())}},i=function(e,t){return s(s(s({},c(e,"bot")),t),{loading:!0})},l=function(e,t,r){return s(s({},c(e,t)),r)},u=function(e,t){return s(s({},c(e,"user")),t)},m=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(e)return e.apply(void 0,t)};function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},g.apply(this,arguments)}const d=({styles:e={},...t})=>a().createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),a().createElement("path",{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"})),f=function(e){var t=e.message,r=e.customComponents;return a().createElement("div",{className:"react-chatbot-kit-user-chat-message-container"},a().createElement(o(),{condition:!!r.userChatMessage,show:m(r.userChatMessage,{message:t}),elseShow:a().createElement("div",{className:"react-chatbot-kit-user-chat-message"},t,a().createElement("div",{className:"react-chatbot-kit-user-chat-message-arrow"}))}),a().createElement(o(),{condition:!!r.userAvatar,show:m(r.userAvatar),elseShow:a().createElement("div",{className:"react-chatbot-kit-user-avatar"},a().createElement("div",{className:"react-chatbot-kit-user-avatar-container"},a().createElement(d,{className:"react-chatbot-kit-user-avatar-icon"})))}))},h=function(){return a().createElement("div",{className:"react-chatbot-kit-chat-bot-avatar"},a().createElement("div",{className:"react-chatbot-kit-chat-bot-avatar-container"},a().createElement("p",{className:"react-chatbot-kit-chat-bot-avatar-letter"},"B")))},p=function(){return a().createElement("div",{className:"chatbot-loader-container"},a().createElement("svg",{id:"dots",width:"50px",height:"21px",viewBox:"0 0 132 58",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a().createElement("g",{stroke:"none",fill:"none"},a().createElement("g",{id:"chatbot-loader",fill:"#fff"},a().createElement("circle",{id:"chatbot-loader-dot1",cx:"25",cy:"30",r:"13"}),a().createElement("circle",{id:"chatbot-loader-dot2",cx:"65",cy:"30",r:"13"}),a().createElement("circle",{id:"chatbot-loader-dot3",cx:"105",cy:"30",r:"13"})))))};var v=function(){return v=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},v.apply(this,arguments)};const y=function(e){var t=e.message,n=e.withAvatar,s=void 0===n||n,c=e.loading,i=e.messages,l=e.customComponents,u=e.setState,g=e.customStyles,d=e.delay,f=e.id,y=(0,r.useState)(!1),b=y[0],w=y[1];(0,r.useEffect)((function(){!function(e,t){var r=750;d&&(r+=d),setTimeout((function(){var r=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}([],e,!0).find((function(e){return e.id===f}));r&&(r.loading=!1,r.delay=void 0,t((function(e){var t=e.messages,a=t.findIndex((function(e){return e.id===f}));return t[a]=r,v(v({},e),{messages:t})})))}),r)}(i,u)}),[d,f]),(0,r.useEffect)((function(){d?setTimeout((function(){return w(!0)}),d):w(!0)}),[d]);var E={backgroundColor:""},S={borderRightColor:""};return g&&(E.backgroundColor=g.backgroundColor,S.borderRightColor=g.backgroundColor),a().createElement(o(),{condition:b,show:a().createElement("div",{className:"react-chatbot-kit-chat-bot-message-container"},a().createElement(o(),{condition:s,show:a().createElement(o(),{condition:!!l.botAvatar,show:m(l.botAvatar),elseShow:a().createElement(h,null)})}),a().createElement(o(),{condition:!!l.botChatMessage,show:m(l.botChatMessage,{message:t,loader:a().createElement(p,null)}),elseShow:a().createElement("div",{className:"react-chatbot-kit-chat-bot-message",style:E},a().createElement(o(),{condition:c,show:a().createElement(p,null),elseShow:a().createElement("span",null,t)}),a().createElement(o(),{condition:s,show:a().createElement("div",{className:"react-chatbot-kit-chat-bot-message-arrow",style:S})}))}))})};function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},b.apply(this,arguments)}const w=({styles:e={},...t})=>a().createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},t),a().createElement("path",{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"}));var E=function(){return E=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},E.apply(this,arguments)},S=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const P=function(e){var t=e.state,n=e.setState,s=e.widgetRegistry,i=e.messageParser,l=e.customComponents,u=e.actionProvider,m=e.botName,g=e.customStyles,d=e.headerText,h=e.customMessages,p=e.placeholderText,v=e.validator,b=e.setMessageContainerRef,P=e.disableScrollToBottom,O=e.messageHistory,k=t.messages,M=(0,r.useRef)(null),C=(0,r.useState)(""),N=C[0],j=C[1],x=function(){setTimeout((function(){var e;M.current&&(M.current.scrollTop=null===(e=null==M?void 0:M.current)||void 0===e?void 0:e.scrollHeight)}),50)};(0,r.useEffect)((function(){P||x()})),(0,r.useEffect)((function(){b(M)}),[M.current]);var T=function(){n((function(e){return E(E({},e),{messages:S(S([],e.messages,!0),[c(N,"user")],!1)})})),x(),j("")},A={backgroundColor:""};g&&g.chatButton&&(A.backgroundColor=g.chatButton.backgroundColor);var B="Conversation with "+m;d&&(B=d);var H="Write your message here";return p&&(H=p),a().createElement("div",{className:"react-chatbot-kit-chat-container"},a().createElement("div",{className:"react-chatbot-kit-chat-inner-container"},a().createElement(o(),{condition:!!l.header,show:l.header&&l.header(u),elseShow:a().createElement("div",{className:"react-chatbot-kit-chat-header"},B)}),a().createElement("div",{className:"react-chatbot-kit-chat-message-container",ref:M},a().createElement(o(),{condition:"string"==typeof O&&Boolean(O),show:a().createElement("div",{dangerouslySetInnerHTML:{__html:O}})}),k.map((function(e,r){return"bot"===e.type?a().createElement(a().Fragment,{key:e.id},function(e,r){var c;c=e.withAvatar?e.withAvatar:function(e,t){if(0===t)return!0;var r=e[t-1];return!("bot"===r.type&&!r.widget)}(k,r);var i=E(E({},e),{setState:n,state:t,customComponents:l,widgetRegistry:s,messages:k});if(e.widget){var u=s.getWidget(i.widget,E(E({},t),{scrollIntoView:x}));return a().createElement(a().Fragment,null,a().createElement(y,E({customStyles:g.botMessageBox,withAvatar:c},i,{key:e.id})),a().createElement(o(),{condition:!i.loading,show:u||null}))}return a().createElement(y,E({customStyles:g.botMessageBox,key:e.id,withAvatar:c},i,{customComponents:l,messages:k,setState:n}))}(e,r)):"user"===e.type?a().createElement(a().Fragment,{key:e.id},function(e){var r=s.getWidget(e.widget,E(E({},t),{scrollIntoView:x}));return a().createElement(a().Fragment,null,a().createElement(f,{message:e.message,key:e.id,customComponents:l}),r||null)}(e)):function(e,t){return!!t[e.type]}(e,h)?a().createElement(a().Fragment,{key:e.id},function(e){var r=h[e.type],o={setState:n,state:t,scrollIntoView:x,actionProvider:u};if(e.widget){var c=s.getWidget(e.widget,E(E({},t),{scrollIntoView:x}));return a().createElement(a().Fragment,null,r(o),c||null)}return r(o)}(e)):void 0})),a().createElement("div",{style:{paddingBottom:"15px"}})),a().createElement("div",{className:"react-chatbot-kit-chat-input-container"},a().createElement("form",{className:"react-chatbot-kit-chat-input-form",onSubmit:function(e){e.preventDefault(),v&&"function"==typeof v?v(N)&&(T(),i.parse(N)):(T(),i.parse(N))}},a().createElement("input",{className:"react-chatbot-kit-chat-input",placeholder:H,value:N,onChange:function(e){return j(e.target.value)}}),a().createElement("button",{className:"react-chatbot-kit-chat-btn-send",style:A},a().createElement(w,{className:"react-chatbot-kit-chat-btn-send-icon"}))))))},O=function(e){var t=e.message;return a().createElement("div",{className:"react-chatbot-kit-error"},a().createElement("h1",{className:"react-chatbot-kit-error-header"},"Ooops. Something is missing."),a().createElement("div",{className:"react-chatbot-kit-error-container"},a().createElement(y,{message:t,withAvatar:!0,loading:!1,id:1,customStyles:{backgroundColor:""},messages:[]})),a().createElement("a",{href:"https://fredrikoseberg.github.io/react-chatbot-kit-docs/",rel:"noopener norefferer",target:"_blank",className:"react-chatbot-kit-error-docs"},"View the docs"))};var k=function(){return k=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},k.apply(this,arguments)};const M=function(e,t){var r=this;this.addWidget=function(e,t){var a=e.widgetName,n=e.widgetFunc,o=e.mapStateToProps,s=e.props;r[a]={widget:n,props:s,mapStateToProps:o,parentProps:k({},t)}},this.getWidget=function(e,t){var a=r[e];if(a){var n,o=k(k(k(k({scrollIntoView:t.scrollIntoView},a.parentProps),"object"==typeof(n=a.props)?n:{}),r.mapStateToProps(a.mapStateToProps,t)),{setState:r.setState,actionProvider:r.actionProvider});return a.widget(o)||null}},this.mapStateToProps=function(e,t){if(e)return e.reduce((function(e,r){return e[r]=t[r],e}),{})},this.setState=e,this.actionProvider=t};var C=function(){return C=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},C.apply(this,arguments)},N=function(e,t,r){if(r||2===arguments.length)for(var a,n=0,o=t.length;n<o;n++)!a&&n in t||(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))};const j=function(e){var t=e.config,n=e.actionProvider,o=e.messageParser,s=e.messageHistory,c=e.runInitialMessagesWithHistory,m=e.saveMessages,g=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["config","actionProvider","messageParser","messageHistory","runInitialMessagesWithHistory","saveMessages"]),d="",f="";if(!t||!n||!o)return{configurationError:d="I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?"};var h=function(e,t){var r=[];return e.initialMessages||r.push("Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."),(new t).parse||r.push("Messageparser must implement the method 'parse', please add this method to your object. The signature is parse(message: string)."),r}(t,o);if(h.length)return{invalidPropsError:f=h.reduce((function(e,t){return e+t}),"")};var p=(0,r.useState)({}),v=p[0],y=p[1],b=function(e){return e.state?e.state:{}}(t);s&&Array.isArray(s)?t.initialMessages=N([],s,!0):"string"==typeof s&&Boolean(s)&&(c||(t.initialMessages=[]));var w=a().useState(C({messages:N([],t.initialMessages,!0)},b)),E=w[0],S=w[1],P=a().useRef(E.messages),O=a().useRef();(0,r.useEffect)((function(){P.current=E.messages})),(0,r.useEffect)((function(){s&&Array.isArray(s)&&S((function(e){return C(C({},e),{messages:s})}))}),[]),(0,r.useEffect)((function(){return function(){var e;if(m&&"function"==typeof m){var t=null===(e=null==v?void 0:v.current)||void 0===e?void 0:e.innerHTML.toString();if(!v.current)return;m(P.current,t)}}}),[v.current]),(0,r.useEffect)((function(){O.current=E}),[E]);var k=new n(i,S,u,O.current,l,g),j=new M(S,k),x=new o(k,O.current),T=function(e){return e.widgets?e.widgets:[]}(t);return T.forEach((function(e){return j.addWidget(e,g)})),{widgetRegistry:j,actionProv:k,messagePars:x,configurationError:d,invalidPropsError:f,state:E,setState:S,setMessageContainerRef:y}};var x=function(){return x=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},x.apply(this,arguments)};const T=function(e){var t=e.actionProvider,r=e.messageParser,n=e.config,o=e.headerText,s=e.placeholderText,c=e.saveMessages,i=e.messageHistory,l=e.runInitialMessagesWithHistory,u=e.disableScrollToBottom,m=e.validator,g=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r}(e,["actionProvider","messageParser","config","headerText","placeholderText","saveMessages","messageHistory","runInitialMessagesWithHistory","disableScrollToBottom","validator"]),d=j(x({config:n,actionProvider:t,messageParser:r,messageHistory:i,saveMessages:c,runInitialMessagesWithHistory:l},g)),f=d.configurationError,h=d.invalidPropsError,p=d.actionProv,v=d.messagePars,y=d.widgetRegistry,b=d.state,w=d.setState,E=d.setMessageContainerRef;if(f)return a().createElement(O,{message:f});if(h.length)return a().createElement(O,{message:h});var S=function(e){return e.customStyles?e.customStyles:{}}(n),k=function(e){return e.customComponents?e.customComponents:{}}(n),M=function(e){return e.botName?e.botName:"Bot"}(n),C=function(e){return e.customMessages?e.customMessages:{}}(n);return a().createElement(P,{state:b,setState:w,widgetRegistry:y,actionProvider:p,messageParser:v,customMessages:C,customComponents:x({},k),botName:M,customStyles:x({},S),headerText:o,placeholderText:s,setMessageContainerRef:E,validator:m,messageHistory:i,disableScrollToBottom:u})},A=T;module.exports=t})();