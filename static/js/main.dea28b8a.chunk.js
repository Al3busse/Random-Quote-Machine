(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{129:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(22),c=o.n(r),i=(o(39),o(23)),s=o(24),l=o(8),u=o(33),d=o(32),m=o(13),h=(o(40),o(20),o(41),function(e){var t=e.clickHandler,o=e.buttonName,a=e.textColor;return n.a.createElement("div",{id:"button-container"},n.a.createElement("button",{id:"new-quote",onClick:t,style:a},o))}),f=o(14),p=o(10),b=(o(46),function(e){return n.a.createElement("div",null,n.a.createElement("button",{className:"buttonClass",style:e.borderColor},n.a.createElement("a",{href:"https://twitter.com/intent/tweet?text=".concat(e.textShare,"-").concat(e.authorShare,"&hashtags=randomquote"),rel:"noopener noreferrer",target:"_blank",id:"tweet-quote"},n.a.createElement(f.a,{icon:p.a,size:"2x"}))),n.a.createElement("button",{className:"buttonClass",style:e.borderColor},n.a.createElement("a",{href:"https://api.whatsapp.com/send?text=".concat(e.textShare,"-").concat(e.authorShare),target:"_blank",rel:"noopener noreferrer",id:"whatsapp-quote"},n.a.createElement(f.a,{icon:p.b,size:"2x"}))))}),x=o(7),E=o(9),C=o(31),v=(o(47),function(e){return n.a.createElement(C.a,{id:"card",style:{boxShadow:"3px 3px 20px 0px"}},n.a.createElement(x.a,{sm:{span:12},xs:{span:12},style:{margin:"1rem 1rem 1rem 1rem"}},n.a.createElement(E.a,null,n.a.createElement("p",{id:"text",style:{color:e.textColor}},'"',e.pickedRandomQuote?e.pickedRandomQuote:void 0,'"'))),n.a.createElement(x.a,null,n.a.createElement(E.a,{sm:{span:8,offset:4},xs:{span:8,offset:4}},n.a.createElement("p",{id:"author",style:{color:e.textColor}},e.pickedAuthor?e.pickedAuthor:void 0))),n.a.createElement(x.a,null,n.a.createElement(E.a,{sm:{span:6},xs:{span:6},id:"buttonSS-container"},n.a.createElement(b,{textShare:e.pickedRandomQuote,authorShare:e.pickedAuthor,borderColor:{border:"1px solid"+e.textColor,boxShadow:"1px 1px 10px 1px"+e.textColor}})),n.a.createElement(E.a,{sm:{span:6},xs:{span:6}},n.a.createElement(h,{buttonName:e.buttonName,clickHandler:e.newQuote,textColor:{color:e.textColor,border:"1px solid"+e.textColor,boxShadow:"1px 1px 10px 1px"+e.textColor}}))))}),S=o(30),g=(o(48),o(49),o(50),o(16)),k=o(26);function y(){var e=Object(m.a)(["",""]);return y=function(){return e},e}function Q(){var e=Object(m.a)(["\n  animation: 1.8s ",";\n"]);return Q=function(){return e},e}var w=g.a.div(Q(),Object(g.b)(y(),k.flash)),j=function(e){Object(u.a)(o,e);var t=Object(d.a)(o);function o(e){var a;return Object(i.a)(this,o),(a=t.call(this,e)).state={quotes:[],selectedQuote:[],flashing:"div",colorHexCode:"white"},a.selectRandomQuote=a.selectRandomQuote.bind(Object(l.a)(a)),a.setQuote=a.setQuote.bind(Object(l.a)(a)),a.afterSetStateFinished=a.afterSetStateFinished.bind(Object(l.a)(a)),a.randomColor=a.randomColor.bind(Object(l.a)(a)),a}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/Al3busse/7891ad8844a728eae79cb0d5be696765/raw/303d0453f3bfb205a218f8cd510962c7a950788c/funnyQuotes.json").then((function(e){return e.json()})).then((function(t){return e.setState({quotes:t})})).then((function(){return e.setState({selectedQuote:e.selectRandomQuote(),colorHexCode:e.randomColor()})}))}},{key:"componentDidUpdate",value:function(e,t){var o=this.state.colorHexCode;e.bgColor!==o&&(document.querySelector("body").style.backgroundColor=o)}},{key:"selectRandomQuote",value:function(){if(this.state.quotes.length)return this.state.quotes[Math.floor(Math.random()*this.state.quotes.length)]}},{key:"afterSetStateFinished",value:function(){setTimeout(function(){this.setState({flashing:"div"})}.bind(this),1900)}},{key:"randomColor",value:function(){return"#"+((1<<24)*Math.random()|0).toString(16)}},{key:"setQuote",value:function(){var e=this;setTimeout(function(){this.setState({selectedQuote:this.selectRandomQuote(),colorHexCode:this.randomColor()})}.bind(this),900),this.setState({flashing:w},(function(){e.afterSetStateFinished()}))}},{key:"render",value:function(){return n.a.createElement(this.state.flashing,{Container:!0,style:{display:"flex",flexDirection:"column",margin:"auto",alignItems:"center"}},n.a.createElement(x.a,null,n.a.createElement("h1",{id:"title"},"Random Quote Machine")),n.a.createElement(x.a,null,n.a.createElement(S.a,{id:"quote-box"},n.a.createElement(v,{textColor:this.state.colorHexCode,pickedRandomQuote:this.state.selectedQuote.quote,pickedAuthor:this.state.selectedQuote.author,newQuote:this.setQuote,buttonName:"New Quote"}))),n.a.createElement(x.a,null,n.a.createElement("footer",{id:"footer"},"Made by"," ",n.a.createElement("a",{href:"https://github.com/Al3busse",id:"footerA"},"Alejandro Busse"))))}}]),o}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,o){e.exports=o(129)},39:function(e,t,o){},40:function(e,t,o){},41:function(e,t,o){},46:function(e,t,o){},47:function(e,t,o){},48:function(e,t,o){e.exports=o.p+"static/media/NovaCut-Regular.f242da80.ttf"},49:function(e,t,o){e.exports=o.p+"static/media/GreatVibes-Regular.c1c92d0c.ttf"},50:function(e,t,o){e.exports=o.p+"static/media/PermanentMarker-Regular.c863f802.ttf"}},[[34,1,2]]]);
//# sourceMappingURL=main.dea28b8a.chunk.js.map