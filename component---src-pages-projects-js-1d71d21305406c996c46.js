(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{148:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),o=a(167),i=a(161),c=a(463),l=a(74),s=a.n(l),d=a(157),u=a.n(d),m=a(158),p=a.n(m),h=a(159),g=a.n(h),f=a(155),b=a.n(f),y=a(160),k=a.n(y),v=a(35),j=a.n(v),E=a(34),O=a.n(E),C=a(152),N=a.n(C),w=a(4),P=a.n(w),x=a(178),R=a(272),T=a(271),A=a(151),F=a(456),D=(a(168),a(278));function q(e){var t=e.children,a=e.className,n=e.content,o=e.textAlign,i=N()(Object(x.d)(o),"description",a),c=Object(R.a)(q,e),l=Object(T.a)(q,e);return r.a.createElement(l,s()({},c,{className:i}),A.a.isNil(t)?n:t)}q.handledProps=["as","children","className","content","textAlign"],q.propTypes={};var M=q;function B(e){var t=e.children,a=e.className,n=e.content,o=e.textAlign,i=N()(Object(x.d)(o),"header",a),c=Object(R.a)(B,e),l=Object(T.a)(B,e);return r.a.createElement(l,s()({},c,{className:i}),A.a.isNil(t)?n:t)}B.handledProps=["as","children","className","content","textAlign"],B.propTypes={};var G=B;function K(e){var t=e.children,a=e.className,n=e.content,o=e.textAlign,i=N()(Object(x.d)(o),"meta",a),c=Object(R.a)(K,e),l=Object(T.a)(K,e);return r.a.createElement(l,s()({},c,{className:i}),A.a.isNil(t)?n:t)}K.handledProps=["as","children","className","content","textAlign"],K.propTypes={};var S=K;function I(e){var t=e.children,a=e.className,n=e.content,o=e.description,i=e.extra,c=e.header,l=e.meta,d=e.textAlign,u=N()(Object(x.a)(i,"extra"),Object(x.d)(d),"content",a),m=Object(R.a)(I,e),p=Object(T.a)(I,e);return A.a.isNil(t)?A.a.isNil(n)?r.a.createElement(p,s()({},m,{className:u}),Object(D.c)(G,function(e){return{content:e}},c,{autoGenerateKey:!1}),Object(D.c)(S,function(e){return{content:e}},l,{autoGenerateKey:!1}),Object(D.c)(M,function(e){return{content:e}},o,{autoGenerateKey:!1})):r.a.createElement(p,s()({},m,{className:u}),n):r.a.createElement(p,s()({},m,{className:u}),t)}I.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],I.propTypes={};var W=I,H=a(177),Q=a.n(H);function _(e){var t=e.centered,a=e.children,n=e.className,o=e.content,i=e.doubling,c=e.items,l=e.itemsPerRow,d=e.stackable,u=e.textAlign,m=N()("ui",Object(x.a)(t,"centered"),Object(x.a)(i,"doubling"),Object(x.a)(d,"stackable"),Object(x.d)(u),Object(x.g)(l),"cards",n),p=Object(R.a)(_,e),h=Object(T.a)(_,e);if(!A.a.isNil(a))return r.a.createElement(h,s()({},p,{className:m}),a);if(!A.a.isNil(o))return r.a.createElement(h,s()({},p,{className:m}),o);var g=Q()(c,function(e){var t=e.key||[e.header,e.description].join("-");return r.a.createElement(L,s()({key:t},e))});return r.a.createElement(h,s()({},p,{className:m}),g)}_.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],_.propTypes={};var J=_,L=function(e){function t(){var e,a;u()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=g()(this,(e=b()(t)).call.apply(e,[this].concat(r))),O()(j()(j()(a)),"handleClick",function(e){var t=a.props.onClick;t&&t(e,a.props)}),a}return k()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,a=e.centered,n=e.children,o=e.className,i=e.color,c=e.content,l=e.description,d=e.extra,u=e.fluid,m=e.header,p=e.href,h=e.image,g=e.link,f=e.meta,b=e.onClick,y=e.raised,k=N()("ui",i,Object(x.a)(a,"centered"),Object(x.a)(u,"fluid"),Object(x.a)(g,"link"),Object(x.a)(y,"raised"),"card",o),v=Object(R.a)(t,this.props),j=Object(T.a)(t,this.props,function(){if(b)return"a"});return A.a.isNil(n)?A.a.isNil(c)?r.a.createElement(j,s()({},v,{className:k,href:p,onClick:this.handleClick}),F.a.create(h,{autoGenerateKey:!1}),(l||m||f)&&r.a.createElement(W,{description:l,header:m,meta:f}),d&&r.a.createElement(W,{extra:!0},d)):r.a.createElement(j,s()({},v,{className:k,href:p,onClick:this.handleClick}),c):r.a.createElement(j,s()({},v,{className:k,href:p,onClick:this.handleClick}),n)}}]),t}(n.Component);O()(L,"Content",W),O()(L,"Description",M),O()(L,"Group",J),O()(L,"Header",G),O()(L,"Meta",S),O()(L,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]),L.propTypes={};a(454);var U=a(290),z=function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,e.tech.map(function(e){return r.a.createElement("li",{key:e},e)})))},Y=function(e){var t=e.title,a=e.img,n=e.desc,o=e.color,i=e.description,c=e.technology,l=e.link;return r.a.createElement(L,{centered:!0,raised:!0,href:l,target:"_blank"},r.a.createElement(F.a,{src:"images/".concat(a)}),r.a.createElement(L.Content,null,r.a.createElement(U.a,{style:{marginBottom:"0.5em"},color:o,ribbon:!0},c[0]),r.a.createElement(L.Header,null,t),r.a.createElement(L.Meta,null,n),r.a.createElement(L.Description,null,i)),r.a.createElement(L.Content,{extra:!0},r.a.createElement(z,{tech:c})))};Y.propTypes={title:P.a.string.isRequired,desc:P.a.string,description:P.a.string.isRequired,img:P.a.string.isRequired,technology:P.a.arrayOf(P.a.string).isRequired,color:P.a.string,link:P.a.string};var V=Y,X=[{title:"Neighborhood",img:"neighborhood.jpg",desc:"Aid plaform for my neighbourhood",description:"Project made for Openclassrooms Full Stack Path. Full stack app. Backend uses ruby on rails, Frontend uses react ecosystem",technology:["React","Redux","Rails","Google maps","Semantic-UI"],link:"https://neighboorhelp.herokuapp.com/",color:"pink"},{title:"Boulder Bike Tour",img:"bbt.jpg",desc:"Website for Mountain Bike Race",description:"Project for OpenClassrooms Full-stack Developer Path. The goal of this project was to learn using external api and create own",technology:["React","Rails","flickr-api","Google maps"],link:"https://boulderbiketour.herokuapp.com",color:"green"},{title:"Move and Groove",img:"mandg.jpg",desc:"Fitness Tracker",description:"Project made for Openclassrooms Full-stack Developer path. Website allow to register and add activities to user profile",technology:["Rails","Devise gem","Bootstrap"],link:"https://mandgruby.herokuapp.com/",color:"blue"},{title:"Chalets and Caviar",img:"Chalets.jpg",desc:"Website for Real Estate Agency",description:"Project for OpenClassrooms Full-stack Developer Path. Website made using wordpress and some additional plugins",technology:["wordpress"],link:"http://dev-daniel-project2.pantheonsite.io/",color:"yellow"},{title:"Brooklyn Outdoor Film Festival",img:"Festival.jpg",desc:"Website prototype for a Film Festival",description:"Project for OpenClassrooms Full-stack Developer Path. Frontend made using bootstrap and svg for diagonal sections",technology:["bootstrap","html","js","svg"],link:"projects/prototype/index.html",color:"teal"},{title:"Chat app",img:"chat.png",desc:"Chat app written in node.js",description:"Project for Andrew Mead's Complete node.js Developer Course. Application uses node.js express and socket.io. A couple of users can login to the same room and chat.",technology:["node.js","socket.io","express"],link:"https://chat-node-by-kuku.herokuapp.com/",color:"purple"},{title:"Todo App",img:"todo.png",desc:"Simple todo app",description:"Project for Colt Steel's The Web Developer Bootcamp extended by me",technology:["jQuery","html","css","js"],link:"https://github.com/dkuku/todo-list-jQuery",color:"orange"},{title:"Rice Rocks",img:"Asteroids.jpg",desc:"Asteroids Clone",description:"Game made using python and codeskulptor for Interactive Python course on Coursera",technology:["object oriented python","codeskulptor","simple gui"],link:"http://www.codeskulptor.org/#user16_T5YN7P0gBI_6.py",color:"red"},{title:"RGB Game",img:"rgb-game.png",desc:"Color guessing game",description:"Project for Colt Steel's The Web Developer Bootcamp. Game made using html, css and javascript",technology:["js","html","css"],link:"projects/rgb-color-game.html",color:"brown"},{title:"Portfolio",img:"portfolio.jpg",desc:"Portfolio site",description:"Project for OpenClassrooms Full-stack Developer Path. Made using react, react-router and semantic-ui",technology:["react","react-router","semantic-ui"],link:"https://github.com/dkuku/portfolio-website",color:"violet"}];t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Home",keywords:["Daniel","Kukula","portfolio","developer","rails","react","ruby"]}),r.a.createElement(c.a,{style:{marginBottom:"1em"}},r.a.createElement(L.Group,null,X.map(function(e,t){return r.a.createElement(V,Object.assign({key:t,num:t},e))}))))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(156);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},161:function(e,t,a){"use strict";var n=a(166),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(170),s=a.n(l),d=a(153);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title;return o.a.createElement(d.b,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)},o.a.createElement("link",{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"}))},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u;var m="1025518380"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage"}}}}},165:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(54),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},166:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage",description:"Daniel KUkula - homepage and blog",author:"@gatsbyjs"}}}}},167:function(e,t,a){"use strict";var n=a(164),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(153),s=a(161),d=a(465),u=a(463),m=a(197),p=function(e){e.siteTitle;return o.a.createElement(d.a,{size:"large",inverted:!0,style:{borderRadius:0}},o.a.createElement(u.a,null,o.a.createElement(d.a.Item,{as:l.a,to:"/"},o.a.createElement(m.a,{name:"home"})," Home"),o.a.createElement(d.a.Menu,{position:"right"},o.a.createElement(d.a.Item,{as:l.a,to:"/blog"},o.a.createElement(m.a,{name:"edit"}),"Blog"),o.a.createElement(d.a.Item,{as:l.a,to:"/projects"},o.a.createElement(m.a,{name:"code"}),"Projects"),o.a.createElement(d.a.Item,{as:l.a,to:"/about"},o.a.createElement(m.a,{name:"user"}),"About Me"),o.a.createElement(d.a.Item,{as:l.a,to:"/contact"},o.a.createElement(m.a,{name:"mail"}),"Contact"))))};p.propTypes={siteTitle:c.a.string},p.defaultProps={siteTitle:""};var h=p,g=a(7),f=a.n(g),b=a(469),y=a(467),k=a(468),v=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"footer"},o.a.createElement(b.a,{inverted:!0,vertical:!0,style:{height:"100%"}},o.a.createElement(u.a,null,o.a.createElement(y.a,{divided:!0,inverted:!0,stackable:!0},o.a.createElement(y.a.Row,null,o.a.createElement(y.a.Column,{width:7},o.a.createElement(k.a,{as:"h4",inverted:!0},"Created by:"),o.a.createElement("p",null,"Daniel Kukula",o.a.createElement("br",null),"All Rights Reserved")))))))},t}(r.Component),j=(a(176),function(e){var t=e.children;return o.a.createElement(l.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:"Home",keywords:["Daniel","Kukula","portfolio","developer","rails","react"]}),o.a.createElement("div",{className:"site"},o.a.createElement("div",{className:"site-content"},o.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),t),o.a.createElement(v,null)))},data:n})});j.propTypes={children:c.a.node.isRequired};t.a=j},454:function(e,t,a){"use strict";a(455)("link",function(e){return function(t){return e(this,"a","href",t)}})},455:function(e,t,a){var n=a(11),r=a(25),o=a(19),i=/"/g,c=function(e,t,a,n){var r=String(o(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-projects-js-1d71d21305406c996c46.js.map