(this["webpackJsonpcrypto-project"]=this["webpackJsonpcrypto-project"]||[]).push([[0],{23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(16),a=c.n(r),i=(c(23),c(6)),o=c(9),j=c(14),u=c(1),l=function(){var e=Object(n.useState)("false"),t=Object(i.a)(e,2),c=t[0],s=t[1],r=function(e){s(!c)};console.log(c);var a=c?"hidden":"visible",l=c?"hidden":"navdrop",b="icon1 ".concat(c?"visible":"hidden"),h="icon2 ".concat(a),d="".concat(l);return Object(u.jsxs)("nav",{className:"navUpper",children:[Object(u.jsx)(o.b,{to:"/",children:Object(u.jsx)("h1",{children:"What if?"})}),Object(u.jsx)(j.a,{onClick:r,className:b}),Object(u.jsx)(j.b,{onClick:r,className:h}),Object(u.jsxs)("div",{className:d,children:[Object(u.jsx)(o.b,{to:"/About",children:Object(u.jsx)("p",{children:"Crypto Calculator"})}),Object(u.jsx)(o.b,{to:"/Contact",children:Object(u.jsx)("p",{children:"Inflation Calculator"})})]})]})},b=c(2);var h=function(e){return Object(u.jsxs)("div",{className:"pricesMain",ref:e.pageRef,children:[Object(u.jsx)("img",{className:"pricesVid",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/183px-BTC_Logo.svg.png",alt:"btc"}),Object(u.jsxs)("div",{className:"prices",children:[Object(u.jsx)("h1",{className:"regularFont pricesTitle",children:"Your investment is now worth:"}),Object(u.jsxs)("h1",{className:"mediumFont priceRes",children:["$",e.results.priceNow]}),Object(u.jsx)("h2",{className:"regularFont",children:"That's a change of"}),Object(u.jsxs)("h1",{className:"mediumFont priceRes",children:[e.results.percentChange,"%"]})]})]})};var d=function(e){return Object(u.jsxs)("div",{className:"secondInvestment",children:[Object(u.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/183px-BTC_Logo.svg.png",alt:"btc"}),Object(u.jsx)("h1",{className:"regularFont secInvTitle",children:"What if you had just held that in cash?"}),Object(u.jsx)("h1",{className:"regularFont",children:"Due to inflation,"}),Object(u.jsx)("h1",{className:"regularFont",children:"your cash has lost"}),Object(u.jsxs)("h1",{className:"regularFont",children:["of value since ",e.year,"."]})]})};var O=function(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),s=c[0],r=c[1];return Object(u.jsxs)("div",{className:"landing",children:[Object(u.jsx)("h1",{className:"regularFont",children:"What if you invested"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.setInputPrice(s),r(""),e.pageRef.current.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},children:[Object(u.jsx)("p",{children:"$"}),Object(u.jsx)("input",{className:"landingInput",value:s,type:"text",onChange:function(e){r(e.target.value)}})]}),Object(u.jsxs)("h2",{className:"regularFont",children:["into Bitcoin in ",e.year,"?"]})]})};var p=function(e){var t=Object(n.useRef)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("section",{children:Object(u.jsx)(O,{pageRef:t,inputPrice:e.inputPrice,setInputPrice:e.setInputPrice,coin:e.coin,year:e.year,month:e.month})}),Object(u.jsx)("section",{children:Object(u.jsx)(h,{pageRef:t,price:e.price,results:e.results})}),Object(u.jsx)("section",{children:Object(u.jsx)(d,{year:e.year})})]})};var x=function(){return Object(u.jsx)("div",{})};var m=function(){return Object(u.jsx)("div",{})};var v=function(){var e=Object(n.useState)("March"),t=Object(i.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)("2017"),a=Object(i.a)(r,2),o=a[0],j=a[1],l=Object(n.useState)("1000"),h=Object(i.a)(l,2),d=h[0],O=h[1],v=Object(n.useState)("30-03-2017"),f=Object(i.a)(v,2),g=f[0],N=f[1],y=Object(n.useState)("bitcoin"),S=Object(i.a)(y,2),C=S[0],F=S[1],k=Object(n.useState)(""),w=Object(i.a)(k,2),I=w[0],P=w[1],R=Object(n.useState)(""),T=Object(i.a)(R,2),_=T[0],B=T[1],D=Object(n.useState)({priceNow:"inputPrice",percentChange:"0"}),L=Object(i.a)(D,2),J=L[0],M=L[1];return Object(n.useEffect)((function(){fetch("https://api.coingecko.com/api/v3/simple/price?ids=".concat(C,"&vs_currencies=usd")).then((function(e){return e.json()})).then((function(e){return P(e[C].usd)})),fetch("https://api.coingecko.com/api/v3/coins/".concat(C,"/history?date=").concat(g,"&localization=false")).then((function(e){return e.json()})).then((function(e){return B(e.market_data.current_price.usd)}));!function(){var e=(d*I/_).toFixed(2),t=(e/d*100).toFixed(0),c=Number(e).toLocaleString(),n=Number(t).toLocaleString();M({priceNow:c,percentChange:n})}()}),[d]),Object(n.useEffect)((function(){var e=Number(g.slice(3,5))-1,t=g.slice(6,10);s(["January","February","March","April","May","June","July","August","September","October","November","December"][e]),j(t)}),[g]),Object(u.jsxs)("div",{children:[Object(u.jsx)(b.a,{path:"/",render:function(){return Object(u.jsx)(p,{inputPrice:d,setInputPrice:O,date:g,setDate:N,coin:C,setCoin:F,month:c,year:o,results:J})}}),Object(u.jsx)(b.a,{path:"/PricesDetails",render:function(){return Object(u.jsx)(m,{})}}),Object(u.jsx)(b.a,{path:"/SecondInvestmentDetails",render:function(){return Object(u.jsx)(x,{})}})]})};var f=function(){return Object(u.jsx)("div",{})};var g=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{}),Object(u.jsx)(v,{}),Object(u.jsx)(f,{})]})};a.a.render(Object(u.jsx)(o.a,{children:Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(g,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.635ef99d.chunk.js.map