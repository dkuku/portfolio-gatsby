(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{MN1z:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("+ZDr"),l=a.n(c),i=a("Bl7J"),s=a("yE/o"),o=a("aQu0"),d=a("WYlG");t.default=function(e){var t=e.pageContext,a=t.posts,n=t.tagName;if(a)return r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(o.a,null,"Posts about ",n),r.a.createElement(d.a,null,a.map((function(e){return r.a.createElement(d.a.Item,null,r.a.createElement(l.a,{to:e.frontmatter.path},e.frontmatter.title))})))))}},WYlG:function(e,t,a){"use strict";a("MIFh"),a("y7hu");var n=a("j8BX"),r=a.n(n),c=a("phZJ"),l=a.n(c),i=a("lFqo"),s=a.n(i),o=a("Jmq7"),d=a.n(o),u=a("aDmP"),m=a.n(u),p=a("IVAY"),h=a.n(p),b=a("v06X"),v=a.n(b),O=a("0jh0"),f=a.n(O),j=a("3WF5"),N=a.n(j),k=a("Og4/"),E=a.n(k),y=a("TSYQ"),C=a.n(y),g=(a("17x9"),a("q1tI")),I=a.n(g),P=a("ZeOK"),A=a("ICNK"),w=a("Y53p"),T=a("H+2d"),G=a("MZgk");function K(e){var t=e.children,a=e.className,n=e.content,c=C()(a,"description"),l=Object(A.a)(K,e),i=Object(w.a)(K,e);return I.a.createElement(i,r()({},l,{className:c}),T.a.isNil(t)?n:t)}K.handledProps=["as","children","className","content"],K.propTypes={},K.create=Object(G.d)(K,(function(e){return{content:e}}));var z=K;function Y(e){var t=e.children,a=e.className,n=e.content,c=C()("header",a),l=Object(A.a)(Y,e),i=Object(w.a)(Y,e);return I.a.createElement(i,r()({},l,{className:c}),T.a.isNil(t)?n:t)}Y.handledProps=["as","children","className","content"],Y.propTypes={},Y.create=Object(G.d)(Y,(function(e){return{content:e}}));var x=Y;function J(e){var t=e.children,a=e.className,n=e.content,c=e.description,l=e.floated,i=e.header,s=e.verticalAlign,o=C()(Object(P.e)(l,"floated"),Object(P.f)(s),"content",a),d=Object(A.a)(J,e),u=Object(w.a)(J,e);return T.a.isNil(t)?I.a.createElement(u,r()({},d,{className:o}),x.create(i),z.create(c),n):I.a.createElement(u,r()({},d,{className:o}),t)}J.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],J.propTypes={},J.create=Object(G.d)(J,(function(e){return{content:e}}));var q=J,D=a("D1pA");function Z(e){var t=e.className,a=e.verticalAlign,n=C()(Object(P.f)(a),t),c=Object(A.a)(Z,e);return I.a.createElement(D.a,r()({},c,{className:n}))}Z.handledProps=["className","verticalAlign"],Z.propTypes={},Z.create=Object(G.d)(Z,(function(e){return{name:e}}));var F=Z,M=a("YO3V"),V=a.n(M),W=a("5XkN"),X=function(e){function t(){var e,a;l()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=d()(this,(e=m()(t)).call.apply(e,[this].concat(r))),f()(v()(v()(a)),"handleClick",(function(e){a.props.disabled||E()(a.props,"onClick",e,a.props)})),a}return h()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,a=e.active,n=e.children,c=e.className,l=e.content,i=e.description,s=e.disabled,o=e.header,d=e.icon,u=e.image,m=e.value,p=Object(w.a)(t,this.props),h=C()(Object(P.a)(a,"active"),Object(P.a)(s,"disabled"),Object(P.a)("li"!==p,"item"),c),b=Object(A.a)(t,this.props),v="li"===p?{value:m}:{"data-value":m};if(!T.a.isNil(n))return I.a.createElement(p,r()({},v,{role:"listitem",className:h,onClick:this.handleClick},b),n);var O=F.create(d,{autoGenerateKey:!1}),f=W.a.create(u,{autoGenerateKey:!1});if(!Object(g.isValidElement)(l)&&V()(l))return I.a.createElement(p,r()({},v,{role:"listitem",className:h,onClick:this.handleClick},b),O||f,q.create(l,{autoGenerateKey:!1,defaultProps:{header:o,description:i}}));var j=x.create(o,{autoGenerateKey:!1}),N=z.create(i,{autoGenerateKey:!1});return O||f?I.a.createElement(p,r()({},v,{role:"listitem",className:h,onClick:this.handleClick},b),O||f,(l||j||N)&&I.a.createElement(q,null,j,N,l)):I.a.createElement(p,r()({},v,{role:"listitem",className:h,onClick:this.handleClick},b),j,N,l)}}]),t}(g.Component);f()(X,"handledProps",["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"]),X.propTypes={},X.create=Object(G.d)(X,(function(e){return{content:e}}));var B=X;function H(e){var t=e.children,a=e.className,n=e.content,c=Object(A.a)(H,e),l=Object(w.a)(H,e),i=C()(Object(P.a)("ul"!==l&&"ol"!==l,"list"),a);return I.a.createElement(l,r()({},c,{className:i}),T.a.isNil(t)?n:t)}H.handledProps=["as","children","className","content"],H.propTypes={};var Q=H,L=function(e){function t(){var e,a;l()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=d()(this,(e=m()(t)).call.apply(e,[this].concat(r))),f()(v()(v()(a)),"handleItemOverrides",(function(e){return{onClick:function(t,n){E()(e,"onClick",t,n),E()(a.props,"onItemClick",t,n)}}})),a}return h()(t,e),s()(t,[{key:"render",value:function(){var e=this,a=this.props,n=a.animated,c=a.bulleted,l=a.celled,i=a.children,s=a.className,o=a.content,d=a.divided,u=a.floated,m=a.horizontal,p=a.inverted,h=a.items,b=a.link,v=a.ordered,O=a.relaxed,f=a.selection,j=a.size,k=a.verticalAlign,E=C()("ui",j,Object(P.a)(n,"animated"),Object(P.a)(c,"bulleted"),Object(P.a)(l,"celled"),Object(P.a)(d,"divided"),Object(P.a)(m,"horizontal"),Object(P.a)(p,"inverted"),Object(P.a)(b,"link"),Object(P.a)(v,"ordered"),Object(P.a)(f,"selection"),Object(P.b)(O,"relaxed"),Object(P.e)(u,"floated"),Object(P.f)(k),"list",s),y=Object(A.a)(t,this.props),g=Object(w.a)(t,this.props);return T.a.isNil(i)?T.a.isNil(o)?I.a.createElement(g,r()({role:"list",className:E},y),N()(h,(function(t){return B.create(t,{overrideProps:e.handleItemOverrides})}))):I.a.createElement(g,r()({role:"list",className:E},y),o):I.a.createElement(g,r()({role:"list",className:E},y),i)}}]),t}(g.Component);f()(L,"Content",q),f()(L,"Description",z),f()(L,"Header",x),f()(L,"Icon",F),f()(L,"Item",B),f()(L,"List",Q),f()(L,"handledProps",["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"]),L.propTypes={};t.a=L}}]);
//# sourceMappingURL=component---src-templates-tags-js-e07e41e8bbcb5c92ae18.js.map