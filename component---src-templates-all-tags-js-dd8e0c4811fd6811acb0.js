(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{181:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(55),l=a.n(c),i=a(206),o=a(503),s=a(509),d=a(331);t.default=function(e){var t=e.pathContext.tags;if(t)return r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(s.a,null,"All Tags"),r.a.createElement(d.a,null,t.map(function(e){return r.a.createElement(d.a.Item,null,r.a.createElement(l.a,{to:"tags/"+e},e))}))))}},192:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),c=a(55),l=a.n(c);a.d(t,"a",function(){return l.a});a(195);var i=r.a.createContext({});function o(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&c(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(o,{data:t,query:a,render:n||c,staticQueryData:e})})}},195:function(e,t,a){var n;e.exports=(n=a(204))&&n.default||n},200:function(e,t,a){"use strict";var n=a(205),r=a(0),c=a.n(r),l=a(209),i=a.n(l),o=a(192);function s(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,s=e.title;return c.a.createElement(o.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return c.a.createElement(i.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},c.a.createElement("link",{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"}))},data:n})}s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var d="1025518380"},203:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage"}}}}},204:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),r=a.n(n),c=a(83);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},205:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage",description:"Daniel KUkula - homepage and blog",author:"@gatsbyjs"}}}}},206:function(e,t,a){"use strict";var n=a(203),r=a(0),c=a.n(r),l=a(192),i=a(200),o=a(505),s=a(503),d=a(237),u=function(e){e.siteTitle;return c.a.createElement(o.a,{size:"large",inverted:!0,style:{borderRadius:0}},c.a.createElement(s.a,null,c.a.createElement(o.a.Item,{as:l.a,to:"/"},c.a.createElement(d.a,{name:"home"})," Home"),c.a.createElement(o.a.Menu,{position:"right"},c.a.createElement(o.a.Item,{as:l.a,to:"/blog"},c.a.createElement(d.a,{name:"edit"}),"Blog"),c.a.createElement(o.a.Item,{as:l.a,to:"/projects"},c.a.createElement(d.a,{name:"code"}),"Projects"),c.a.createElement(o.a.Item,{as:l.a,to:"/about"},c.a.createElement(d.a,{name:"user"}),"About Me"),c.a.createElement(o.a.Item,{as:l.a,to:"/contact"},c.a.createElement(d.a,{name:"mail"}),"Contact"))))};u.defaultProps={siteTitle:""};var m=u,p=a(508),h=a(507),v=a(509);var f=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return c.a.createElement("div",{id:"footer"},c.a.createElement(p.a,{inverted:!0,vertical:!0,style:{height:"100%"}},c.a.createElement(s.a,null,c.a.createElement(h.a,{divided:!0,inverted:!0,stackable:!0},c.a.createElement(h.a.Row,null,c.a.createElement(h.a.Column,{width:7},c.a.createElement(v.a,{as:"h4",inverted:!0},"Created by:"),c.a.createElement("p",null,"Daniel Kukula",c.a.createElement("br",null),"All Rights Reserved")))))))},n}(r.Component);a(180),t.a=function(e){var t=e.children;return c.a.createElement(l.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{title:"Home",keywords:["Daniel","Kukula","portfolio","developer","rails","react"]}),c.a.createElement("div",{className:"site"},c.a.createElement("div",{className:"site-content"},c.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),t),c.a.createElement(f,null)))},data:n})}},331:function(e,t,a){"use strict";a(220);var n=a(123),r=a.n(n),c=a(196),l=a.n(c),i=a(197),o=a.n(i),s=a(198),d=a.n(s),u=a(194),m=a.n(u),p=a(199),h=a.n(p),v=a(57),f=a.n(v),b=a(56),E=a.n(b),j=a(216),O=a.n(j),y=a(201),g=a.n(y),N=a(191),k=a.n(N),C=a(0),w=a.n(C),A=a(217),I=a(314),P=a(313),K=a(190),x=a(320);function D(e){var t=e.children,a=e.className,n=e.content,c=k()(a,"description"),l=Object(I.a)(D,e),i=Object(P.a)(D,e);return w.a.createElement(i,r()({},l,{className:c}),K.a.isNil(t)?n:t)}D.handledProps=["as","children","className","content"],D.create=Object(x.d)(D,function(e){return{content:e}});var M=D;function z(e){var t=e.children,a=e.className,n=e.content,c=k()("header",a),l=Object(I.a)(z,e),i=Object(P.a)(z,e);return w.a.createElement(i,r()({},l,{className:c}),K.a.isNil(t)?n:t)}z.handledProps=["as","children","className","content"],z.create=Object(x.d)(z,function(e){return{content:e}});var R=z;function q(e){var t=e.children,a=e.className,n=e.content,c=e.description,l=e.floated,i=e.header,o=e.verticalAlign,s=k()(Object(A.e)(l,"floated"),Object(A.f)(o),"content",a),d=Object(I.a)(q,e),u=Object(P.a)(q,e);return K.a.isNil(t)?w.a.createElement(u,r()({},d,{className:s}),R.create(i),M.create(c),n):w.a.createElement(u,r()({},d,{className:s}),t)}q.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],q.create=Object(x.d)(q,function(e){return{content:e}});var G=q,T=a(237);function _(e){var t=e.className,a=e.verticalAlign,n=k()(Object(A.f)(a),t),c=Object(I.a)(_,e);return w.a.createElement(T.a,r()({},c,{className:n}))}_.handledProps=["className","verticalAlign"],_.create=Object(x.d)(_,function(e){return{name:e}});var H=_,Q=a(253),F=a.n(Q),J=a(496),L=function(e){function t(){var e,a;l()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=d()(this,(e=m()(t)).call.apply(e,[this].concat(r))),E()(f()(f()(a)),"handleClick",function(e){a.props.disabled||g()(a.props,"onClick",e,a.props)}),a}return h()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,a=e.active,n=e.children,c=e.className,l=e.content,i=e.description,o=e.disabled,s=e.header,d=e.icon,u=e.image,m=e.value,p=Object(P.a)(t,this.props),h=k()(Object(A.a)(a,"active"),Object(A.a)(o,"disabled"),Object(A.a)("li"!==p,"item"),c),v=Object(I.a)(t,this.props),f="li"===p?{value:m}:{"data-value":m};if(!K.a.isNil(n))return w.a.createElement(p,r()({},f,{role:"listitem",className:h,onClick:this.handleClick},v),n);var b=H.create(d,{autoGenerateKey:!1}),E=J.a.create(u,{autoGenerateKey:!1});if(!Object(C.isValidElement)(l)&&F()(l))return w.a.createElement(p,r()({},f,{role:"listitem",className:h,onClick:this.handleClick},v),b||E,G.create(l,{autoGenerateKey:!1,defaultProps:{header:s,description:i}}));var j=R.create(s,{autoGenerateKey:!1}),O=M.create(i,{autoGenerateKey:!1});return b||E?w.a.createElement(p,r()({},f,{role:"listitem",className:h,onClick:this.handleClick},v),b||E,(l||j||O)&&w.a.createElement(G,null,j,O,l)):w.a.createElement(p,r()({},f,{role:"listitem",className:h,onClick:this.handleClick},v),j,O,l)}}]),t}(C.Component);E()(L,"handledProps",["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"]),L.create=Object(x.d)(L,function(e){return{content:e}});var B=L;function S(e){var t=e.children,a=e.className,n=e.content,c=Object(I.a)(S,e),l=Object(P.a)(S,e),i=k()(Object(A.a)("ul"!==l&&"ol"!==l,"list"),a);return w.a.createElement(l,r()({},c,{className:i}),K.a.isNil(t)?n:t)}S.handledProps=["as","children","className","content"];var U=S,V=function(e){function t(){var e,a;l()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=d()(this,(e=m()(t)).call.apply(e,[this].concat(r))),E()(f()(f()(a)),"handleItemOverrides",function(e){return{onClick:function(t,n){g()(e,"onClick",t,n),g()(a.props,"onItemClick",t,n)}}}),a}return h()(t,e),o()(t,[{key:"render",value:function(){var e=this,a=this.props,n=a.animated,c=a.bulleted,l=a.celled,i=a.children,o=a.className,s=a.content,d=a.divided,u=a.floated,m=a.horizontal,p=a.inverted,h=a.items,v=a.link,f=a.ordered,b=a.relaxed,E=a.selection,j=a.size,y=a.verticalAlign,g=k()("ui",j,Object(A.a)(n,"animated"),Object(A.a)(c,"bulleted"),Object(A.a)(l,"celled"),Object(A.a)(d,"divided"),Object(A.a)(m,"horizontal"),Object(A.a)(p,"inverted"),Object(A.a)(v,"link"),Object(A.a)(f,"ordered"),Object(A.a)(E,"selection"),Object(A.b)(b,"relaxed"),Object(A.e)(u,"floated"),Object(A.f)(y),"list",o),N=Object(I.a)(t,this.props),C=Object(P.a)(t,this.props);return K.a.isNil(i)?K.a.isNil(s)?w.a.createElement(C,r()({role:"list",className:g},N),O()(h,function(t){return B.create(t,{overrideProps:e.handleItemOverrides})})):w.a.createElement(C,r()({role:"list",className:g},N),s):w.a.createElement(C,r()({role:"list",className:g},N),i)}}]),t}(C.Component);E()(V,"Content",G),E()(V,"Description",M),E()(V,"Header",R),E()(V,"Icon",H),E()(V,"Item",B),E()(V,"List",U),E()(V,"handledProps",["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"]);t.a=V}}]);
//# sourceMappingURL=component---src-templates-all-tags-js-dd8e0c4811fd6811acb0.js.map