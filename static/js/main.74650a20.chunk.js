(this["webpackJsonpreact-totp"]=this["webpackJsonpreact-totp"]||[]).push([[0],{130:function(e,t){},131:function(e,t){},174:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(84),l=a.n(c),o=(a(92),a(93),a(25)),s=a(85),i=a.n(s),u=a(86);var m=function(e){var t=Object(u.a)(e);return i.a.padStart(t,6,"0")},h=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(o.a)(l,2),i=s[0],u=s[1],h=Object(n.useState)(null),d=Object(o.a)(h,2),p=d[0],E=d[1],f=Object(n.useRef)(null);Object(n.useEffect)((function(){if(a){var e=setInterval((function(){u(m(a))}),2e3);return function(){return clearInterval(e)}}}),[a]);return a?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"is-size-1 has-text-centered"},i.replace(/\B(?=(\d{3})+(?!\d))/g," ")),r.a.createElement("p",{className:"content has-text-centered pt-4"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-danger",type:"submit",onClick:function(){return c(null)}},"Reset")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Secret"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input",type:"password",ref:f,placeholder:"ABCD 1234 ABCD 1234"})),p&&r.a.createElement("p",{className:"help is-danger"},p),r.a.createElement("p",{className:"help"},"The secret code that you used to create your TOTP in the first place.")),r.a.createElement("div",{className:"control has-text-centered pt-3"},r.a.createElement("button",{className:"button is-primary",type:"submit",onClick:function(){try{var e=f.current.value.replace(/\s/g,"");u(m(e)),c(e)}catch(t){E("Invalid secret, please enter a valid secret")}}},"Generate")))},d=function(e){var t=e.children;return r.a.createElement("div",{className:"pb-5"},t)},p=function(e){var t=e.children;return r.a.createElement("p",{className:"has-text-weight-bold"},t)},E=function(e){var t=e.children;return r.a.createElement("p",{className:"pt-2"},t)},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null,r.a.createElement(p,null,"What is OTP and TOTP?"),r.a.createElement(E,null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm"},"Wikipedia")," ","explains how it works better than I will. But the short version is that it's the code that apps like Google Authenticator generates that can be used as a second factor on many sites and services.")),r.a.createElement(d,null,r.a.createElement(p,null,"How can this be secure?"),r.a.createElement(E,null,"No data leaves this website. Everything that you see here is being rendered in your browser on your device.")),r.a.createElement(d,null,r.a.createElement(p,null,"How can I verify that no data is being sent elsewhere?"),r.a.createElement(E,null,"Right click anywhere on this page and select Inspect or Inspect Element. Then open the network tab and reload the page."),r.a.createElement(E,null,"You can also check out the"," ",r.a.createElement("a",{href:"https://github.com/cfarvidson/react-totp"},"source code"),".")),r.a.createElement(d,null,r.a.createElement(p,null,"Isn't the whole point of TOTP and 2FA to not be stored anywhere other than on that device?"),r.a.createElement(E,null,"Yes!"),r.a.createElement(E,null,"But some password wallet services does not offer backup codes for your 2FA."),r.a.createElement(E,null,"What happens if you are on a trip and your phone is stolen and you can't event contact anyone before you get in to your password wallet?"),r.a.createElement(E,null,"If you store your secret somewhere (on paper or on the internet) where only you know where it is you can then access this page to genererate a secret.")))};var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title has-text-centered"},"React TOTP"),r.a.createElement("h2",{className:"subtitle has-text-centered pt-2"},"The One-time Password Generator for when you have lost everything."))),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container is-centered",style:{maxWidth:"400px"}},r.a.createElement(h,null))),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container",style:{maxWidth:"700px"}},r.a.createElement(f,null))),r.a.createElement("footer",{class:"footer"},r.a.createElement("div",{class:"content has-text-centered"},r.a.createElement("p",null,"Built with"," ",r.a.createElement("span",{role:"img","aria-label":"heart emoji"},"\u2764\ufe0f")," ","by"," ",r.a.createElement("a",{href:"https://carl-fredrik.arvidson.io"},"Carl-Fredrik Arvidson")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return s}));var n=a(43),r=a.n(n),c=a(44),l=a.n(c),o=function(t,a){for(var n=l.a.decode.asBytes(t),c=e.alloc(8),o=0;o<8;o++)c[7-o]=255&a,a>>=8;var s=r.a.createHmac("sha1",e.from(n));return s.update(c),function(e){var t=15&e[e.length-1];return(127&e[t])<<24|(255&e[t+1])<<16|(255&e[t+2])<<8|255&e[t+3]}(s.digest())%Math.pow(10,6)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=Math.floor(Date.now()/3e4);return o(e,a+t)}}).call(this,a(4).Buffer)},87:function(e,t,a){e.exports=a(174)},92:function(e,t,a){},96:function(e,t){},98:function(e,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.74650a20.chunk.js.map