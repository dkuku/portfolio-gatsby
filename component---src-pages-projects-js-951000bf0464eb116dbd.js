(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{187:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),r=a.n(n),o=a(206),c=a(200),l=a(503),i=(a(220),a(123)),s=a.n(i),d=a(196),m=a.n(d),u=a(197),p=a.n(u),h=a(198),g=a.n(h),b=a(194),f=a.n(b),k=a(199),v=a.n(k),j=a(57),y=a.n(j),E=a(56),O=a.n(E),N=a(191),C=a.n(N),w=a(217),P=a(314),x=a(313),A=a(190),D=a(496),R=(a(207),a(320));function F(e){var t=e.children,a=e.className,n=e.content,o=e.textAlign,c=C()(Object(w.d)(o),"description",a),l=Object(P.a)(F,e),i=Object(x.a)(F,e);return r.a.createElement(i,s()({},l,{className:c}),A.a.isNil(t)?n:t)}F.handledProps=["as","children","className","content","textAlign"];var M=F;function B(e){var t=e.children,a=e.className,n=e.content,o=e.textAlign,c=C()(Object(w.d)(o),"header",a),l=Object(P.a)(B,e),i=Object(x.a)(B,e);return r.a.createElement(i,s()({},l,{className:c}),A.a.isNil(t)?n:t)}B.handledProps=["as","children","className","content","textAlign"];var G=B;function T(e){var t=e.children,a=e.className,n=e.content,o=e.textAlign,c=C()(Object(w.d)(o),"meta",a),l=Object(P.a)(T,e),i=Object(x.a)(T,e);return r.a.createElement(i,s()({},l,{className:c}),A.a.isNil(t)?n:t)}T.handledProps=["as","children","className","content","textAlign"];var K=T;function I(e){var t=e.children,a=e.className,n=e.content,o=e.description,c=e.extra,l=e.header,i=e.meta,d=e.textAlign,m=C()(Object(w.a)(c,"extra"),Object(w.d)(d),"content",a),u=Object(P.a)(I,e),p=Object(x.a)(I,e);return A.a.isNil(t)?A.a.isNil(n)?r.a.createElement(p,s()({},u,{className:m}),Object(R.c)(G,function(e){return{content:e}},l,{autoGenerateKey:!1}),Object(R.c)(K,function(e){return{content:e}},i,{autoGenerateKey:!1}),Object(R.c)(M,function(e){return{content:e}},o,{autoGenerateKey:!1})):r.a.createElement(p,s()({},u,{className:m}),n):r.a.createElement(p,s()({},u,{className:m}),t)}I.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"];var W=I,_=a(216),S=a.n(_);function q(e){var t=e.centered,a=e.children,n=e.className,o=e.content,c=e.doubling,l=e.items,i=e.itemsPerRow,d=e.stackable,m=e.textAlign,u=C()("ui",Object(w.a)(t,"centered"),Object(w.a)(c,"doubling"),Object(w.a)(d,"stackable"),Object(w.d)(m),Object(w.g)(i),"cards",n),p=Object(P.a)(q,e),h=Object(x.a)(q,e);if(!A.a.isNil(a))return r.a.createElement(h,s()({},p,{className:u}),a);if(!A.a.isNil(o))return r.a.createElement(h,s()({},p,{className:u}),o);var g=S()(l,function(e){var t=e.key||[e.header,e.description].join("-");return r.a.createElement(Q,s()({key:t},e))});return r.a.createElement(h,s()({},p,{className:u}),g)}q.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"];var H=q,Q=function(e){function t(){var e,a;m()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=g()(this,(e=f()(t)).call.apply(e,[this].concat(r))),O()(y()(y()(a)),"handleClick",function(e){var t=a.props.onClick;t&&t(e,a.props)}),a}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,a=e.centered,n=e.children,o=e.className,c=e.color,l=e.content,i=e.description,d=e.extra,m=e.fluid,u=e.header,p=e.href,h=e.image,g=e.link,b=e.meta,f=e.onClick,k=e.raised,v=C()("ui",c,Object(w.a)(a,"centered"),Object(w.a)(m,"fluid"),Object(w.a)(g,"link"),Object(w.a)(k,"raised"),"card",o),j=Object(P.a)(t,this.props),y=Object(x.a)(t,this.props,function(){if(f)return"a"});return A.a.isNil(n)?A.a.isNil(l)?r.a.createElement(y,s()({},j,{className:v,href:p,onClick:this.handleClick}),D.a.create(h,{autoGenerateKey:!1}),(i||u||b)&&r.a.createElement(W,{description:i,header:u,meta:b}),d&&r.a.createElement(W,{extra:!0},d)):r.a.createElement(y,s()({},j,{className:v,href:p,onClick:this.handleClick}),l):r.a.createElement(y,s()({},j,{className:v,href:p,onClick:this.handleClick}),n)}}]),t}(n.Component);O()(Q,"Content",W),O()(Q,"Description",M),O()(Q,"Group",H),O()(Q,"Header",G),O()(Q,"Meta",K),O()(Q,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]);var J=a(332),U=function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,e.tech.map(function(e){return r.a.createElement("li",{key:e},e)})))},z=function(e){var t=e.title,a=e.img,n=e.desc,o=e.color,c=e.description,l=e.technology,i=e.link;return r.a.createElement(Q,{centered:!0,raised:!0,href:i,target:"_blank"},r.a.createElement(D.a,{src:"images/".concat(a)}),r.a.createElement(Q.Content,null,r.a.createElement(J.a,{style:{marginBottom:"0.5em"},color:o,ribbon:!0},l[0]),r.a.createElement(Q.Header,null,t),r.a.createElement(Q.Meta,null,n),r.a.createElement(Q.Description,null,c)),r.a.createElement(Q.Content,{extra:!0},r.a.createElement(U,{tech:l})))},L=[{title:"Neighborhood",img:"neighborhood.jpg",desc:"Aid plaform for my neighbourhood",description:"Project made for Openclassrooms Full Stack Path. Full stack app. Backend uses ruby on rails, Frontend uses react ecosystem",technology:["React","Redux","Rails","Google maps","Semantic-UI"],link:"https://neighboorhelp.herokuapp.com/",color:"pink"},{title:"Boulder Bike Tour",img:"bbt.jpg",desc:"Website for Mountain Bike Race",description:"Project for OpenClassrooms Full-stack Developer Path. The goal of this project was to learn using external api and create own",technology:["React","Rails","flickr-api","Google maps"],link:"https://boulderbiketour.herokuapp.com",color:"green"},{title:"Move and Groove",img:"mandg.jpg",desc:"Fitness Tracker",description:"Project made for Openclassrooms Full-stack Developer path. Website allow to register and add activities to user profile",technology:["Rails","Devise gem","Bootstrap"],link:"https://mandgruby.herokuapp.com/",color:"blue"},{title:"Chalets and Caviar",img:"Chalets.jpg",desc:"Website for Real Estate Agency",description:"Project for OpenClassrooms Full-stack Developer Path. Website made using wordpress and some additional plugins",technology:["wordpress"],link:"http://dev-daniel-project2.pantheonsite.io/",color:"yellow"},{title:"Brooklyn Outdoor Film Festival",img:"Festival.jpg",desc:"Website prototype for a Film Festival",description:"Project for OpenClassrooms Full-stack Developer Path. Frontend made using bootstrap and svg for diagonal sections",technology:["bootstrap","html","js","svg"],link:"projects/prototype/index.html",color:"teal"},{title:"Chat app",img:"chat.png",desc:"Chat app written in node.js",description:"Project for Andrew Mead's Complete node.js Developer Course. Application uses node.js express and socket.io. A couple of users can login to the same room and chat.",technology:["node.js","socket.io","express"],link:"https://chat-node-by-kuku.herokuapp.com/",color:"purple"},{title:"Todo App",img:"todo.png",desc:"Simple todo app",description:"Project for Colt Steel's The Web Developer Bootcamp extended by me",technology:["jQuery","html","css","js"],link:"https://github.com/dkuku/todo-list-jQuery",color:"orange"},{title:"Rice Rocks",img:"Asteroids.jpg",desc:"Asteroids Clone",description:"Game made using python and codeskulptor for Interactive Python course on Coursera",technology:["object oriented python","codeskulptor","simple gui"],link:"http://www.codeskulptor.org/#user16_T5YN7P0gBI_6.py",color:"red"},{title:"RGB Game",img:"rgb-game.png",desc:"Color guessing game",description:"Project for Colt Steel's The Web Developer Bootcamp. Game made using html, css and javascript",technology:["js","html","css"],link:"projects/rgb-color-game.html",color:"brown"},{title:"Portfolio",img:"portfolio.jpg",desc:"Portfolio site",description:"Project for OpenClassrooms Full-stack Developer Path. Made using react, react-router and semantic-ui",technology:["react","react-router","semantic-ui"],link:"https://github.com/dkuku/portfolio-website",color:"violet"}];t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Home",keywords:["Daniel","Kukula","portfolio","developer","rails","react","ruby"]}),r.a.createElement(l.a,{style:{marginBottom:"1em"}},r.a.createElement(Q.Group,null,L.map(function(e,t){return r.a.createElement(z,Object.assign({key:t,num:t},e))}))))}},192:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),o=a(55),c=a.n(o);a.d(t,"a",function(){return c.a});a(195);var l=r.a.createContext({});function i(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&o(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(i,{data:t,query:a,render:n||o,staticQueryData:e})})}},195:function(e,t,a){var n;e.exports=(n=a(204))&&n.default||n},200:function(e,t,a){"use strict";var n=a(205),r=a(0),o=a.n(r),c=a(209),l=a.n(c),i=a(192);function s(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,s=e.title;return o.a.createElement(i.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)},o.a.createElement("link",{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"}))},data:n})}s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var d="1025518380"},203:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage"}}}}},204:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),r=a.n(n),o=a(83);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},205:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage",description:"Daniel KUkula - homepage and blog",author:"@gatsbyjs"}}}}},206:function(e,t,a){"use strict";var n=a(203),r=a(0),o=a.n(r),c=a(192),l=a(200),i=a(505),s=a(503),d=a(237),m=function(e){e.siteTitle;return o.a.createElement(i.a,{size:"large",inverted:!0,style:{borderRadius:0}},o.a.createElement(s.a,null,o.a.createElement(i.a.Item,{as:c.a,to:"/"},o.a.createElement(d.a,{name:"home"})," Home"),o.a.createElement(i.a.Menu,{position:"right"},o.a.createElement(i.a.Item,{as:c.a,to:"/blog"},o.a.createElement(d.a,{name:"edit"}),"Blog"),o.a.createElement(i.a.Item,{as:c.a,to:"/projects"},o.a.createElement(d.a,{name:"code"}),"Projects"),o.a.createElement(i.a.Item,{as:c.a,to:"/about"},o.a.createElement(d.a,{name:"user"}),"About Me"),o.a.createElement(i.a.Item,{as:c.a,to:"/contact"},o.a.createElement(d.a,{name:"mail"}),"Contact"))))};m.defaultProps={siteTitle:""};var u=m,p=a(508),h=a(507),g=a(509);var b=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return o.a.createElement("div",{id:"footer"},o.a.createElement(p.a,{inverted:!0,vertical:!0,style:{height:"100%"}},o.a.createElement(s.a,null,o.a.createElement(h.a,{divided:!0,inverted:!0,stackable:!0},o.a.createElement(h.a.Row,null,o.a.createElement(h.a.Column,{width:7},o.a.createElement(g.a,{as:"h4",inverted:!0},"Created by:"),o.a.createElement("p",null,"Daniel Kukula",o.a.createElement("br",null),"All Rights Reserved")))))))},n}(r.Component);a(180),t.a=function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:"Home",keywords:["Daniel","Kukula","portfolio","developer","rails","react"]}),o.a.createElement("div",{className:"site"},o.a.createElement("div",{className:"site-content"},o.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),t),o.a.createElement(b,null)))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-projects-js-951000bf0464eb116dbd.js.map