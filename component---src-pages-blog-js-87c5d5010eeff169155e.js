(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),i=a.n(c),l=a(167),o=a(463),s=a(468),d=a(469),u=a(74),m=a.n(u),p=a(152),h=a.n(p),v=(a(4),a(178)),f=a(272),b=a(271),E=a(151);function j(e){var t=e.children,a=e.className,n=e.clearing,c=e.content,i=e.fitted,l=e.hidden,o=e.horizontal,s=e.inverted,d=e.section,u=e.vertical,p=h()("ui",Object(v.a)(n,"clearing"),Object(v.a)(i,"fitted"),Object(v.a)(l,"hidden"),Object(v.a)(o,"horizontal"),Object(v.a)(s,"inverted"),Object(v.a)(d,"section"),Object(v.a)(u,"vertical"),"divider",a),y=Object(f.a)(j,e),O=Object(b.a)(j,e);return r.a.createElement(O,m()({},y,{className:p}),E.a.isNil(t)?c:t)}j.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],j.propTypes={};var y=j,O=a(289);a.d(t,"query",function(){return g});var g="2459814229";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(l.a,null,r.a.createElement(o.a,null,r.a.createElement(s.a,null,"Blog"),t.map(function(e){var t=e.node,a=t.frontmatter;return r.a.createElement(d.a,null,r.a.createElement(s.a,{as:"h3"},r.a.createElement(i.a,{to:a.path},a.title)),r.a.createElement("p",null,a.date),r.a.createElement("p",null,a.excerpt),r.a.createElement(y,{horizontal:!0},"TAGS"),r.a.createElement(O.a,{relaxed:!0,horizontal:!0},t.frontmatter.tags.map(function(e){return r.a.createElement(O.a.Item,null,r.a.createElement(i.a,{to:"/tags/"+e},e))})))})))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(156);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},161:function(e,t,a){"use strict";var n=a(166),r=a(0),c=a.n(r),i=a(4),l=a.n(i),o=a(170),s=a.n(o),d=a(153);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title;return c.a.createElement(d.b,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return c.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)},c.a.createElement("link",{rel:"stylesheet",href:"//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"}))},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var m="1025518380"},164:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage"}}}}},165:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(54),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},166:function(e){e.exports={data:{site:{siteMetadata:{title:"DK-homepage",description:"Daniel KUkula - homepage and blog",author:"@gatsbyjs"}}}}},167:function(e,t,a){"use strict";var n=a(164),r=a(0),c=a.n(r),i=a(4),l=a.n(i),o=a(153),s=a(161),d=a(465),u=a(463),m=a(197),p=function(e){e.siteTitle;return c.a.createElement(d.a,{size:"large",inverted:!0,style:{borderRadius:0}},c.a.createElement(u.a,null,c.a.createElement(d.a.Item,{as:o.a,to:"/"},c.a.createElement(m.a,{name:"home"})," Home"),c.a.createElement(d.a.Menu,{position:"right"},c.a.createElement(d.a.Item,{as:o.a,to:"/blog"},c.a.createElement(m.a,{name:"edit"}),"Blog"),c.a.createElement(d.a.Item,{as:o.a,to:"/projects"},c.a.createElement(m.a,{name:"code"}),"Projects"),c.a.createElement(d.a.Item,{as:o.a,to:"/about"},c.a.createElement(m.a,{name:"user"}),"About Me"),c.a.createElement(d.a.Item,{as:o.a,to:"/contact"},c.a.createElement(m.a,{name:"mail"}),"Contact"))))};p.propTypes={siteTitle:l.a.string},p.defaultProps={siteTitle:""};var h=p,v=a(7),f=a.n(v),b=a(469),E=a(467),j=a(468),y=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){return c.a.createElement("div",{id:"footer"},c.a.createElement(b.a,{inverted:!0,vertical:!0,style:{height:"100%"}},c.a.createElement(u.a,null,c.a.createElement(E.a,{divided:!0,inverted:!0,stackable:!0},c.a.createElement(E.a.Row,null,c.a.createElement(E.a.Column,{width:7},c.a.createElement(j.a,{as:"h4",inverted:!0},"Created by:"),c.a.createElement("p",null,"Daniel Kukula",c.a.createElement("br",null),"All Rights Reserved")))))))},t}(r.Component),O=(a(176),function(e){var t=e.children;return c.a.createElement(o.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{title:"Home",keywords:["Daniel","Kukula","portfolio","developer","rails","react"]}),c.a.createElement("div",{className:"site"},c.a.createElement("div",{className:"site-content"},c.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),t),c.a.createElement(y,null)))},data:n})});O.propTypes={children:l.a.node.isRequired};t.a=O},289:function(e,t,a){"use strict";var n=a(74),r=a.n(n),c=a(157),i=a.n(c),l=a(158),o=a.n(l),s=a(159),d=a.n(s),u=a(155),m=a.n(u),p=a(160),h=a.n(p),v=a(35),f=a.n(v),b=a(34),E=a.n(b),j=a(177),y=a.n(j),O=a(162),g=a.n(O),N=a(152),k=a.n(N),C=(a(4),a(0)),w=a.n(C),T=a(178),P=a(272),q=a(271),A=a(151),I=a(278);function R(e){var t=e.children,a=e.className,n=e.content,c=k()(a,"description"),i=Object(P.a)(R,e),l=Object(q.a)(R,e);return w.a.createElement(l,r()({},i,{className:c}),A.a.isNil(t)?n:t)}R.handledProps=["as","children","className","content"],R.propTypes={},R.create=Object(I.d)(R,function(e){return{content:e}});var z=R;function K(e){var t=e.children,a=e.className,n=e.content,c=k()("header",a),i=Object(P.a)(K,e),l=Object(q.a)(K,e);return w.a.createElement(l,r()({},i,{className:c}),A.a.isNil(t)?n:t)}K.handledProps=["as","children","className","content"],K.propTypes={},K.create=Object(I.d)(K,function(e){return{content:e}});var x=K;function M(e){var t=e.children,a=e.className,n=e.content,c=e.description,i=e.floated,l=e.header,o=e.verticalAlign,s=k()(Object(T.e)(i,"floated"),Object(T.f)(o),"content",a),d=Object(P.a)(M,e),u=Object(q.a)(M,e);return A.a.isNil(t)?w.a.createElement(u,r()({},d,{className:s}),x.create(l),z.create(c),n):w.a.createElement(u,r()({},d,{className:s}),t)}M.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],M.propTypes={},M.create=Object(I.d)(M,function(e){return{content:e}});var D=M,G=a(197);function H(e){var t=e.className,a=e.verticalAlign,n=k()(Object(T.f)(a),t),c=Object(P.a)(H,e);return w.a.createElement(G.a,r()({},c,{className:n}))}H.handledProps=["className","verticalAlign"],H.propTypes={},H.create=Object(I.d)(H,function(e){return{name:e}});var S=H,B=a(213),F=a.n(B),J=a(456),L=function(e){function t(){var e,a;i()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=d()(this,(e=m()(t)).call.apply(e,[this].concat(r))),E()(f()(f()(a)),"handleClick",function(e){a.props.disabled||g()(a.props,"onClick",e,a.props)}),a}return h()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,a=e.active,n=e.children,c=e.className,i=e.content,l=e.description,o=e.disabled,s=e.header,d=e.icon,u=e.image,m=e.value,p=Object(q.a)(t,this.props),h=k()(Object(T.a)(a,"active"),Object(T.a)(o,"disabled"),Object(T.a)("li"!==p,"item"),c),v=Object(P.a)(t,this.props),f="li"===p?{value:m}:{"data-value":m};if(!A.a.isNil(n))return w.a.createElement(p,r()({},f,{role:"listitem",className:h,onClick:this.handleClick},v),n);var b=S.create(d,{autoGenerateKey:!1}),E=J.a.create(u,{autoGenerateKey:!1});if(!Object(C.isValidElement)(i)&&F()(i))return w.a.createElement(p,r()({},f,{role:"listitem",className:h,onClick:this.handleClick},v),b||E,D.create(i,{autoGenerateKey:!1,defaultProps:{header:s,description:l}}));var j=x.create(s,{autoGenerateKey:!1}),y=z.create(l,{autoGenerateKey:!1});return b||E?w.a.createElement(p,r()({},f,{role:"listitem",className:h,onClick:this.handleClick},v),b||E,(i||j||y)&&w.a.createElement(D,null,j,y,i)):w.a.createElement(p,r()({},f,{role:"listitem",className:h,onClick:this.handleClick},v),j,y,i)}}]),t}(C.Component);E()(L,"handledProps",["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"]),L.propTypes={},L.create=Object(I.d)(L,function(e){return{content:e}});var Q=L;function U(e){var t=e.children,a=e.className,n=e.content,c=Object(P.a)(U,e),i=Object(q.a)(U,e),l=k()(Object(T.a)("ul"!==i&&"ol"!==i,"list"),a);return w.a.createElement(i,r()({},c,{className:l}),A.a.isNil(t)?n:t)}U.handledProps=["as","children","className","content"],U.propTypes={};var V=U,W=function(e){function t(){var e,a;i()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=d()(this,(e=m()(t)).call.apply(e,[this].concat(r))),E()(f()(f()(a)),"handleItemOverrides",function(e){return{onClick:function(t,n){g()(e,"onClick",t,n),g()(a.props,"onItemClick",t,n)}}}),a}return h()(t,e),o()(t,[{key:"render",value:function(){var e=this,a=this.props,n=a.animated,c=a.bulleted,i=a.celled,l=a.children,o=a.className,s=a.content,d=a.divided,u=a.floated,m=a.horizontal,p=a.inverted,h=a.items,v=a.link,f=a.ordered,b=a.relaxed,E=a.selection,j=a.size,O=a.verticalAlign,g=k()("ui",j,Object(T.a)(n,"animated"),Object(T.a)(c,"bulleted"),Object(T.a)(i,"celled"),Object(T.a)(d,"divided"),Object(T.a)(m,"horizontal"),Object(T.a)(p,"inverted"),Object(T.a)(v,"link"),Object(T.a)(f,"ordered"),Object(T.a)(E,"selection"),Object(T.b)(b,"relaxed"),Object(T.e)(u,"floated"),Object(T.f)(O),"list",o),N=Object(P.a)(t,this.props),C=Object(q.a)(t,this.props);return A.a.isNil(l)?A.a.isNil(s)?w.a.createElement(C,r()({role:"list",className:g},N),y()(h,function(t){return Q.create(t,{overrideProps:e.handleItemOverrides})})):w.a.createElement(C,r()({role:"list",className:g},N),s):w.a.createElement(C,r()({role:"list",className:g},N),l)}}]),t}(C.Component);E()(W,"Content",D),E()(W,"Description",z),E()(W,"Header",x),E()(W,"Icon",S),E()(W,"Item",Q),E()(W,"List",V),E()(W,"handledProps",["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"]),W.propTypes={};t.a=W}}]);
//# sourceMappingURL=component---src-pages-blog-js-87c5d5010eeff169155e.js.map