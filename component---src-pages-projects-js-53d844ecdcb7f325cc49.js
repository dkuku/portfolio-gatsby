(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(169),i=a(167),c=a(457),s=a(143),l=a.n(s),u=a(149),d=a.n(u),p=a(150),m=a.n(p),h=a(151),g=a.n(h),f=a(147),y=a.n(f),b=a(152),k=a.n(b),v=a(52),j=a.n(v),E=a(51),w=a.n(E),O=a(145),C=a.n(O),N=a(4),P=a.n(N),x=a(170),R=a(261),T=a(260),A=a(144),G=a(450),q=(a(157),a(267));function F(e){var t=e.children,a=e.className,n=e.content,o=e.textAlign,i=C()(Object(x.d)(o),"description",a),c=Object(R.a)(F,e),s=Object(T.a)(F,e);return r.a.createElement(s,l()({},c,{className:i}),A.a.isNil(t)?n:t)}F.handledProps=["as","children","className","content","textAlign"],F.propTypes={};var S=F;function D(e){var t=e.children,a=e.className,n=e.content,o=e.textAlign,i=C()(Object(x.d)(o),"header",a),c=Object(R.a)(D,e),s=Object(T.a)(D,e);return r.a.createElement(s,l()({},c,{className:i}),A.a.isNil(t)?n:t)}D.handledProps=["as","children","className","content","textAlign"],D.propTypes={};var M=D;function B(e){var t=e.children,a=e.className,n=e.content,o=e.textAlign,i=C()(Object(x.d)(o),"meta",a),c=Object(R.a)(B,e),s=Object(T.a)(B,e);return r.a.createElement(s,l()({},c,{className:i}),A.a.isNil(t)?n:t)}B.handledProps=["as","children","className","content","textAlign"],B.propTypes={};var I=B;function K(e){var t=e.children,a=e.className,n=e.content,o=e.description,i=e.extra,c=e.header,s=e.meta,u=e.textAlign,d=C()(Object(x.a)(i,"extra"),Object(x.d)(u),"content",a),p=Object(R.a)(K,e),m=Object(T.a)(K,e);return A.a.isNil(t)?A.a.isNil(n)?r.a.createElement(m,l()({},p,{className:d}),Object(q.c)(M,function(e){return{content:e}},c,{autoGenerateKey:!1}),Object(q.c)(I,function(e){return{content:e}},s,{autoGenerateKey:!1}),Object(q.c)(S,function(e){return{content:e}},o,{autoGenerateKey:!1})):r.a.createElement(m,l()({},p,{className:d}),n):r.a.createElement(m,l()({},p,{className:d}),t)}K.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],K.propTypes={};var L=K,Q=a(183),W=a.n(Q);function H(e){var t=e.centered,a=e.children,n=e.className,o=e.content,i=e.doubling,c=e.items,s=e.itemsPerRow,u=e.stackable,d=e.textAlign,p=C()("ui",Object(x.a)(t,"centered"),Object(x.a)(i,"doubling"),Object(x.a)(u,"stackable"),Object(x.d)(d),Object(x.g)(s),"cards",n),m=Object(R.a)(H,e),h=Object(T.a)(H,e);if(!A.a.isNil(a))return r.a.createElement(h,l()({},m,{className:p}),a);if(!A.a.isNil(o))return r.a.createElement(h,l()({},m,{className:p}),o);var g=W()(c,function(e){var t=e.key||[e.header,e.description].join("-");return r.a.createElement(_,l()({key:t},e))});return r.a.createElement(h,l()({},m,{className:p}),g)}H.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],H.propTypes={};var U=H,_=function(e){function t(){var e,a;d()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=g()(this,(e=y()(t)).call.apply(e,[this].concat(r))),w()(j()(j()(a)),"handleClick",function(e){var t=a.props.onClick;t&&t(e,a.props)}),a}return k()(t,e),m()(t,[{key:"render",value:function(){var e=this.props,a=e.centered,n=e.children,o=e.className,i=e.color,c=e.content,s=e.description,u=e.extra,d=e.fluid,p=e.header,m=e.href,h=e.image,g=e.link,f=e.meta,y=e.onClick,b=e.raised,k=C()("ui",i,Object(x.a)(a,"centered"),Object(x.a)(d,"fluid"),Object(x.a)(g,"link"),Object(x.a)(b,"raised"),"card",o),v=Object(R.a)(t,this.props),j=Object(T.a)(t,this.props,function(){if(y)return"a"});return A.a.isNil(n)?A.a.isNil(c)?r.a.createElement(j,l()({},v,{className:k,href:m,onClick:this.handleClick}),G.a.create(h,{autoGenerateKey:!1}),(s||p||f)&&r.a.createElement(L,{description:s,header:p,meta:f}),u&&r.a.createElement(L,{extra:!0},u)):r.a.createElement(j,l()({},v,{className:k,href:m,onClick:this.handleClick}),c):r.a.createElement(j,l()({},v,{className:k,href:m,onClick:this.handleClick}),n)}}]),t}(n.Component);w()(_,"Content",L),w()(_,"Description",S),w()(_,"Group",U),w()(_,"Header",M),w()(_,"Meta",I),w()(_,"handledProps",["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"]),_.propTypes={};a(448);var J=a(281),z=function(e){return r.a.createElement("div",null,r.a.createElement("ul",null,e.tech.map(function(e){return r.a.createElement("li",{key:e},e)})))},Y=function(e){var t=e.title,a=e.img,n=e.desc,o=e.color,i=e.description,c=e.technology,s=e.link;return r.a.createElement(_,{centered:!0,raised:!0,href:s,target:"_blank"},r.a.createElement(G.a,{src:"images/".concat(a)}),r.a.createElement(_.Content,null,r.a.createElement(J.a,{style:{marginBottom:"0.5em"},color:o,ribbon:!0},c[0]),r.a.createElement(_.Header,null,t),r.a.createElement(_.Meta,null,n),r.a.createElement(_.Description,null,i)),r.a.createElement(_.Content,{extra:!0},r.a.createElement(z,{tech:c})))};Y.propTypes={title:P.a.string.isRequired,desc:P.a.string,description:P.a.string.isRequired,img:P.a.string.isRequired,technology:P.a.arrayOf(P.a.string).isRequired,color:P.a.string,link:P.a.string};var V=Y,X=[{title:"Neighborhood",img:"neighborhood.jpg",desc:"Aid plaform for my neighbourhood",description:"Project made for Openclassrooms Full Stack Path. Full stack app. Backend uses ruby on rails, Frontend uses react ecosystem",technology:["React","Redux","Rails","Google maps","Semantic-UI"],link:"https://neighboorhelp.herokuapp.com/",color:"pink"},{title:"Boulder Bike Tour",img:"bbt.jpg",desc:"Website for Mountain Bike Race",description:"Project for OpenClassrooms Full-stack Developer Path. The goal of this project was to learn using external api and create own",technology:["React","Rails","flickr-api","Google maps"],link:"https://boulderbiketour.herokuapp.com",color:"green"},{title:"Move and Groove",img:"mandg.jpg",desc:"Fitness Tracker",description:"Project made for Openclassrooms Full-stack Developer path. Website allow to register and add activities to user profile",technology:["Rails","Devise gem","Bootstrap"],link:"https://mandgruby.herokuapp.com/",color:"blue"},{title:"Chalets and Caviar",img:"Chalets.jpg",desc:"Website for Real Estate Agency",description:"Project for OpenClassrooms Full-stack Developer Path. Website made using wordpress and some additional plugins",technology:["wordpress"],link:"http://dev-daniel-project2.pantheonsite.io/",color:"yellow"},{title:"Brooklyn Outdoor Film Festival",img:"Festival.jpg",desc:"Website prototype for a Film Festival",description:"Project for OpenClassrooms Full-stack Developer Path. Frontend made using bootstrap and svg for diagonal sections",technology:["bootstrap","html","js","svg"],link:"projects/prototype/index.html",color:"teal"},{title:"Chat app",img:"chat.png",desc:"Chat app written in node.js",description:"Project for Andrew Mead's Complete node.js Developer Course. Application uses node.js express and socket.io. A couple of users can login to the same room and chat.",technology:["node.js","socket.io","express"],link:"https://chat-node-by-kuku.herokuapp.com/",color:"purple"},{title:"Todo App",img:"todo.png",desc:"Simple todo app",description:"Project for Colt Steel's The Web Developer Bootcamp extended by me",technology:["jQuery","html","css","js"],link:"https://github.com/dkuku/todo-list-jQuery",color:"orange"},{title:"Rice Rocks",img:"Asteroids.jpg",desc:"Asteroids Clone",description:"Game made using python and codeskulptor for Interactive Python course on Coursera",technology:["object oriented python","codeskulptor","simple gui"],link:"http://www.codeskulptor.org/#user16_T5YN7P0gBI_6.py",color:"red"},{title:"RGB Game",img:"rgb-game.png",desc:"Color guessing game",description:"Project for Colt Steel's The Web Developer Bootcamp. Game made using html, css and javascript",technology:["js","html","css"],link:"projects/rgb-color-game.html",color:"brown"},{title:"Portfolio",img:"portfolio.jpg",desc:"Portfolio site",description:"Project for OpenClassrooms Full-stack Developer Path. Made using react, react-router and semantic-ui",technology:["react","react-router","semantic-ui"],link:"https://github.com/dkuku/portfolio-website",color:"violet"}];t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Home",keywords:["Daniel","Kukula","portfolio","developer","rails","react"]}),r.a.createElement(c.a,{style:{marginBottom:"1em"}},r.a.createElement(_.Group,null,X.map(function(e,t){return r.a.createElement(V,Object.assign({key:t,num:t},e))}))))}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(146),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(156),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,a){var n;e.exports=(n=a(162))&&n.default||n},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},162:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(53),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},166:function(e,t,a){},167:function(e,t,a){"use strict";var n=a(168),r=a(0),o=a.n(r),i=a(4),c=a.n(i),s=a(188),l=a.n(s),u=a(148);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title;return o.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)},o.a.createElement("link",{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"}))},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},169:function(e,t,a){"use strict";var n=a(161),r=a(0),o=a.n(r),i=a(4),c=a.n(i),s=a(148),l=a(459),u=a(457),d=a(282),p=function(e){e.siteTitle;return o.a.createElement(l.a,{size:"large",inverted:!0,style:{borderRadius:0}},o.a.createElement(u.a,null,o.a.createElement(l.a.Item,{as:s.Link,to:"/"},o.a.createElement(d.a,{name:"home"})," Home"),o.a.createElement(l.a.Menu,{position:"right"},o.a.createElement(l.a.Item,{as:s.Link,to:"/projects"},o.a.createElement(d.a,{name:"code"}),"Projects"),o.a.createElement(l.a.Item,{as:s.Link,to:"/about"},o.a.createElement(d.a,{name:"user"}),"About Me"),o.a.createElement(l.a.Item,{as:s.Link,to:"/contact"},o.a.createElement(d.a,{name:"mail"}),"Contact"))))};p.propTypes={siteTitle:c.a.string},p.defaultProps={siteTitle:""};var m=p,h=a(7),g=a.n(h),f=a(461),y=a(463),b=a(462),k=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"footer"},o.a.createElement(f.a,{inverted:!0,vertical:!0,style:{height:"100%"}},o.a.createElement(u.a,null,o.a.createElement(y.a,{divided:!0,inverted:!0,stackable:!0},o.a.createElement(y.a.Row,null,o.a.createElement(y.a.Column,{width:7},o.a.createElement(b.a,{as:"h4",inverted:!0},"Created by:"),o.a.createElement("p",null,"Daniel Kukula",o.a.createElement("br",null),"All Rights Reserved")))))))},t}(r.Component),v=(a(166),function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"site"},o.a.createElement("div",{className:"site-content"},o.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),t),o.a.createElement(k,null)))},data:n})});v.propTypes={children:c.a.node.isRequired};t.a=v},448:function(e,t,a){"use strict";a(449)("link",function(e){return function(t){return e(this,"a","href",t)}})},449:function(e,t,a){var n=a(11),r=a(25),o=a(17),i=/"/g,c=function(e,t,a,n){var r=String(o(e)),c="<"+t;return""!==a&&(c+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(c),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-projects-js-53d844ecdcb7f325cc49.js.map