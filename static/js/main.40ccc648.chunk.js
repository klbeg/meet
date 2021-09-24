(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(22),s=n.n(r),c=n(23),i=(n(30),n(2)),u=n(5),l=n(4),h=n(3),p=(n(31),n(0)),f=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:this.props.event.description})}}]),n}(a.Component),d=f,v=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={showDetails:!1},t.handleShowDetails=function(e){t.setState({showDetails:e})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{className:"event",children:[Object(p.jsx)("h3",{children:this.props.event.summary}),Object(p.jsxs)("p",{children:[this.props.event.start.dateTime.slice(0,10)," (".concat(this.props.event.start.timeZone," Standard Time)")]}),Object(p.jsx)("p",{children:"".concat(this.props.event.summary," | ").concat(this.props.event.location)}),this.state.showDetails?Object(p.jsx)(d,{event:this.props.event}):Object(p.jsx)("div",{}),Object(p.jsx)("button",{className:"show-details",onClick:this.state.showDetails?function(){return t.handleShowDetails(!1)}:function(){return t.handleShowDetails(!0)},children:"Show Details"})]})}}]),n}(a.Component),j=v,g=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={eventsLength:32},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("ul",{className:"event-list",children:this.props.events.slice(0,this.props.numOfEvents?this.props.numOfEvents:this.state.eventsLength).map((function(t,e){return Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:e}),Object(p.jsx)(j,{event:t})]},t.id)}))})}}]),n}(a.Component),b=g,m=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Alert",children:Object(p.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),O=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).color="blue",a}return n}(m),w=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).color="red",a}return n}(m),x=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},t.handleItemClicked=function(e){t.setState({query:e,suggestions:[],showSuggestions:!1,infoText:""}),t.props.updateEvents(e)},t.handleInputChange=function(e){var n=e.target.value;t.setState({showSuggestions:!0});var a=t.props.locations.filter((function(t){return t.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return t.setState({query:n,suggestions:a,infoText:""});t.setState({query:n,infoText:"We can not find the city your are looking for.  Please try another city."})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)(O,{text:this.state.infoText}),Object(p.jsx)("input",{className:"city",placeholder:"CitySearch",value:this.state.query,onChange:this.handleInputChange,onFocus:function(){t.setState({showSuggestions:!0})},type:"text"}),Object(p.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(e){return Object(p.jsx)("li",{onClick:function(){return t.handleItemClicked(e)},children:e},e)})),Object(p.jsx)("li",{onClick:function(){return t.handleItemClicked("all")},children:Object(p.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),y=x,S=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={eventsLength:32,infoText:""},t.handleUpdateEventsLength=function(e){var n=parseInt(e.target.value);t.setState({eventsLength:n}),t.props.updateNumberOfEvents(n),n>32||0===n?t.setState({infoText:"Select a number from 1 - 32"}):t.setState({infoText:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{className:"setEventsLength",onChange:this.handleUpdateEventsLength,type:"text",placeholder:"setEventsLength"}),Object(p.jsx)(w,{text:this.state.infoText})]})}}]),n}(a.Component),k=S,C=n(24),E=n(7),N=n.n(E),I=n(8),T=n(12),L=n.n(T),A=(n(52),n(9)),U=n.n(A),D=function(){var t=Object(I.a)(N.a.mark((function t(e){var n,a,o;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURIComponent(e),"https://309jzcntd7.execute-api.us-east-2.amazonaws.com/dev/api/token",t.next=4,fetch("https://309jzcntd7.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(t){return t.json()})).catch((function(t){return t}));case 4:return a=t.sent,o=a.access_token,localStorage.setItem("access_token",o),t.abrupt("return",o);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=Object(I.a)(N.a.mark((function t(){var e,n,a,o,r,s;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=localStorage.getItem("access_token"),n=localStorage.getItem("access_token"),e&&!n.error){t.next=16;break}return t.next=5,localStorage.removeItem("access_token");case 5:return a=new URLSearchParams(window.location.search),t.next=8,a.get("code");case 8:if(o=t.sent){t.next=15;break}return t.next=12,L.a.get("https://309jzcntd7.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 12:return r=t.sent,s=r.data.authUrl,t.abrupt("return",window.location.href=s);case 15:return t.abrupt("return",o&&D(o));case 16:return t.abrupt("return",e);case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(t){var e=t.map((function(t){return t.location}));return Object(C.a)(new Set(e))},P=function(){if(window.history.pushState&&window.location.pathname){var t=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",t)}else t=window.location.protocol+"//"+window.location.host,window.history.pushState("","",t)},q=function(){var t=Object(I.a)(N.a.mark((function t(){var e,n,a,o,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("getEvents called"),U.a.start(),navigator.onLine){t.next=7;break}return console.log("page appearing offline"),e=localStorage.getItem("lastEvents"),U.a.done(),t.abrupt("return",e?JSON.parse(undefined).events:[]);case 7:return t.next=9,W();case 9:if(!(n=t.sent)){t.next=21;break}return P(),a="https://309jzcntd7.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+n,console.log("url in getEvents: ",a),t.next=16,L.a.get(a);case 16:return o=t.sent,console.log(o.data),o.data&&(console.log("if results.data \u221a"),r=z(o.data.items),localStorage.setItem("lastEvents",JSON.stringify(o.data.items)),localStorage.setItem("locations",JSON.stringify(r))),U.a.done(),t.abrupt("return",o.data.events);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),F=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={events:[],locations:[],numOfEvents:32},t.updateNumberOfEvents=function(e){t.setState({numOfEvents:e})},t.updateEvents=function(e){q().then((function(n){var a="all"===e?n:n.filter((function(t){return t.location===e}));t.setState({events:a})}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.mounted=!0,q().then((function(e){console.log("getEvents called from App.js"),t.mounted&&t.setState({events:e,locations:z(e)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(y,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(p.jsx)(k,{updateNumberOfEvents:this.updateNumberOfEvents}),Object(p.jsx)(b,{events:this.state.events,numOfEvents:this.state.numOfEvents})]})}}]),n}(a.Component),J=F,_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),o(t),r(t),s(t)}))};c.config("2328982937db4a178c5c9e1d6e2affbc").install(),s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(J,{})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/meet","/service-worker.js");_?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):B(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(e,t)}))}}(),R()}},[[53,1,2]]]);
//# sourceMappingURL=main.40ccc648.chunk.js.map